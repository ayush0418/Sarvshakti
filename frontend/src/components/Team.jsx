import React from 'react';
import { teamData } from '../data/mock';
import { Card } from './ui/card';
import { Linkedin, Users } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Users className="text-blue-600" size={18} />
            <span className="text-blue-600 font-semibold text-sm">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Leadership That Drives Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the experienced professionals behind Sarvshakti's success, 
            bringing decades of combined expertise in financial markets.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamData.map((member) => (
            <Card
              key={member.id}
              className="group overflow-hidden border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              {/* <div className="relative overflow-hidden bg-slate-200 h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                LinkedIn on hover
                {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                    rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                )}
              </div> */}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-4">{member.designation}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>

              {/* Decorative Bottom Bar */}
              <div className="h-1 bg-gradient-to-r from-blue-600 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Team Collaboration Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Built on Collaboration & Expertise
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team brings together diverse expertise across investment management, 
              merchant banking, and capital markets. With a shared commitment to excellence 
              and client success, we work collaboratively to deliver superior outcomes.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-600 mb-2">20+</p>
                <p className="text-sm text-slate-700 font-medium">Years of Management Experience</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="text-3xl font-bold text-amber-600 mb-2">100%</p>
                <p className="text-sm text-slate-700 font-medium">Client Satisfaction Focus</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
