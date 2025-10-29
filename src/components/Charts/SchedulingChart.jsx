import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { BarChart3, List, Info } from 'lucide-react';

const SchedulingChart = () => {
  const [viewMode, setViewMode] = useState('overview');

  const schedulingData = [
    { time: '12:00', calendar: 8500, hotDesking: 3200 },
    { time: '14:00', calendar: 7200, hotDesking: 4800 },
    { time: '16:00', calendar: 6800, hotDesking: 4100 },
    { time: '18:00', calendar: 9200, hotDesking: 2800 },
    { time: '20:00', calendar: 8800, hotDesking: 1900 },
    { time: '22:00', calendar: 6400, hotDesking: 1200 },
    { time: 'Mon 02:00', calendar: 2100, hotDesking: 800 },
    { time: '04:00', calendar: 1800, hotDesking: 600 },
    { time: '06:00', calendar: 3200, hotDesking: 1500 },
    { time: '08:00', calendar: 6800, hotDesking: 4200 },
    { time: '10:00', calendar: 7800, hotDesking: 3800 },
    { time: '12:00', calendar: 12500, hotDesking: 4500 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Scheduling behavior</h3>
        
        <div className="space-y-4 text-gray-600">
          <p>
            The graph shows the scheduling that the devices report back for the period you have chosen for the Utilization insights. 
            It only shows data from devices that have been scheduled during that time period, either through calendar bookings or hot-desking.
          </p>
          <p>
            You can toggle between the overview of bookings and hot-desking, and the most and least popular workspaces to book.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h4 className="text-lg font-semibold text-gray-800">Scheduling behavior</h4>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('overview')}
              className={`p-2 rounded-lg ${
                viewMode === 'overview' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <span className="text-sm text-gray-500">Last 24 hours</span>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={schedulingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              domain={[0, 13000]}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value) => [value.toLocaleString(), '']}
            />
            <Area
              type="monotone"
              dataKey="hotDesking"
              stackId="1"
              stroke="#34d399" // emerald-400
              fill="#34d399"
              fillOpacity={0.3}
            />
            <Line
              type="monotone"
              dataKey="calendar"
              stroke="#059669" // emerald-600
              strokeWidth={3}
              dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>

        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-0.5 bg-emerald-700"></div>
            <span className="text-sm text-gray-600">Calendar</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-0.5 bg-emerald-400"></div>
            <span className="text-sm text-gray-600">Hot desking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingChart;


