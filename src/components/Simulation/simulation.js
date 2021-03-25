import { useState, useEffect, useCallback } from "react";
import useSound from "use-sound";
import { IconButton, Grid } from "@material-ui/core";
import VolumeOffRoundedIcon from "@material-ui/icons/VolumeOffRounded";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import TimerOffRoundedIcon from "@material-ui/icons/TimerOffRounded";
import Timer10RoundedIcon from "@material-ui/icons/Timer10Rounded";
import Timer3RoundedIcon from "@material-ui/icons/Timer3Rounded";
import TimerRoundedIcon from "@material-ui/icons/TimerRounded";
import RadioButtonCheckedRoundedIcon from "@material-ui/icons/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded";
import FlareRoundedIcon from "@material-ui/icons/FlareRounded";
import InsertChartOutlinedOutlinedIcon from "@material-ui/icons/InsertChartOutlinedOutlined";
import InsertChartRoundedIcon from "@material-ui/icons/InsertChartRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { useHistory } from "react-router-dom";

import { useStickyState } from "../../common/hooks/useStickyState";
import { WelcomeModal } from "./WelcomeModal/welcomeModal";
import { CRT } from "./CRT/crt";
import { Score } from "./score";
import { isBetween } from "./utils";
import { OptionButton } from "./Option/option";
import { Wall } from "./SurveillanceWall/SurveillanceWall";

import { questions } from "./questions";

import "./simulation.css";

import bgmSfx from "../../common/audio/bgm.mp3";
import beepSfx from "../../common/audio/beep.mp3";

const initialCreditScore = [900, 600, 300];
const timerState = [10, 5, 3, false];

export const Simulation = () => {
  // Global Control
  const [soundEnabled, setSoundEnabled] = useStickyState(true, "soundEnabled");
  const [timerEnabled, setTimerEnabled] = useStickyState(
    timerState[1],
    "timerEnabled"
  );
  const [sirenEnabled, setSirenEnabled] = useStickyState(true, "sirenEnabled");
  useStickyState(false, "hintEnabled");
  const [disparityEnabled, setDisparityEnabled] = useStickyState(
    true,
    "disparityEnabled"
  );
  const [
    initialCreditScoreEnabled,
    setInitialCreditScoreEnabled,
  ] = useStickyState(initialCreditScore[1], "initialCreditScoreEnabled");

  // Routing
  const history = useHistory();

  history.listen(() => {
    stopBgm();
  });

  // Sound Control
  const [playBgm, { stop: stopBgm, sound: bgm }] = useSound(bgmSfx, {
    autoplay: true,
    loop: true,
    onplayerror: function () {
      bgm.once("unlock", function () {
        playBgm();
      });
    },
    interrupt: true,
    mute: !soundEnabled,
    volume: 0.5,
  });
  const [playBeep] = useSound(beepSfx, {
    volume: 0.5,
  });

  const onMute = () => {
    setSoundEnabled(!soundEnabled);
    bgm.mute(soundEnabled);
  };

  // Timer Control
  const [timeLeft, setTimeLeft] = useState(0);

  const onToggleTimer = () => {
    setTimerEnabled(
      timerState[(timerState.indexOf(timerEnabled) + 1) % timerState.length]
    );
  };

  const renderTimer = () => {
    switch (timerEnabled) {
      case 10:
        return <Timer10RoundedIcon />;
      case 5:
        return <TimerRoundedIcon />;
      case 3:
        return <Timer3RoundedIcon />;
      default:
        return <TimerOffRoundedIcon />;
    }
  };

  // Siren Control
  const onToggleSiren = () => {
    setSirenEnabled(!sirenEnabled);
  };

  // Disparity Control
  const onToggleDisparity = () => {
    setDisparityEnabled(!disparityEnabled);
  };

  // Initial CreditScore Control
  const onToggleCreditScore = () => {
    setInitialCreditScoreEnabled(
      initialCreditScore[
        (initialCreditScore.indexOf(initialCreditScoreEnabled) + 1) %
          initialCreditScore.length
      ]
    );
  };

  const renderCreditScoreSetting = () => {
    switch (initialCreditScoreEnabled) {
      case 900:
        return <StarRoundedIcon />;
      case 300:
        return <StarOutlineRoundedIcon />;
      default:
        return <StarHalfRoundedIcon />;
    }
  };

  // Game State
  const [gameState, setGameState] = useState("START");
  const [gameIndex, setGameIndex] = useState(0);
  const [creditScore, setCreditScore] = useState(initialCreditScoreEnabled);
  const [prevCreditScore, setPrevCreditScore] = useState(
    initialCreditScoreEnabled
  );

  const nextQuestion = useCallback(
    (value) => {
      setPrevCreditScore(creditScore);
      setCreditScore(creditScore + value);
      if (gameIndex === questions.length - 1) {
        setGameState("END");
      } else {
        setGameIndex(gameIndex + 1);
        setTimeLeft(timerEnabled);
      }
    },
    [gameIndex, creditScore, timerEnabled]
  );

  const startGame = () => {
    setGameState("GAME");
    setGameIndex(0);
    setTimeLeft(timerEnabled);
    setPrevCreditScore(initialCreditScoreEnabled);
    setCreditScore(initialCreditScoreEnabled);
  };

  useEffect(() => {
    // Don't count if no timer
    if (!timerEnabled || gameState !== "GAME") return;

    if (timeLeft <= 0) return nextQuestion(questions[gameIndex].skip);

    // save intervalId to clear the interval when the
    // component re-renders
    let intervalId;
    if (timeLeft < 1) {
      intervalId = setInterval(() => {
        playBeep();
        setTimeLeft(timeLeft - 0.1);
      }, 100);
    } else if (timeLeft < 3) {
      intervalId = setInterval(() => {
        playBeep();
        setTimeLeft(timeLeft - 0.2);
      }, 200);
    } else {
      intervalId = setInterval(() => {
        playBeep();
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft, nextQuestion, timerEnabled, gameState, playBeep, gameIndex]);

  const renderGame = () => {
    switch (gameState) {
      case "START":
        return (
          <div
            className="title-header"
            data-augmented-ui="tl-clip br-clip both"
          >
            <div style={{ marginTop: "auto" }}>
              <span>档案(Dang An)</span>
              <div
                style={{
                  fontSize: "14px",
                  padding: "16px 24px",
                  marginTop: "16px",
                }}
              >
                You and your family are Singaporeans migrating to China for the
                first time. You are given this questionnaire which would gauge
                your social credit. The social credit system is intended to
                standardize the assessment of citizens' business economic and
                social reputation.{" "}
                <a href="/images/cs-infographic.png" target="_blank">
                  Here
                </a>{" "}
                is a quick infographic to explain how you will be will be
                scored!
              </div>
            </div>
            <div className="start-button-container">
              <OptionButton
                onClick={() => {
                  setGameState("RULES");
                }}
                className="start-button"
              >
                START
              </OptionButton>
            </div>
          </div>
        );
      case "RULES":
        return (
          <div
            className="rules-header"
            data-augmented-ui="tl-clip br-clip both"
          >
            <div style={{ marginTop: "auto" }}>
              <span>Rules</span>
              <div
                style={{
                  fontSize: "14px",
                  padding: "16px 5vw",
                  textAlign: "start",
                }}
              >
                1. You will be presented with choices for each question <br />
                2. Answer each question truthfully <br />
                3. You have a fix time to answer each question <br />
                4. The outcome of these choices will affect your score <br />
                5. Option picked is final for the round <br />
                6. Failing to answer the question will result in a penalty{" "}
                <br />
                7. If wealth falls below 0, you are in-debt hence your credit
                score will no longer increase. <br />
                <br />
                Social Credit Score - starts off at 600 (default) with a limit
                at 1500, keep this score as high as possible. <br />
                <br />
                Wealth - score starts at 1000 (default) and goes down when you
                pick a choice that requires payment or makes you unhappy. <br />
                <br />
                The objective of the game is to maximize your social credit
                score at the end of the questionnaire.
              </div>
            </div>
            <div className="start-button-container">
              <OptionButton onClick={startGame} className="start-button">
                ACCEPT
              </OptionButton>
            </div>
          </div>
        );
      case "GAME":
        return (
          <>
            {timerEnabled ? (
              <code className="timer">{Math.ceil(timeLeft)}</code>
            ) : (
              ""
            )}
            <h1>{questions[gameIndex].question}</h1>
            <Grid container spacing={2}>
              {questions[gameIndex].options.map((option, index) => {
                if (disparityEnabled && !isBetween(creditScore, option.range))
                  return "";
                return (
                  <Grid
                    item
                    key={index}
                    sm={12 / questions[gameIndex].options.length}
                    xs={12}
                    className="answer-container"
                  >
                    <OptionButton
                      onClick={() => nextQuestion(option.value)}
                      hint={option.value}
                      key={index}
                    >
                      {option.answer}
                    </OptionButton>
                  </Grid>
                );
              })}
            </Grid>
            <div className="score-position">
              <Score
                creditScore={creditScore}
                prevCreditScore={prevCreditScore}
              />
            </div>
            <RadioButtonCheckedRoundedIcon className="blink red-record" />
            <Wall />
          </>
        );
      case "END":
        return (
          <>
            <div className="end-score">
              <Score
                creditScore={creditScore}
                prevCreditScore={prevCreditScore}
              />
            </div>
            <div className="multi-button-container">
              <OptionButton
                onClick={() => {
                  history.push("/about");
                }}
                className="about-button"
              >
                ABOUT
              </OptionButton>

              <OptionButton
                onClick={() => {
                  setGameState("START");
                }}
                className="start-button"
              >
                RESTART
              </OptionButton>
            </div>
          </>
        );
      default:
        return <div />;
    }
  };

  return (
    <CRT state={gameState}>
      {sirenEnabled && gameState === "GAME" ? (
        <div className="siren level-1" />
      ) : (
        ""
      )}
      <div className="level-2">{renderGame()}</div>
      {gameState === "GAME" ? (
        ""
      ) : (
        <div className="level-2 settings">
          <IconButton onClick={onMute} color="primary">
            {!soundEnabled ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
          </IconButton>
          <IconButton onClick={onToggleTimer} color="primary">
            {renderTimer()}
          </IconButton>
          <IconButton onClick={onToggleCreditScore} color="primary">
            {renderCreditScoreSetting()}
          </IconButton>
          <IconButton onClick={onToggleDisparity} color="primary">
            {!disparityEnabled ? (
              <InsertChartOutlinedOutlinedIcon />
            ) : (
              <InsertChartRoundedIcon />
            )}
          </IconButton>
          <IconButton onClick={onToggleSiren} color="primary">
            {!sirenEnabled ? (
              <RadioButtonUncheckedRoundedIcon />
            ) : (
              <FlareRoundedIcon />
            )}
          </IconButton>
        </div>
      )}
      <WelcomeModal />
    </CRT>
  );
};
