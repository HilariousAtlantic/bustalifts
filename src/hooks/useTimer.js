import { useState, useEffect } from "react";

export default function useTimer() {
  const [date, setDate] = useState(Date.now());
  const [time, setTime] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function startTimer(seconds) {
    setTime(seconds);
    setRemaining(seconds);
    setDate(Date.now());
    setIsActive(true);
  }

  function stopTimer() {
    setIsActive(false);
  }

  function updateRemaining() {
    setRemaining(Math.max(time - (Date.now() - date) / 1000, 0));
  }

  useEffect(() => {
    const id = requestAnimationFrame(updateRemaining);
    document.addEventListener("visibilitychange", updateRemaining);
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("visibilitychange", updateRemaining);
    };
  });
  const progress = remaining / time;
  return { remaining, progress, isActive, startTimer, stopTimer };
}
