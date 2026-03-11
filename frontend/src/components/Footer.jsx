import React from 'react';
import { ExternalLink, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-400">S</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Sarvshakti</h2>
                <p className="text-sm text-slate-400">Financial Services</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner in investment management and merchant banking services, delivering excellence in financial markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('philosophy')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Investment Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('insights')}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Insights & Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Our Companies</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-sm">
                  <p className="font-medium text-white mb-1">Sarvshakti Financial Advisors</p>
                  <p className="text-slate-400 text-xs">Investment Manager - SEBI AIF Cat 2</p>
                </div>
              </li>
              <li>
                <div className="text-sm">
                  <p className="font-medium text-white mb-1">Sarvshakti Capital Venture</p>
                  <p className="text-slate-400 text-xs">Merchant Banking Cat 1</p>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href="https://fortunehand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <span>Fortune Hands Growth Fund</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@sarvshakti.com"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  contact@sarvshakti.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+912212345678"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  +91 22 1234 5678
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Sarvshakti. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-6 leading-relaxed">
            <strong>Disclaimer:</strong> Investments in securities market are subject to market risks. Read all the related documents carefully before investing. SEBI Registration does not imply SEBI's recommendation or endorsement. Past performance is not indicative of future returns.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
