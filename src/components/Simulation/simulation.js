import { useState, useEffect, useCallback } from "react";
import useSound from "use-sound";
import { useStickyState } from "../../common/hooks/useStickyState";
import { IconButton } from "@material-ui/core";
import VolumeOffRoundedIcon from "@material-ui/icons/VolumeOffRounded";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import TimerOffRoundedIcon from "@material-ui/icons/TimerOffRounded";
import TimerRoundedIcon from "@material-ui/icons/TimerRounded";
import RadioButtonCheckedRoundedIcon from "@material-ui/icons/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded";
import FlareRoundedIcon from "@material-ui/icons/FlareRounded";

import { WelcomeModal } from "./welcomeModal";
import { Score } from "./score";

import { questions } from "./questions";

import "./simulation.css";

import bgmSfx from "../../common/audio/Tracker.mp3";
import countdownSfx from "../../common/audio/beep.wav";

const TIMER_LIMIT = 5;
const INIT_CREDIT_SCORE = 0;

export const Simulation = () => {
  // Global Control
  const [soundEnabled, setSoundEnabled] = useStickyState(true, "soundEnabled");
  const [timerEnabled, setTimerEnabled] = useStickyState(true, "timerEnabled");
  const [sirenEnabled, setSirenEnabled] = useStickyState(true, "sirenEnabled");

  // Sound Control
  const [playBgm, { sound: bgm }] = useSound(bgmSfx, {
    autoplay: true,
    loop: true,
    onplayerror: function () {
      bgm.once("unlock", function () {
        playBgm();
      });
    },
    interrupt: true,
    mute: !soundEnabled,
    volume: 0.25,
  });
  const [playCountdown, { sound: countdownBeep }] = useSound(countdownSfx, {
    volume: 0.5,
  });

  const onMute = () => {
    setSoundEnabled(!soundEnabled);
    bgm.mute(soundEnabled);
    countdownBeep.mute(soundEnabled);
  };

  // Timer Control
  const [timeLeft, setTimeLeft] = useState(0);

  const onToggleTimer = () => {
    setTimerEnabled(!timerEnabled);
  };

  // Siren Control
  const onToggleSiren = () => {
    setSirenEnabled(!sirenEnabled);
  };

  // Game State
  const [gameState, setGameState] = useState("START");
  const [gameIndex, setGameIndex] = useState(0);
  const [creditScore, setCreditScore] = useState(INIT_CREDIT_SCORE);
  const [prevCreditScore, setPrevCreditScore] = useState(INIT_CREDIT_SCORE);

  const nextQuestion = useCallback(
    (value) => {
      setPrevCreditScore(creditScore);
      setCreditScore(creditScore + value);
      if (gameIndex === questions.length - 1) {
        setGameState("END");
      } else {
        setGameIndex(gameIndex + 1);
        setTimeLeft(TIMER_LIMIT);
      }
    },
    [gameIndex, creditScore]
  );

  useEffect(() => {
    // Don't count if no timer
    if (!timerEnabled || gameState !== "GAME") return;

    if (timeLeft === -1) return nextQuestion(questions[gameIndex].skip);

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      playCountdown();
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [
    timeLeft,
    nextQuestion,
    timerEnabled,
    gameState,
    playCountdown,
    gameIndex,
  ]);

  const renderGame = () => {
    switch (gameState) {
      case "START":
        return (
          <>
            Simulation
            <button
              onClick={() => {
                setGameState("GAME");
                setTimeLeft(TIMER_LIMIT);
              }}
            >
              START
            </button>
          </>
        );
      case "GAME":
        return (
          <>
            {timerEnabled ? <code>{timeLeft}</code> : ""}
            <Score
              creditScore={creditScore}
              prevCreditScore={prevCreditScore}
            />
            <h1>{questions[gameIndex].question}</h1>
            <button
              onClick={() =>
                nextQuestion(questions[gameIndex].options[0].value)
              }
            >
              {questions[gameIndex].options[0].answer}
            </button>
            <button
              onClick={() =>
                nextQuestion(questions[gameIndex].options[1].value)
              }
            >
              {questions[gameIndex].options[1].answer}
            </button>
          </>
        );
      case "END":
        return (
          <>
            <Score
              creditScore={creditScore}
              prevCreditScore={prevCreditScore}
            />
            <button
              onClick={() => {
                setGameState("START");
                setGameIndex(0);
                setPrevCreditScore(INIT_CREDIT_SCORE);
                setCreditScore(INIT_CREDIT_SCORE);
              }}
            >
              restart
            </button>
          </>
        );
      default:
        return <div />;
    }
  };

  return (
    <header className="App-header">
      {sirenEnabled ? <div className="siren level-1" /> : ""}
      {gameState === "GAME" ? (
        <RadioButtonCheckedRoundedIcon className="blink red-record" />
      ) : (
        ""
      )}
      <div className="level-2">{renderGame()}</div>
      <div className="level-2 settings">
        <IconButton onClick={onMute} color="secondary">
          {!soundEnabled ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
        </IconButton>
        <IconButton onClick={onToggleTimer} color="secondary">
          {!timerEnabled ? <TimerOffRoundedIcon /> : <TimerRoundedIcon />}
        </IconButton>
        <IconButton onClick={onToggleSiren} color="secondary">
          {!sirenEnabled ? (
            <RadioButtonUncheckedRoundedIcon />
          ) : (
            <FlareRoundedIcon />
          )}
        </IconButton>
      </div>
      <WelcomeModal />
    </header>
  );
};
