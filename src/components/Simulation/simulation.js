import useSound from 'use-sound';
import { useStickyState } from '../../common/hooks/useStickyState';
import { IconButton } from '@material-ui/core';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';

import { WelcomeModal } from './welcomeModal';

import bgmSfx from '../../common/audio/Tracker.mp3';
import countdownSfx from '../../common/audio/countdown.wav';

export const Simulation = () => {

  // Sound Control
  const [soundEnabled, setSoundEnabled] = useStickyState(true, "soundEnabled")
  const [ playBgm, { sound: bgm } ] = useSound(bgmSfx, {
    autoplay: true,
    loop: true,
    onplayerror: function() {
      bgm.once('unlock', function() {
        bgm.play();
      });
    },
    interrupt: true,
    mute: !soundEnabled,
    volume: 0.25,
  });
  const [ playCountdown, { sound: countdownBeep } ] = useSound(countdownSfx, {
    interrupt: true,
    volume: 0.5,
  });

  const onMute = () => {
    setSoundEnabled(!soundEnabled)
    bgm.mute(soundEnabled)
    countdownBeep.mute(soundEnabled)
  };

  return (
    <header className="App-header">
      <WelcomeModal/>
      Simulation
      <IconButton onClick={onMute}>
        {!soundEnabled ? <VolumeOffRoundedIcon /> :<VolumeUpRoundedIcon />}
      </IconButton>

    </header>
  );
  };