import React from 'react';
import { Phone } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="sticky top-0 z-20 supports-[backdrop-filter]:bg-white/70 bg-white border-b border-gray-200 backdrop-blur px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 tracking-tight">{title}</h1>
        <button className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm transition-colors">
          <Phone className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium">Contact for AV Service</span>
        </button>
      </div>
    </header>
  );
};

export default Header;


