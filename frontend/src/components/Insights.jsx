import React from 'react';
import { insightsData } from '../data/mock';
import { Card } from './ui/card';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <BookOpen className="text-blue-600" size={18} />
            <span className="text-blue-600 font-semibold text-sm">Insights & Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Market Insights & Thought Leadership
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest market analysis, investment insights, 
            and industry perspectives.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((insight) => (
            <Card
              key={insight.id}
              className="group overflow-hidden border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 bg-slate-200">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-xs text-slate-500 mb-4">
                  <span>{insight.date}</span>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{insight.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {insight.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-blue-600 font-medium group/link">
                  <span className="text-sm">Read Article</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover/link:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-12 border border-slate-200">
            <BookOpen className="text-blue-600 mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Get the latest market insights, investment strategies, and financial news 
              delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                />
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
