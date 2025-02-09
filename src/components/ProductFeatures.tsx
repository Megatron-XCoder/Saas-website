import React from 'react';
import { Check } from 'lucide-react';

const ProductFeatures = () => {
  const features = [
    "Flexible Pricing Plans - Options to suit different business needs",
    "24/7 Expert Support - Our team is always here to help",
    "Seamless Integration - Get up and running quickly with minimal setup",
    "Regular Updates - Stay ahead with the latest features"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Elevate your business with Product IT's innovative software solutions.
          </h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600">
            Get Started Today
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Feature 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Feature 2"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;