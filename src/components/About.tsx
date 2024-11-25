import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, GraduationCap, Calendar } from 'lucide-react';

type Tab = 'personal' | 'qualifications' | 'skills';

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('personal');

  const tabContent = {
    personal: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Unmatched Service Quality for Over 10 Years</h2>
        <p className="text-gray-600 mb-6">
          I specialize in crafting intuitive solutions with cutting-edge technology,
          delivering dynamic and engaging user experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral-50 rounded-lg flex items-center justify-center">
              <User className="text-coral-500" size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-500">Full Name</div>
              <div className="font-medium">Allan Madanhi</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral-50 rounded-lg flex items-center justify-center">
              <Phone className="text-coral-500" size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-500">Phone</div>
              <div className="font-medium">+012 345 6789</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral-50 rounded-lg flex items-center justify-center">
              <Mail className="text-coral-500" size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div className="font-medium">youremail@email.com</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral-50 rounded-lg flex items-center justify-center">
              <Calendar className="text-coral-500" size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-500">Born</div>
              <div className="font-medium">10 Mar, 1998</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral-50 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-coral-500" size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-500">Degree</div>
              <div className="font-medium">Master in Computer Science</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-coral-50 rounded-lg flex items-center justify-center">
              <MapPin className="text-coral-500" size={20} />
            </div>
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium">Warsaw, Poland</div>
            </div>
          </div>
        </div>
      </div>
    ),
    qualifications: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-coral-500 before:rounded-lg">
              <div className="text-sm text-coral-500">2023 - 2025</div>
              <div className="font-semibold">Master of Science in Computer Science</div>
              <div className="text-gray-600">Akademia Ekonomiczno-Humanistyczna w Warszawie</div>
            </div>
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-coral-500 before:rounded-lg">
              <div className="text-sm text-coral-500">2013 - 2015</div>
              <div className="font-semibold">Master of Arts in Leadership and Management</div>
              <div className="text-gray-600">University of Zimbabwe</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <div className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-coral-500 before:rounded-lg">
              <div className="text-sm text-coral-500">2023 - Present</div>
              <div className="font-semibold">Senior Service Delivery Engineer</div>
              <div className="text-gray-600">DXC Technologies - Luxoft (EMEA)</div>
            </div>
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-coral-500 before:rounded-lg">
              <div className="text-sm text-coral-500">2023 - Present</div>
              <div className="font-semibold">Cyber Security Analyst</div>
              <div className="text-gray-600">The Cimplicity Institute</div>
            </div>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'AWS & Azure', level: 95 },
              { name: 'Cloud Security', level: 90 },
              { name: 'DevOps', level: 85 },
              { name: 'Technical Support', level: 95 },
              { name: 'Risk Management', level: 85 },
              { name: 'ITSM Tools', level: 90 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-coral-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-coral-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6">Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'AWS Cloud Practitioner',
              'Salesforce Admin',
              'ITIL Certified',
              'ICAgile ICP',
              'CICM Certified',
              'IELTS Band 7.5'
            ].map((cert, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-coral-50 text-coral-500 rounded-lg text-center text-sm font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">About me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-coral-500/20 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="rounded-lg w-full h-full object-cover relative z-10 p-4"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex gap-4 mb-8 border-b">
              {(['personal', 'qualifications', 'skills'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium transition-colors relative
                    ${activeTab === tab ? 'text-coral-500' : 'text-gray-600 hover:text-coral-500'}
                    ${activeTab === tab ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-coral-500' : ''}
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}