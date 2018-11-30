import { useState, useEffect } from "react";

export default function useTimer() {
  const [time, setTime] = useState(0);

  function startTimer(seconds) {
    setTime(seconds);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(Math.max(time - 1, 0));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return { time, startTimer };
}
