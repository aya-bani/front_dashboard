import React from 'react';
import { AlertCircle, ChevronDown } from 'lucide-react';

const AlertsCard = () => {
  const alerts = [
    {
      id: 1,
      time: 'Just now',
      device: 'TV MODEL',
      location: 'America',
      room: '5 pax room',
      type: 'Display',
      status: 'offline'
    },
    {
      id: 2,
      time: '6 hours ago',
      device: 'ABCD',
      location: 'Melbourne',
      room: '10 pax room',
      type: 'Display',
      status: 'offline'
    },
    {
      id: 3,
      time: '10 hours ago',
      device: 'TV MODEL',
      location: 'America',
      room: '5 pax room',
      type: 'Display',
      status: 'offline'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-800">Alerts</h3>
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
            8
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
                <span className="text-sm font-medium text-gray-800">
                  Device Offline {alert.time}
                </span>
              </div>
            </div>
            
            <div className="ml-4">
              <p className="text-sm text-gray-600 mb-2">
                {alert.device} offline in {alert.location}
              </p>
              
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                  {alert.room}
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                  {alert.type}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        <button className="w-full text-center text-sm text-purple-600 hover:text-purple-700 font-medium">
          Show more
        </button>
      </div>
    </div>
  );
};

export default AlertsCard;


