import React from 'react';
import {
  GraduationCap,
  Target,
  User,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Mail,
  BookOpen,
  Briefcase,
  FileBadge,
  Globe,
  Layers,
  Network,
  Cloud,
  Server,
  Cpu,
  ShieldCheck,
  Code
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

// Map icon string to Lucide component for domains
const domainIconMap = {
  Globe: Globe,
  Layers: Layers,
  Network: Network,
  Cloud: Cloud,
  Server: Server,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

export default function About({ onOpenCV }) {
  return (
    <section id="about" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-200 dark:border-cyan-800">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Network Engineer &amp; Full Stack Developer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Specializing in Computer Networks, Network Architecture, Scalable Backend Services, and System Design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Bio & Core Domains */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Bio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                Who I Am
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a <strong>Computer Science &amp; Engineering student</strong> at <strong>Daffodil International University</strong> with a strong interest and major in <strong>Computer Networks</strong>, <strong>Full Stack Development (Django)</strong>, software development, backend systems, and artificial intelligence.
              </p>

              {/* Core Focus Domains Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-cyan-600" />
                  Core Areas of Focus &amp; Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalData.aboutMeText.domains.map((domain, idx) => {
                    const IconComponent = domainIconMap[domain.icon] || Globe;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {domain.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {domain.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Passion & Learning */}
              <div className="p-4 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {personalData.aboutMeText.passion}
              </div>

              {/* Profile Meta List */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Major:</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">{personalData.major}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Location:</span>
                  <span>{personalData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Phone:</span>
                  <span>{personalData.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Degree:</span>
                  <span>{personalData.degree}</span>
                </div>
              </div>
            </div>

            {/* Experience & Leadership */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Experience &amp; Leadership
              </h3>

              <div className="space-y-4">
                {personalData.experience.map((exp, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {exp.role} — <span className="text-cyan-600 dark:text-cyan-400">{exp.organization}</span>
                      </h4>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Educational Background & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                Educational Background
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-cyan-100 dark:before:bg-slate-800">
                {personalData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1.5">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-cyan-600 ring-4 ring-cyan-50 dark:ring-slate-800" />
                    
                    <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>

                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card (PHP Laravel removed!) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileBadge className="w-5 h-5 text-amber-500" />
                  Certifications &amp; Workshops
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                  Verified
                </span>
              </div>

              <div className="space-y-3">
                {personalData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {cert.issuer} • {cert.date}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-indigo-600 dark:text-indigo-300 shrink-0">
                      {cert.credentialId}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Career Objectives
              </h3>
              <div className="space-y-2.5">
                {personalData.careerGoals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
