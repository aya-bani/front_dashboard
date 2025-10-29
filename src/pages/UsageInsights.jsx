import React from 'react';
import SchedulingChart from '../components/Charts/SchedulingChart';
import UptimeChart from '../components/Charts/UptimeChart';

const UsageInsights = () => {
  return (
    <div className="space-y-6">
      <SchedulingChart />
      <UptimeChart />
    </div>
  );
};

export default UsageInsights;

