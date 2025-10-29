import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Search } from 'lucide-react';

const UptimeChart = () => {
  const monthlyData = [
    { month: 'Jan', device1: 85, device2: 15 },
    { month: 'Feb', device1: 92, device2: 8 },
    { month: 'Mar', device1: 78, device2: 22 },
    { month: 'Apr', device1: 88, device2: 12 },
    { month: 'May', device1: 75, device2: 25 },
    { month: 'Jun', device1: 90, device2: 10 },
    { month: 'Jul', device1: 87, device2: 13 },
    { month: 'Aug', device1: 94, device2: 6 },
    { month: 'Sep', device1: 89, device2: 11 },
    { month: 'Oct', device1: 91, device2: 9 },
    { month: 'Nov', device1: 86, device2: 14 },
    { month: 'Dec', device1: 88, device2: 12 },
  ];

  const pieData = [
    { name: 'Device Type 1', value: 35, color: '#8B5CF6' },
    { name: 'Device Type 2', value: 25, color: '#A855F7' },
    { name: 'Device Type 3', value: 20, color: '#C084FC' },
    { name: 'Device Type 4', value: 15, color: '#D8B4FE' },
    { name: 'Device Type 5', value: 5, color: '#E9D5FF' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Monthly Device Uptime by Type</h3>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Search className="w-4 h-4" />
          <span>Search Report</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="device1" stackId="a" fill="#8B5CF6" radius={[0, 0, 4, 4]} />
              <Bar dataKey="device2" stackId="a" fill="#A855F7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Pie Chart */}
        <div className="flex flex-col items-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Legend */}
          <div className="mt-4 space-y-2">
            {pieData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">Device</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UptimeChart;

