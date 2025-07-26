import React from "react";

const Calendar = () => {
  return (
    <div className="bg-white rounded-xl w-full shadow p-4">
      <h2 className="text-lg font-semibold mb-3">April 2025</h2>
      {/* Simple static calendar */}
      <div className="grid grid-cols-7 text-sm text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={i} className="font-bold">
            {day}
          </div>
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="py-2 hover:bg-gray-300 rounded-full cursor-default"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
