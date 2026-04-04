import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  // ^ onTimeout is supposed to be a function received as a prop, to be called on setTimeout

  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);
  // useEffect here needs them as dependencies because they are props, and they can change between renders. If they change, we want to set up a new timeout with the new values.

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  // useEffect does not have any dependencies, so it will only run once, when the component is first rendered. It sets up an interval that runs every 100 milliseconds, and on each interval it updates the remainingTime state by subtracting 100 milliseconds from the previous remaining time. It's the same value which keeps decreasing.

  return (
    <progress
      id='question-time'
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
}
