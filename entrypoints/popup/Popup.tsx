import { useState, useEffect } from 'react';

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];
const STORAGE_KEY = 'yt-speed';

export function Popup() {
  const [speed, setSpeed] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || '1';
  });

  useEffect(() => {
    const applySpeed = async () => {
      const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
      if (tab?.id) {
        browser.tabs.sendMessage(tab.id, { type: 'SET_SPEED', speed: parseFloat(speed) });
      }
    };
    applySpeed();
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSpeed(value);
    localStorage.setItem(STORAGE_KEY, value);
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      browser.tabs.sendMessage(tab.id, { type: 'SET_SPEED', speed: parseFloat(value) });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-base font-semibold mb-1">3x Speed Boost</h1>
      <p className="text-xs text-muted-foreground mb-4">
        More speed options for YouTube.
      </p>
      <select
        value={speed}
        onChange={handleChange}
        className="w-full h-9 px-3 pr-8 rounded-md border border-border bg-secondary text-foreground cursor-pointer outline-none focus:ring-1 focus:ring-ring appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23888%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_8px_center] bg-no-repeat"
      >
        {SPEEDS.map((s) => (
          <option key={s} value={s.toString()}>
            {s === 1 ? '1x (Normal)' : `${s}x`}
          </option>
        ))}
      </select>
    </div>
  );
}
