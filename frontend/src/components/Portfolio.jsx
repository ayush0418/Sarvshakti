import React from 'react';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { TrendingUp, FileCheck, Users, Award, ArrowUpRight } from 'lucide-react';

const iconMap = {
  TrendingUp: TrendingUp,
  FileCheck: FileCheck,
  Users: Users,
  Award: Award
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Award className="text-blue-600" size={18} />
            <span className="text-blue-600 font-semibold text-sm">Our Performance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {portfolioData.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {portfolioData.stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <Card
                key={stat.id}
                className="group p-6 text-center border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.caseStudies.map((study) => (
              <Card
                key={study.id}
                className="group overflow-hidden border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {study.category}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>

                  {/* Result */}
                  <div className="flex items-center space-x-2 pt-4 border-t border-slate-200">
                    <ArrowUpRight className="text-green-600 flex-shrink-0" size={18} />
                    <span className="text-sm font-semibold text-green-600">{study.result}</span>
                  </div>
                </div>

                {/* Hover Effect Bar */}
                <div className="h-1 bg-gradient-to-r from-blue-600 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial / Quote Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="mb-6">
              <Award className="text-amber-400 mx-auto" size={48} />
            </div>
            <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-6 italic">
              "Excellence in execution, integrity in approach, and commitment to delivering 
              value - that's what defines our relationship with every client."
            </blockquote>
            <p className="text-slate-400 text-lg">— Sarvshakti Leadership Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
