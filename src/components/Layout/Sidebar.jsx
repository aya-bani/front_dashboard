import React from 'react';
import { 
  BarChart3, 
  Home, 
  Monitor, 
  Activity, 
  HelpCircle, 
  Settings, 
  User,
  Bell,
  MonitorCheck
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'summary', label: 'System Summary', icon: Home },
    { id: 'rooms', label: 'Room Overview', icon: BarChart3 },
    { id: 'devices', label: 'Device Health', icon: MonitorCheck },
    { id: 'insights', label: 'Usage Insights', icon: Activity },
  ];

  const supportItems = [
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">AITS</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-md text-left transition-all ${
                activeTab === item.id
                  ? 'relative bg-gray-100 text-gray-900 border border-gray-200 shadow-sm before:content-["\"] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-1.5 before:rounded-full before:bg-emerald-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Support Section */}
      <div className="px-4 py-4 border-t border-gray-200 space-y-2">
        {supportItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-md text-left transition-all ${
                activeTab === item.id
                  ? 'relative bg-gray-100 text-gray-900 border border-gray-200 shadow-sm before:content-["\"] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-5 before:w-1.5 before:rounded-full before:bg-emerald-500'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">admin@aitssg.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


