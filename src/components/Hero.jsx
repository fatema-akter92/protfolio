import React from 'react';
import { Download, ArrowRight, Mail, Code, Sparkles, MapPin, Phone, Network, Cloud, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow Blobs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Major & Status Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold shadow-sm">
                <Network className="w-3.5 h-3.5" />
                <span>Major in Computer Networks</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Open to Network &amp; Backend Roles</span>
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400 flex items-center justify-center lg:justify-start gap-2">
                <span>👋 Welcome, I am</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {personalData.name}
                <span className="block text-2xl sm:text-3xl font-bold mt-1 text-slate-600 dark:text-slate-400">
                  ({personalData.nickName})
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold gradient-text pt-1 leading-snug">
                {personalData.headline}
              </p>
            </div>

            {/* Sub-headline / Detailed intro */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalData.subHeadline}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-red-500" />
                {personalData.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-1.5 font-medium">
                <Phone className="w-4 h-4 text-emerald-500" />
                {personalData.phone}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-indigo-500" />
                Django • Networking • Linux
              </span>
            </div>

            {/* Action Buttons: Download CV & View Projects */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download CV / Resume</span>
              </button>

              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-[#0077b5]/10 dark:hover:bg-slate-700 hover:text-[#0077b5] border border-slate-200 dark:border-slate-700 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture & Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />

              {/* Main Card */}
              <div className="relative w-72 sm:w-80 md:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-2xl overflow-hidden">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-cyan-100 to-indigo-100 dark:from-slate-800 dark:to-indigo-950 mb-4">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-xs flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      Networking Major
                    </span>
                    <span className="text-cyan-300 font-semibold">DIU • CSE</span>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">Networking</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Major Focus</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Django &amp; Cloud</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Backend Stack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
