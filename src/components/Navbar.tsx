import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center">
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-800 hover:text-coral-500 transition-colors ${
                isHome ? 'text-coral-500' : ''
              }`}
            >
              Home
            </Link>
            {isHome && (
              <>
                <a href="#articles" className="text-gray-800 hover:text-coral-500 transition-colors">
                  Articles
                </a>
                <a href="#projects" className="text-gray-800 hover:text-coral-500 transition-colors">
                  Projects
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}