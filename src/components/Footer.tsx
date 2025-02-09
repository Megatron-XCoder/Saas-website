import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-blue-600 font-bold mb-4">Product IT</h4>
          <p className="text-sm text-gray-600">
            Unlock Transform Your Business Operations with Product IT
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Menu</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>Product Overview</li>
            <li>Pricing Plans</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Our Services</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Custom Software Solutions</li>
            <li>Application Development</li>
            <li>Specialized Maintenance and Support</li>
            <li>Cloud Infrastructure Management</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Reach Out</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📞 (555) 555-5555</li>
            <li>✉️ support@productit.com</li>
            <li>💬 Enable Console</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;