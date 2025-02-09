import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-500 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Empowering you to achieve more with less effort
          </h2>
          <p className="mt-4 text-blue-100">
            Discover how our solutions can transform your business operations
          </p>
          <button className="mt-8 bg-white text-blue-500 px-8 py-3 rounded-md hover:bg-blue-50">
            Learn More Today
          </button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Business Professional"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;