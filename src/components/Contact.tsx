import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="pt-4 pb-8 px-8 sm:px-12 lg:px-16" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-coral-50 rounded-md flex items-center justify-center text-coral-500">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-coral-50 rounded-md flex items-center justify-center text-coral-500">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-coral-50 rounded-md flex items-center justify-center text-coral-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Warsaw, Poland</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-coral-500 text-white py-2 px-6 rounded-md hover:bg-coral-600 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}