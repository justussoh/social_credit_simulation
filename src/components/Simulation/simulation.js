import { useState, useEffect } from "react";
import useSound from "use-sound";
import { useStickyState } from "../../common/hooks/useStickyState";
import { IconButton } from "@material-ui/core";
import VolumeOffRoundedIcon from "@material-ui/icons/VolumeOffRounded";
import VolumeUpRoundedIcon from "@material-ui/icons/VolumeUpRounded";
import TimerOffRoundedIcon from "@material-ui/icons/TimerOffRounded";
import TimerRoundedIcon from "@material-ui/icons/TimerRounded";
import RadioButtonCheckedRoundedIcon from "@material-ui/icons/RadioButtonCheckedRounded";

import { WelcomeModal } from "./welcomeModal";

import "./simulation.css";

import bgmSfx from "../../common/audio/Tracker.mp3";
import countdownSfx from "../../common/audio/beep.wav";

const TIMER_LIMIT = 5;
const numQuestions = 10;

export const Simulation = () => {
  // Global Control
  const [soundEnabled, setSoundEnabled] = useStickyState(true, "soundEnabled");
  const [timerEnabled, setTimerEnabled] = useStickyState(true, "timerEnabled");

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
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    if (timerEnabled) {
      setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
          playCountdown();
        }
      }, 1000);
    }
  });

  const onToggleTimer = () => {
    setTimerEnabled(!timerEnabled);
  };

  return (
    <header className="App-header">
      <WelcomeModal />
      Simulation
      <div>
        <code>{timer}</code>
        <button
          onClick={() => {
            setTimer(TIMER_LIMIT);
          }}
        >
          Boop
        </button>
      </div>
      <RadioButtonCheckedRoundedIcon className="blink red" />
      <div>
        <IconButton onClick={onMute}>
          {!soundEnabled ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
        </IconButton>
        <IconButton onClick={onToggleTimer}>
          {!timerEnabled ? <TimerOffRoundedIcon /> : <TimerRoundedIcon />}
        </IconButton>
      </div>
    </header>
  );
};
