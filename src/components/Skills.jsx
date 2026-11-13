import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Terminal,
  Server,
  Globe,
  Database,
  GitBranch,
  Palette,
  FileCode,
  Smartphone,
  Send,
  Zap,
  Cloud,
  Cpu,
  Layers,
  Sparkles,
  Network,
  ShieldCheck
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  React: Layers,
  FileCode: FileCode,
  Palette: Palette,
  Layout: Layout,
  Grid: Layout,
  Smartphone: Smartphone,
  Terminal: Terminal,
  Server: Server,
  Globe: Globe,
  Database: Database,
  GitBranch: GitBranch,
  Code2: Code2,
  Send: Send,
  Zap: Zap,
  Cloud: Cloud,
  Cpu: Cpu,
  Network: Network,
  ShieldCheck: ShieldCheck
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-200 dark:border-cyan-800">
            <Network className="w-3.5 h-3.5" />
            Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Networking, Backend &amp; Development Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Competencies in network protocols, scalable backend development with Django, and modern system engineering.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                  {group.category}
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  {group.skills.length} Skills
                </span>
              </div>

              {/* Grid of Skill Cards with Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-cyan-400 dark:hover:border-cyan-600 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Badge Cloud */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-100 via-cyan-50/40 to-slate-100 dark:from-slate-900 dark:via-cyan-950/20 dark:to-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Core Technology Tags
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              'Computer Networking',
              'TCP/IP Protocols',
              'Network Architecture',
              'Network Security',
              'Routing & Switching',
              'Python',
              'Django',
              'Django REST Framework',
              'Flask',
              'Linux / Bash',
              'Cloud & Infrastructure',
              'React.js',
              'JavaScript (ES6+)',
              'Tailwind CSS',
              'MySQL & SQLite',
              'Git & GitHub',
              'RESTful APIs'
            ].map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                #{badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
