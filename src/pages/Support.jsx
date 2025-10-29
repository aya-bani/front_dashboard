import React from 'react';
import { Phone, Mail, MessageCircle, HelpCircle } from 'lucide-react';

const Support = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Support Center</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <Phone className="w-8 h-8 text-purple-600 mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Phone Support</h4>
            <p className="text-gray-600 mb-4">Call our support team for immediate assistance</p>
            <p className="text-sm font-medium text-purple-600">+1 (555) 123-4567</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <Mail className="w-8 h-8 text-purple-600 mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Email Support</h4>
            <p className="text-gray-600 mb-4">Send us an email and we'll get back to you</p>
            <p className="text-sm font-medium text-purple-600">support@aitssg.com</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <MessageCircle className="w-8 h-8 text-purple-600 mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Live Chat</h4>
            <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
            <button className="text-sm font-medium text-purple-600 hover:text-purple-700">
              Start Chat
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">How do I reset a device?</h4>
            <p className="text-gray-600">To reset a device, navigate to the Device Health section, select the device, and click the reset button.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">How often is the data updated?</h4>
            <p className="text-gray-600">Device status and usage data is updated every 5 minutes in real-time.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">Can I schedule maintenance windows?</h4>
            <p className="text-gray-600">Yes, you can schedule maintenance windows through the Settings section.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;


