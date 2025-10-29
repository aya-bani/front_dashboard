import React from 'react';
import AlertsCard from '../components/Cards/AlertsCard';
import UptimeChart from '../components/Charts/UptimeChart';

const DeviceHealth = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsCard />
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Device Status Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-800">Online Devices</span>
              </div>
              <span className="text-2xl font-bold text-green-600">240</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-medium text-gray-800">Offline Devices</span>
              </div>
              <span className="text-2xl font-bold text-red-600">60</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-medium text-gray-800">Maintenance Required</span>
              </div>
              <span className="text-2xl font-bold text-yellow-600">12</span>
            </div>
          </div>
        </div>
      </div>
      <UptimeChart />
    </div>
  );
};

export default DeviceHealth;


