import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:category" element={<ProjectsPage />} />
        </Routes>
        <footer className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4">
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
              <p className="text-gray-600">© {new Date().getFullYear()} ABM Portfolio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}