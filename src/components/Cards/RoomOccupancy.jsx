import React from 'react';

const RoomOccupancy = ({ value = 240, limitText = "You've almost reached your limit" }) => {
  const percentage = 80; // visual only

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">Room Occupancy</h3>
        <p className="text-xs text-gray-500">Real-time people count</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative w-28 h-28">
          <svg className="w-28 h-28" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="#E5E7EB" strokeWidth="10" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#10b981"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.64} 264`}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{value}</div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {limitText}
        </div>
      </div>
    </div>
  );
};

export default RoomOccupancy;


