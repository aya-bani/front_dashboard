# AV Monitoring Dashboard

A comprehensive React dashboard for monitoring audio-visual devices and meeting rooms across different locations. Built with React, Vite, and Tailwind CSS.

## Features

- **System Summary**: Overview of device status, room availability, and alerts
- **Room Overview**: Interactive floorplan and meeting room management
- **Device Health**: Real-time device monitoring and alert management
- **Usage Insights**: Scheduling behavior and utilization analytics
- **Support Center**: Help and support resources
- **Settings**: Configuration and user management

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd av-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Cards/
│   │   ├── ProgressCard.jsx
│   │   └── AlertsCard.jsx
│   ├── Charts/
│   │   ├── UptimeChart.jsx
│   │   └── SchedulingChart.jsx
│   ├── Floorplan/
│   │   └── OfficeFloorplan.jsx
│   ├── Layout/
│   │   ├── Layout.jsx
│   │   ├── Sidebar.jsx
│   │   └── Header.jsx
│   └── MeetingRooms/
│       └── MeetingRoomsList.jsx
├── pages/
│   ├── SystemSummary.jsx
│   ├── RoomOverview.jsx
│   ├── DeviceHealth.jsx
│   ├── UsageInsights.jsx
│   ├── Support.jsx
│   └── Settings.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Components

### Cards
- **ProgressCard**: Circular progress indicators for metrics
- **AlertsCard**: Alert management and notifications

### Charts
- **UptimeChart**: Monthly device uptime visualization
- **SchedulingChart**: Calendar and hot-desking behavior analysis

### Layout
- **Layout**: Main application wrapper
- **Sidebar**: Navigation menu
- **Header**: Top navigation bar

### Floorplan
- **OfficeFloorplan**: Interactive office layout visualization

### Meeting Rooms
- **MeetingRoomsList**: Country-based meeting room management

## Customization

### Colors
The dashboard uses a purple color scheme. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Styling
Custom CSS classes are defined in `src/index.css` using Tailwind's `@layer` directive.

## Features Overview

### System Summary
- Device online status with circular progress indicators
- Meeting room availability tracking
- Real-time alerts and notifications
- Interactive office floorplan
- Monthly uptime analytics

### Device Health
- Device status overview (online/offline/maintenance)
- Alert management system
- Historical uptime data

### Usage Insights
- Scheduling behavior analysis
- Calendar vs hot-desking comparison
- Utilization trends and patterns

### Interactive Elements
- Hover effects on cards and buttons
- Responsive design for all screen sizes
- Smooth transitions and animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.