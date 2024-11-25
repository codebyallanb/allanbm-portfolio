import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 pb-12 px-8 sm:px-12 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <span className="text-coral-500 font-medium mb-4 block">IT ENGINEER</span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hello, I'm
            <br />
            Allan Madanhi
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Information Production | ITIL & Agile Certified | Cybersecurity | Cloud Engineer | Digital Technologies Advocate | International Project Expertise. Technology expert with over eight years of hands-on experience in technical support.
          </p>
          
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/allanbm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://medium.com/@abmadanhi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral-500 transition-colors">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="lucide lucide-medium">
                <path d="M4.4 7.3h15.2v1.6H4.4z"></path>
                <path d="M4.4 11.8h15.2v1.6H4.4z"></path>
                <path d="M4.4 16.3h15.2v1.6H4.4z"></path>
              </svg>
            </a>
            <a href="https://github.com/codebyallanb" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:allanbm@protonmail.com" className="text-gray-600 hover:text-coral-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative w-full aspect-square max-w-2xl mx-auto">
            <div className="absolute right-0 top-0 w-[90%] h-[90%] rounded-lg bg-coral-500/20 animate-blob"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute left-0 top-[20%] bg-white rounded-lg shadow-lg p-4 flex items-center gap-3"
            >
              <div className="bg-coral-50 rounded-lg p-2">
                <div className="w-3 h-3 bg-coral-500 rounded-lg"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute right-0 top-[40%] bg-white rounded-lg shadow-lg p-4 flex items-center gap-3"
            >
              <div className="bg-coral-50 rounded-lg p-2">
                <div className="w-3 h-3 bg-coral-500 rounded-lg"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute left-[20%] bottom-[10%] bg-white rounded-lg shadow-lg p-4 flex items-center gap-3"
            >
              <div className="bg-coral-50 rounded-lg p-2">
                <div className="w-3 h-3 bg-coral-500 rounded-lg"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Continents Served</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}