import { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimeRunning] = useState(false);

  const timerRef = useRef(null);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const getHours = `0${hours % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getSeconds = `0${time % 60}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const startTimer = () => {
    if (!isTimerRunning) {
      setIsTimeRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isTimerRunning) {
      clearInterval(timerRef.current);
      setIsTimeRunning(false);
    }
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(timerRef.current);
    setIsTimeRunning(false);
  };

  return (
    <>
      <h2>Stop Watch</h2>
      <h3>{formatTime(time)}</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default StopWatch;
