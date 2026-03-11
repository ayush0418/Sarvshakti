import React from 'react';
import { heroData } from '../data/mock';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd"
          alt="Financial Advisory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-blue-900/75"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <Shield className="text-amber-400" size={18} />
              <span className="text-white text-sm font-medium">SEBI Registered Financial Services</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {heroData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 font-medium">
              {heroData.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              {heroData.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg shadow-xl shadow-blue-600/30 group"
              >
                {heroData.cta.primary}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-6 text-lg"
              >
                {heroData.cta.secondary}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <TrendingUp className="text-amber-400" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">₹500+ Cr</p>
                  <p className="text-sm text-slate-400">AUM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <Shield className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">SEBI</p>
                  <p className="text-sm text-slate-400">Registered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Glass Card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-900 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-slate-200">SEBI registered AIF Cat 2 and Merchant Banking expertise</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-900 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-slate-200">20+ years combined experience in financial markets</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-900 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-slate-200">End-to-end solutions from IPO advisory to fund management</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-900 text-sm font-bold">✓</span>
                    </div>
                    <p className="text-slate-200">Track record of consistent performance and client satisfaction</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
