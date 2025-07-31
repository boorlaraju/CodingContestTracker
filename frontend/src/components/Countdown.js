import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function Countdown({ start }) {
  const [timer, setTimer] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = dayjs(start).diff(dayjs(), 'second');
      if (diff <= 0) {
        setTimer('Started');
        return;
      }
      const days = String(Math.floor(diff / 86400)).padStart(2, '0');
      const hours = String(Math.floor((diff % 86400) / 3600)).padStart(2, '0');
      const mins = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
      const secs = String(diff % 60).padStart(2, '0');
      setTimer(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);

  return <strong>{timer}</strong>;
}

export default Countdown;
