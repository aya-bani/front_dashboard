import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const rows = [
  { name: 'Olivia Rhye', email: 'olivia@far-east.com', date: 'Feb 22, 2025', start: '14:00 - 16:00', end: '14:00 - 16:00', pax: 3 },
  { name: 'Phoenix Baker', email: 'phoenix@far-east.com', date: 'Feb 21, 2025', start: '14:00 - 16:00', end: '14:00 - 16:00', pax: 5 },
  { name: 'Lana Steiner', email: 'lana@far-east.com', date: 'Feb 21, 2025', start: '09:00 - 16:00', end: '09:00 - 16:00', pax: 6 },
  { name: 'Demi Wilkinson', email: 'demi@far-east.com', date: 'Feb 22, 2025', start: '10:00 - 12:00', end: '10:00 - 12:00', pax: 6 },
  { name: 'Candice Wu', email: 'candice@far-east.com', date: 'Feb 22, 2025', start: '11:00 - 13:00', end: '11:00 - 13:00', pax: 10 },
];

const MeetingRoomUsage = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-start justify-between px-5 py-4 border-b border-gray-200">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Meeting Room Usage</h3>
          <p className="text-xs text-gray-500">Recent bookings</p>
        </div>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b border-gray-200">
              <th className="font-medium px-5 py-3">Name</th>
              <th className="font-medium px-5 py-3">Date booked</th>
              <th className="font-medium px-5 py-3">Time</th>
              <th className="font-medium px-5 py-3">Time</th>
              <th className="font-medium px-5 py-3 text-right">Pax attended</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="border-b last:border-b-0 border-gray-200">
                <td className="px-5 py-4">
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium">{r.name}</span>
                    <span className="text-gray-500 text-xs">{r.email}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-gray-700">{r.date}</td>
                <td className="px-5 py-4 text-gray-700">{r.start}</td>
                <td className="px-5 py-4 text-gray-700">{r.end}</td>
                <td className="px-5 py-4 text-gray-900 text-right">{r.pax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingRoomUsage;


