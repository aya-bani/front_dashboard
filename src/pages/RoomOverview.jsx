import React from 'react';
// import OfficeFloorplan from '../components/Floorplan/OfficeFloorplan';
import MeetingRoomsList from '../components/MeetingRooms/MeetingRoomsList';
import MeetingRoomUsage from '../components/Tables/MeetingRoomUsage';
import RoomOccupancy from '../components/Cards/RoomOccupancy';
import MeetingRoomUsageChart from '../components/Charts/MeetingRoomUsageChart';

const RoomOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RoomOccupancy />
        <div className="lg:col-span-2">
          <MeetingRoomUsageChart />
        </div>
      </div>
      <MeetingRoomUsage />
    </div>
  );
};

export default RoomOverview;


