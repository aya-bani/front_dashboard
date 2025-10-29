import React from 'react';
import OfficeFloorplan from '../components/Floorplan/OfficeFloorplan';
import MeetingRoomsList from '../components/MeetingRooms/MeetingRoomsList';

const RoomOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OfficeFloorplan />
        <MeetingRoomsList />
      </div>
    </div>
  );
};

export default RoomOverview;

