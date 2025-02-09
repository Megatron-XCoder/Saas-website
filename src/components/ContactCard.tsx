import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactCard = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="bg-blue-500 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Unlock Your Business Potential</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>Email Assistance</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>Expert Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5" />
              <span>Phone Assistance</span>
            </div>
          </div>
          <button className="mt-8 bg-white text-blue-500 px-8 py-3 rounded-md hover:bg-blue-50">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;