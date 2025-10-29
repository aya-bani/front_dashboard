import React from 'react';
import ProgressCard from '../components/Cards/ProgressCard';
import AlertsCard from '../components/Cards/AlertsCard';
import OfficeFloorplan from '../components/Floorplan/OfficeFloorplan';
import MeetingRoomsList from '../components/MeetingRooms/MeetingRoomsList';
import UptimeChart from '../components/Charts/UptimeChart';

const SystemSummary = () => {
  return (
    <div className="space-y-6">
      {/* Top Row Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProgressCard
          title="Devices Online"
          subtitle="80% of devices are online."
          value="240"
          total="300"
          percentage={80}
          trend="↑ 2% vs last month"
          color="purple"
        />
        <ProgressCard
          title="Meeting Room Availability"
          subtitle="70% of rooms available."
          value="20"
          total="30"
          percentage={70}
          trend="↑ 2% vs last month"
          color="green"
        />
        <AlertsCard />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OfficeFloorplan />
        <MeetingRoomsList />
      </div>

      {/* Bottom Section */}
      <UptimeChart />
    </div>
  );
};

export default SystemSummary;

