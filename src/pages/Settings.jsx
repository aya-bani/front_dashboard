import React from 'react';
import { Settings as SettingsIcon, Bell, Shield, Database, Users } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
            <Bell className="w-6 h-6 text-purple-600" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800">Notifications</h4>
              <p className="text-gray-600">Manage your notification preferences</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Configure
            </button>
          </div>
          
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
            <Shield className="w-6 h-6 text-purple-600" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800">Security</h4>
              <p className="text-gray-600">Manage security settings and permissions</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Configure
            </button>
          </div>
          
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
            <Database className="w-6 h-6 text-purple-600" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800">Data Management</h4>
              <p className="text-gray-600">Configure data retention and backup settings</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Configure
            </button>
          </div>
          
          <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
            <Users className="w-6 h-6 text-purple-600" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800">User Management</h4>
              <p className="text-gray-600">Manage users and access permissions</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Configure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

