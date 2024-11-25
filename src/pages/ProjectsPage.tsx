import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = {
  'web-design': [
    {
      title: 'Nexa Website',
      category: 'REACT JS',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
      description: 'Modern e-learning platform with interactive courses and real-time collaboration features.'
    },
    {
      title: 'Solstice Website',
      category: 'REACT JS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
      description: 'Innovative healthcare management system with patient portal and telemedicine capabilities.'
    },
    {
      title: 'Lumina Website',
      category: 'NEXT JS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
      description: 'Modern portfolio website with dynamic content management and stunning animations.'
    }
  ],
  'web-development': [
    {
      title: 'E-Commerce Platform',
      category: 'FULLSTACK',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      description: 'Full-featured online shopping platform with secure payment integration.'
    },
    {
      title: 'Task Manager Pro',
      category: 'REACT JS',
      image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=800',
      description: 'Comprehensive task management system with real-time updates.'
    }
  ],
  'app-development': [
    {
      title: 'Fitness Tracker',
      category: 'MOBILE APP',
      image: 'https://images.unsplash.com/photo-1526502900236-e692fb78c0fc?auto=format&fit=crop&q=80&w=800',
      description: 'Cross-platform mobile app for tracking workouts and health metrics.'
    },
    {
      title: 'Social Connect',
      category: 'MOBILE APP',
      image: 'https://images.unsplash.com/photo-1573152143286-0c422b4d2175?auto=format&fit=crop&q=80&w=800',
      description: 'Feature-rich social networking application for connecting communities.'
    }
  ]
};

export default function ProjectsPage() {
  const { category } = useParams();
  const [filter, setFilter] = useState('All Projects');

  const projectList = category ? projects[category as keyof typeof projects] : [];
  const categories = ['All Projects', 'React Js', 'Next Js', 'Fullstack'];

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-coral-500"></div>
            <h1 className="text-4xl font-bold">My Projects</h1>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-md transition-colors ${
                filter === cat
                  ? 'bg-coral-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-coral-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-coral-500 text-white rounded-md text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href="#"
                    className="text-coral-500 hover:text-coral-600 font-medium flex items-center gap-2"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}