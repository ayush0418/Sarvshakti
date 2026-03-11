import React from 'react';
import { companiesData } from '../data/mock';
import { Card } from './ui/card';
import { ExternalLink, CheckCircle2, Building2 } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Building2 className="text-blue-600" size={18} />
            <span className="text-blue-600 font-semibold text-sm">About Sarvshakti</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Two Companies, One Vision
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sarvshakti brings together comprehensive financial services through two specialized entities, 
            delivering excellence across investment management and merchant banking.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {companiesData.map((company, index) => (
            <Card
              key={company.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-slate-200 hover:border-blue-400"
            >
              <div className="p-8">
                {/* Company Type Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {company.type}
                </div>

                {/* Company Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>

                {/* Registration Status */}
                <div className="flex items-center space-x-2 mb-6 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                  <CheckCircle2 className="text-amber-600 flex-shrink-0" size={20} />
                  <span className="text-sm font-medium text-amber-800">{company.registration}</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {company.description}
                </p>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Services:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {company.services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link if available */}
                {company.link && (
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/link"
                  >
                    <span>Visit Fortune Hands Growth Fund</span>
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Decorative Element */}
              <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              To empower businesses and investors with comprehensive financial solutions, 
              combining deep market expertise, regulatory excellence, and unwavering commitment 
              to delivering sustainable value creation across all market cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
