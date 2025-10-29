import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, SlidersHorizontal } from 'lucide-react';

const months = [
  { month: 'Jan', room1: 18, room2: 10, room3: 8 },
  { month: 'Feb', room1: 22, room2: 12, room3: 9 },
  { month: 'Mar', room1: 16, room2: 11, room3: 7 },
  { month: 'Apr', room1: 19, room2: 12, room3: 8 },
  { month: 'May', room1: 21, room2: 13, room3: 9 },
  { month: 'Jun', room1: 20, room2: 14, room3: 10 },
  { month: 'Jul', room1: 22, room2: 12, room3: 9 },
  { month: 'Aug', room1: 23, room2: 13, room3: 10 },
  { month: 'Sep', room1: 24, room2: 12, room3: 8 },
  { month: 'Oct', room1: 25, room2: 13, room3: 10 },
  { month: 'Nov', room1: 22, room2: 12, room3: 9 },
  { month: 'Dec', room1: 24, room2: 14, room3: 11 },
];

const FilterTab = ({ active, children }) => (
  <button
    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
      active ? 'bg-gray-900 text-white border-gray-900' : 'text-gray-700 border-gray-300 hover:bg-gray-50'
    }`}
  >
    {children}
  </button>
);

const MeetingRoomUsageChart = () => {
  const [range, setRange] = useState('12m');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Meeting Room Usage</h3>
          <p className="text-xs text-gray-500">Text</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 text-xs text-gray-700 hover:bg-gray-50">
            <Calendar className="w-4 h-4 text-gray-600" />
            Select dates
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 text-xs text-gray-700 hover:bg-gray-50">
            <SlidersHorizontal className="w-4 h-4 text-gray-600" />
            Filters
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <span onClick={() => setRange('12m')}><FilterTab active={range==='12m'}>12 months</FilterTab></span>
          <span onClick={() => setRange('30d')}><FilterTab active={range==='30d'}>30 days</FilterTab></span>
          <span onClick={() => setRange('7d')}><FilterTab active={range==='7d'}>7 days</FilterTab></span>
          <span onClick={() => setRange('24h')}><FilterTab active={range==='24h'}>24 hours</FilterTab></span>
        </div>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={months}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <Tooltip />
            <Bar dataKey="room3" stackId="a" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
            <Bar dataKey="room2" stackId="a" fill="#c7cdd3" />
            <Bar dataKey="room1" stackId="a" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span><span className="text-xs text-gray-600">Room 1</span></div>
          <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span><span className="text-xs text-gray-600">Room 2</span></div>
          <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span><span className="text-xs text-gray-600">Room 3</span></div>
        </div>
        <button className="px-3 py-1.5 text-xs rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">View full report</button>
      </div>
    </div>
  );
};

export default MeetingRoomUsageChart;


