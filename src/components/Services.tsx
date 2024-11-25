import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Shield, Bot } from 'lucide-react';

const articles = [
  {
    icon: Newspaper,
    title: 'Think different with Tech and Pierogis',
    description: 'THE IT AUDITOR IS YOUR ENEMY! Since time immemorial theres a love-hate relationship between IT professionals and these quirky examiners.',
    link: 'https://medium.com/@abmadanhi'
  },
  {
    icon: Shield,
    title: 'The Invisible Conductor: IT Governance Challenges and Solutions',
    description: 'IT Governance makes or breaks big businesses though it doesnt get the credit it deserves. It is the behind-the-scenes…',
    link: 'https://medium.com/@abmadanhi'
  },
  {
    icon: Bot,
    title: 'An investigation into automating continuous compliance',
    description: 'This study is to analyze and develop a strategy to enhance security practices in DevSecOps by incorporating Security...',
    link: 'https://medium.com/@abmadanhi'
  }
];

export default function Services() {
  return (
    <section className="py-12 px-8 sm:px-12 lg:px-16 bg-white" id="articles">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">My Articles</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 bg-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral-400 to-coral-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-coral-50 rounded-md flex items-center justify-center group-hover:bg-coral-100 transition-colors duration-300">
                  <article.icon className="w-8 h-8 text-coral-500" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900">{article.title}</h3>
              <p className="text-gray-600 leading-relaxed">{article.description}</p>

              <div className="mt-6">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral-500 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}