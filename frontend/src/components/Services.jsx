import React from 'react';
import { servicesData } from '../data/mock';
import { Card } from './ui/card';
import { TrendingUp, PieChart, Wallet, Building2, LineChart, Briefcase } from 'lucide-react';

const iconMap = {
  TrendingUp: TrendingUp,
  PieChart: PieChart,
  Wallet: Wallet,
  Building2: Building2,
  LineChart: LineChart,
  Briefcase: Briefcase
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Briefcase className="text-blue-600" size={18} />
            <span className="text-blue-600 font-semibold text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From IPO advisory to fund management, we offer end-to-end financial services 
            tailored to meet your strategic objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 p-8 border-2 border-slate-200 hover:border-blue-400 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <Icon
                      className="text-blue-600 group-hover:text-white transition-colors"
                      size={32}
                    />
                  </div>
                  <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-amber-400/20 group-hover:bg-amber-400/40 transition-colors"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Learn More</span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12 border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to design tailored financial strategies 
              that align with your unique business objectives.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
