import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [selectedInterval, setSelectedInterval] =
    useState < number > 2 * 60 * 60; // Initial interval in seconds (2 hours)
  const [currentTime, setCurrentTime] = useState < Date > new Date();
  const [targetTime, setTargetTime] = (useState < Date) | (null > null);
  const [isActive, setIsActive] = useState(false);

  const handleIntervalChange = () => {
    setSelectedInterval(parseInt(event.target.value) * 60); // Convert hours to seconds
  };

  const onStartClick = () => {
    const newTargetTime = new Date(
      currentTime.getTime() + selectedInterval * 1000,
    );
    setTargetTime(newTargetTime);
    setIsActive(true);
  };

  const onStopClick = () => {
    setTargetTime(null);
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isActive]);

  const getRemainingTime = () => {
    if (!targetTime) return null;
    const difference = targetTime.getTime() - currentTime.getTime();
    if (difference <= 0) {
      return "00:00:00";
    }
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container mx-auto max-w-sm p-4">
      <h2 className="mb-4 text-center text-2xl font-bold">Countdown Timer</h2>
      <div className="mb-4 flex items-center">
        <label htmlFor="interval" className="mr-4 text-gray-700">
          Interval:
        </label>
        <select
          id="interval"
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedInterval / 60} // Convert seconds to hours for display
          onChange={handleIntervalChange}
        >
          <option value="1">1 Hour</option>
          <option value="2">2 Hours (Default)</option>
          <option value="3">3 Hours</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex justify-center">
        {isActive ? (
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            onClick={onStopClick}
          >
            Stop Countdown
          </button>
        ) : (
          <button
            className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            onClick={onStartClick}
            disabled={!targetTime} // Disable start button if no interval is selected
          >
            Start Countdown
          </button>
        )}
      </div>
      {targetTime && (
        <div className="mt-4 text-center text-xl font-bold">
          {getRemainingTime()} remaining
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;
