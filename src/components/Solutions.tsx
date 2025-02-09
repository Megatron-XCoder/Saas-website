import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Flexibility in Pricing",
      description: "Choose from various pricing options that suit your business needs"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "How it Works",
      description: "Learn about our streamlined implementation process"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Take Action Today",
      description: "Start transforming your business operations now"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          Innovative Software Solutions for Your Business
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;