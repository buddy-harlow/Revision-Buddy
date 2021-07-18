import React, { useState, useRef, useEffect } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { FaPlay, FaPause } from 'react-icons/fa';

import styles from './AudioPlayer.Module.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;

    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  };
  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  };
  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  };

  return (
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src="https://www.dropbox.com/s/ecer7ybgcz2101f/Pre-adam.wav?raw=1" preload="auto"></audio>
            <button className={styles.audioPlayerBtn} onClick={backThirty}><BsArrowLeftShort /> 30</button>
            <button onClick={togglePlayPause} className={styles.audioPlayerBtn}>
            { isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className={styles.audioPlayerBtn} onClick={forwardThirty}>30 <BsArrowRightShort /></button>

            {/** Current Time */}
            <div>{calculateTime(currentTime)}</div>

            {/** Progress Bar */}
            <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange}/>
            {/** Duration */}
            <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </div>
  );
};

export default AudioPlayer;
