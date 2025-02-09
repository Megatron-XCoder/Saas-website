import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 md:px-16 py-20"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">support@productit.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">(555) 555-5555</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Business Ave, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={4}
                className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;