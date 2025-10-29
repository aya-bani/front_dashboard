import React from 'react';
import { Phone } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Phone className="w-4 h-4" />
          <span>Contact for AV Service</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

