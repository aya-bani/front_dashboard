import React from 'react';

const MeetingRoomsList = () => {
  const countries = [
    { name: 'America', flag: '🇺🇸', code: 'USA' },
    { name: 'India', flag: '🇮🇳', code: 'IND' },
    { name: 'United Kingdom', flag: '🇬🇧', code: 'UK' },
    { name: 'Australia', flag: '🇦🇺', code: 'AUS' },
    { name: 'Canada', flag: '🇨🇦', code: 'CAN' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Meeting Rooms</h3>
      
      <div className="space-y-3">
        {countries.map((country, index) => (
          <div
            key={country.code}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="text-2xl">{country.flag}</div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{country.name}</p>
            </div>
            <div className="text-sm text-gray-500">
              {country.code}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingRoomsList;

