import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Our Clients Are Saying
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              alt="Jane Thompson"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Jane Thompson</h4>
              <p className="text-gray-600">CEO, Tech Solutions Inc</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Transform Your Business Operations with Product IT has been a game-changer for our company.
            The software has not only streamlined our processes but also significantly improved our team's
            productivity. Highly recommended!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;