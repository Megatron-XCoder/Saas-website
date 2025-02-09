import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        'Standard support',
        '5GB storage',
        'API access'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      description: 'Best for growing companies',
      features: [
        'Up to 20 team members',
        'Advanced analytics',
        'Priority support',
        '20GB storage',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Enterprise analytics',
        '24/7 dedicated support',
        'Unlimited storage',
        'API access',
        'Custom integrations',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 md:px-16 py-20"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include a 14-day free trial.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative rounded-2xl p-8 ${
              plan.popular
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-800 border dark:border-gray-700'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <div className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}>
                {plan.description}
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-sm">/month</span>}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                  className="flex items-center space-x-3"
                >
                  <Check className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-blue-500'}`} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-md transition-colors ${
                plan.popular
                  ? 'bg-white text-blue-500 hover:bg-blue-50'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Contact our sales team for a personalized quote tailored to your specific needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600"
        >
          Contact Sales
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Pricing;