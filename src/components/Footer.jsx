import React from 'react';
import { Mail, Heart, Sparkles, Network } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/60">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                FA
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {personalData.title} • {personalData.institution}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleSmoothScroll(e, section)}
                className="capitalize hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Social Media Links (GitHub, LinkedIn, Facebook, Email) */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-cyan-600 border border-slate-200 dark:border-slate-800 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] border border-slate-200 dark:border-slate-800 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#1877f2] border border-slate-200 dark:border-slate-800 transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email Me"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-rose-600 border border-slate-200 dark:border-slate-800 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Message */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <div>
            © {currentYear} <span className="font-semibold text-slate-800 dark:text-slate-200">{personalData.name}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-medium">
            <Network className="w-3.5 h-3.5" />
            <span>Computer Networks &amp; Backend Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
