import React, { useState, useEffect } from 'react';

function LightTimer() {
  const [lightOn, setLightOn] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning, countdown]);

  const toggleLight = () => {
    setLightOn(!lightOn);
  };

  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
    } else {
      setTimerRunning(false);
    }
  };

  return (
    <div>
      <button id="button" onClick={toggleLight}>{lightOn ? 'Light Off' : 'Light On'}</button>
      <button id="button" onClick={startTimer}>{timerRunning ? 'Stop Timer' : 'Start Timer (30s)'}</button>
      <p>Light: {lightOn ? 'On' : 'Off'} | Timer: {countdown}</p>
    </div>
  );
}

export default LightTimer;