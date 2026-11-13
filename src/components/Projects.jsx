import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Star, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

const filterCategories = ['All', 'React', 'Full Stack', 'AI & Python'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects by technology category
  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-200 dark:border-cyan-800">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected &amp; Pinned Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects &amp; Real-world Applications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Live deployed systems and production repositories from my GitHub with real application previews.
          </p>

          {/* Technology Filter Buttons (Additional Feature 2) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid: Using Array .map() method strictly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Project Image Preview */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-cyan-700 dark:text-cyan-300 shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 fill-current" />
                      Pinned
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Technologies Used (Tags) */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Two Buttons: Live Demo and GitHub Repo */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub Banner */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/fatema-akter92?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-md transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View All 31+ Repositories on GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
