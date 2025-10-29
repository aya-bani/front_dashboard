import React from 'react';
import ProgressCard from '../components/Cards/ProgressCard';
import AlertsCard from '../components/Cards/AlertsCard';
import UptimeChart from '../components/Charts/UptimeChart';
import SchedulingChart from '../components/Charts/SchedulingChart';

const SystemSummary = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgressCard title="Rooms Healthy" subtitle="of total" value={160} total={170} percentage={94} trend="+2%" color="green" />
        <ProgressCard title="Devices Online" subtitle="of total" value={240} total={300} percentage={80} trend="+1.2%" color="green" />
        <ProgressCard title="Active Alarms" subtitle="current" value={10} total={170} percentage={6} color="red" />
        <ProgressCard title="Tasks Due" subtitle="this week" value={1} total={12} percentage={8} color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsCard />
        <SchedulingChart />
      </div>

      <UptimeChart />
    </div>
  );
};

export default SystemSummary;


