import React from 'react';
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    title: 'Polishing Polish with AI',
    description: 'My project to learn and practice Polish with flashcards and Synthflow AI.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Synthflow'],
    link: 'https://github.com/codebyallanb'
  },
  {
    title: 'Expat Assistance Platform',
    description: 'A search engine for amenities and information about living abroad.',
    image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js'],
    link: 'https://github.com/codebyallanb'
  },
  {
    title: 'Managing teams and KPIs',
    description: 'Interactive dashboard for real-time data visualization and management reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['PowerBi'],
    link: 'https://github.com/codebyallanb'
  }
];

export default function Projects() {
  return (
    <section className="pt-4 pb-12 px-8 sm:px-12 lg:px-16" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-coral-100 text-coral-600 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}