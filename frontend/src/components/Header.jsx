import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-slate-900/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-amber-400">S</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Sarvshakti
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-300'
              }`}>
                
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
              }`}
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
              }`}
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
              }`}
            >
              Insights
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 shadow-lg"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                Philosophy
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('insights')}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                Insights
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
