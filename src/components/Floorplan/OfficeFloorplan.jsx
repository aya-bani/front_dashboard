import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const OfficeFloorplan = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

  const rooms = [
    { id: 'fluorine', name: 'Fluorine', x: 10, y: 10, width: 80, height: 60, color: 'bg-green-200', type: 'workspace' },
    { id: 'neon', name: 'Neon', x: 100, y: 10, width: 80, height: 60, color: 'bg-green-200', type: 'workspace' },
    { id: 'sodium', name: 'Sodium', x: 190, y: 10, width: 80, height: 60, color: 'bg-green-200', type: 'workspace' },
    { id: 'magnesium', name: 'Magnesium', x: 10, y: 80, width: 80, height: 60, color: 'bg-red-200', type: 'meeting' },
    { id: 'argon', name: 'Argon', x: 100, y: 80, width: 80, height: 60, color: 'bg-red-200', type: 'meeting' },
    { id: 'chlorine', name: 'Chlorine', x: 190, y: 80, width: 80, height: 60, color: 'bg-red-200', type: 'meeting' },
    { id: 'lithium', name: 'Lithium', x: 10, y: 150, width: 80, height: 60, color: 'bg-yellow-200', type: 'hallway' },
    { id: 'hallway1', name: '', x: 100, y: 150, width: 80, height: 60, color: 'bg-yellow-100', type: 'hallway' },
    { id: 'hallway2', name: '', x: 190, y: 150, width: 80, height: 60, color: 'bg-yellow-100', type: 'hallway' },
  ];

  const melbourneArea = {
    x: 120,
    y: 40,
    devices: { online: 3, total: 10 }
  };

  const getRoomColor = (room) => {
    switch (room.type) {
      case 'workspace': return 'bg-green-200 hover:bg-green-300';
      case 'meeting': return 'bg-red-200 hover:bg-red-300';
      case 'hallway': return 'bg-yellow-200 hover:bg-yellow-300';
      default: return 'bg-gray-200 hover:bg-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Office Floorplan</h3>
      
      <div className="relative bg-gray-50 rounded-lg p-4 overflow-hidden">
        <div className="relative w-full h-64">
          {/* Floorplan SVG */}
          <svg viewBox="0 0 300 250" className="w-full h-full">
            {/* Rooms */}
            {rooms.map((room) => (
              <g key={room.id}>
                <rect
                  x={room.x}
                  y={room.y}
                  width={room.width}
                  height={room.height}
                  className={`${getRoomColor(room)} cursor-pointer transition-colors border border-gray-300`}
                  onMouseEnter={() => setHoveredArea(room)}
                  onMouseLeave={() => setHoveredArea(null)}
                />
                {room.name && (
                  <text
                    x={room.x + room.width / 2}
                    y={room.y + room.height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-xs font-medium text-gray-700 pointer-events-none"
                  >
                    {room.name}
                  </text>
                )}
              </g>
            ))}
            
            {/* Melbourne Area with popup */}
            <g>
              <circle
                cx={melbourneArea.x}
                cy={melbourneArea.y}
                r="8"
                className="fill-blue-500 cursor-pointer"
                onMouseEnter={() => setHoveredArea({ ...melbourneArea, name: 'Melbourne' })}
                onMouseLeave={() => setHoveredArea(null)}
              />
            </g>
          </svg>
          
          {/* Hover popup */}
          {hoveredArea && (
            <div 
              className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 pointer-events-none"
              style={{
                left: hoveredArea.x + 20,
                top: hoveredArea.y - 10,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="flex items-center space-x-2 mb-1">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-800">
                  {hoveredArea.name}, AUS
                </span>
              </div>
              {hoveredArea.devices && (
                <p className="text-xs text-gray-600">
                  Devices {hoveredArea.devices.online} of {hoveredArea.devices.total} online
                </p>
              )}
            </div>
          )}
        </div>
        
        {/* Legend */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-200 rounded"></div>
            <span className="text-sm text-gray-600">Open Workspaces</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-200 rounded"></div>
            <span className="text-sm text-gray-600">Meeting Rooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-200 rounded"></div>
            <span className="text-sm text-gray-600">Hallways</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeFloorplan;

