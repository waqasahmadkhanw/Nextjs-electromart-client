"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const diff =
    new Date().getTime() + 24 * 60 * 60 * 1000 - new Date().getTime();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };

  return {
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownTimer = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => String(num).padStart(2, "0");

  const segments = [
    { value: pad(timeLeft.hours), label: "Hours" },
    { value: pad(timeLeft.minutes), label: "Minutes" },
    { value: pad(timeLeft.seconds), label: "Seconds" },
  ];

  if (!mounted) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="mr-1 text-base" role="img" aria-label="clock">
          ⏰
        </span>
        <div className="flex items-center gap-1.5">
          <div className="rounded-lg bg-gray-900 px-2 py-1.5">
            <span className="min-w-6 sm:min-w-7 inline-block text-center font-mono text-xs sm:text-sm font-bold text-white">
              00
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500">Hours</span>
          <span className="text-lg font-bold text-gray-400">:</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="rounded-lg bg-gray-900 px-2 py-1.5">
            <span className="min-w-6 sm:min-w-7 inline-block text-center font-mono text-xs sm:text-sm font-bold text-white">
              00
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500">Minutes</span>
          <span className="text-lg font-bold text-gray-400">:</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="rounded-lg bg-gray-900 px-2 py-1.5">
            <span className="min-w-6 sm:min-w-7 inline-block text-center font-mono text-xs sm:text-sm font-bold text-white">
              00
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500">Seconds</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <span className="mr-1 text-base" role="img" aria-label="clock">
        ⏰
      </span>
      {segments.map((seg, idx) => (
        <div key={seg.label} className="flex items-center gap-1.5">
          <div className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-2 py-1.5">
            <span className="min-w-6 sm:min-w-7 inline-block text-center font-mono text-xs sm:text-sm font-bold text-white">
              {seg.value}
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500">{seg.label}</span>
          {idx < segments.length - 1 && (
            <span className="text-lg font-bold text-gray-400">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

