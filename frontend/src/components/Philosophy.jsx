import React from 'react';
import { philosophyData } from '../data/mock';
import { Card } from './ui/card';
import { Search, Shield, Target, Award, Lightbulb } from 'lucide-react';

const iconMap = {
  Search: Search,
  Shield: Shield,
  Target: Target,
  Award: Award
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="text-blue-600" size={18} />
            <span className="text-blue-600 font-semibold text-sm">Investment Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {philosophyData.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {philosophyData.subtitle}
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {philosophyData.principles.map((principle, index) => {
            const Icon = iconMap[principle.icon];
            return (
              <Card
                key={principle.id}
                className="group p-8 border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon with Number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-bold text-sm border-4 border-white">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Feature Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d"
                alt="Investment Growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Strategic Approach to Wealth Creation
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our investment philosophy is rooted in thorough research, disciplined execution, 
              and a commitment to transparency. We believe in building long-term partnerships 
              with our clients based on trust and consistent performance.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Fundamental Analysis:</strong> Deep dive into 
                  business models, management quality, and competitive advantages.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Active Management:</strong> Continuous monitoring 
                  and portfolio rebalancing to optimize returns.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Risk Management:</strong> Comprehensive frameworks 
                  to protect capital while pursuing growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
