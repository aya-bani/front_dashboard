import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import SystemSummary from './pages/SystemSummary';
import RoomOverview from './pages/RoomOverview';
import DeviceHealth from './pages/DeviceHealth';
import UsageInsights from './pages/UsageInsights';
import Support from './pages/Support';
import Settings from './pages/Settings';
import './App.css'
import './index.css'

function App() {
  const [activeTab, setActiveTab] = useState('summary');

  const getPageTitle = (tab) => {
    const titles = {
      summary: 'AV Monitoring - System Summary',
      rooms: 'AV Monitoring - Room Overview',
      devices: 'AV Monitoring - Device Health',
      insights: 'AV Monitoring - Usage Insights',
      support: 'AV Monitoring - Support',
      settings: 'AV Monitoring - Settings',
    };
    return titles[tab] || 'AV Monitoring Dashboard';
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'summary':
        return <SystemSummary />;
      case 'rooms':
        return <RoomOverview />;
      case 'devices':
        return <DeviceHealth />;
      case 'insights':
        return <UsageInsights />;
      case 'support':
        return <Support />;
      case 'settings':
        return <Settings />;
      default:
        return <SystemSummary />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab}
      title={getPageTitle(activeTab)}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;