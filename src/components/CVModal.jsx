import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Network
} from 'lucide-react';
import { personalData, skillsData, projectsData } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('official'); // 'official' or 'modern'

  if (!isOpen) return null;

  // 1. Text Resume Download
  const handleDownloadTxt = () => {
    const cvContent = `===================================================================
FATEMA AKTER (${personalData.nickName})
${personalData.title}
Major: ${personalData.major}
Phone: ${personalData.phone} | Email: ${personalData.email}
Location: ${personalData.location}
GitHub: ${personalData.github}
LinkedIn: ${personalData.linkedin}
===================================================================

HEADLINE:
${personalData.headline}

SUMMARY:
${personalData.shortBio}
${personalData.aboutMeText.intro}
${personalData.aboutMeText.passion}

LANGUAGES:
${personalData.languages.map((l) => `- ${l.name} (${l.proficiency})`).join('\n')}

TECHNICAL SKILLS:
${skillsData.map((c) => `* ${c.category}: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}

EXPERIENCE & LEADERSHIP:
${personalData.experience
  .map(
    (exp) =>
      `* ${exp.role} — ${exp.organization} (${exp.period})\n` +
      exp.bullets.map((b) => `  - ${b}`).join('\n')
  )
  .join('\n\n')}

CERTIFICATIONS & WORKSHOPS:
${personalData.certifications
  .map((cert) => `* ${cert.title} — ${cert.issuer} (${cert.date}) [ID: ${cert.credentialId}]`)
  .join('\n')}

EDUCATION:
${personalData.education
  .map((e) => `* ${e.degree} — ${e.institution} (${e.period})\n  ${e.description}`)
  .join('\n\n')}

FEATURED PROJECTS:
${projectsData
  .map(
    (p) =>
      `* ${p.title} [${p.category}]\n  ${p.shortDescription}\n  Technologies: ${p.technologies.join(', ')}\n  Live: ${p.liveUrl}\n  GitHub: ${p.githubUrl}`
  )
  .join('\n\n')}

===================================================================
Curriculum Vitae of Fatema Akter
===================================================================`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Fatema_Akter_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // 2. Browser Print / Save as PDF
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-850 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              CV
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {personalData.name} • {personalData.major}
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('official')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'official'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              📄 Official CV (Academic)
            </button>
            <button
              onClick={() => setActiveTab('modern')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'modern'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              ✨ Modern Portfolio CV
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintPDF}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-colors"
              title="Download Plain Text Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-50/40 dark:bg-slate-950/40">
          
          {/* TAB 1: Official Academic Standard Resume */}
          {activeTab === 'official' && (
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-sans space-y-6">
              
              {/* Header */}
              <div className="text-center space-y-2 border-b pb-6 border-slate-200 dark:border-slate-800">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-wide">
                  {personalData.name}
                </h1>
                <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  {personalData.headline}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1 font-medium">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    {personalData.phone}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                    {personalData.email}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Globe className="w-3.5 h-3.5 text-purple-600" />
                    github.com/fatema-akter92
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    {personalData.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1.5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b pb-1 border-slate-200 dark:border-slate-800">
                  Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                  {personalData.shortBio} Currently studying Computer Science &amp; Engineering at Daffodil International University, majoring in Computer Networks. Built public GitHub projects including A Library Management System, AI face analysis system and a custom Bangla-to-C compiler. Certified in AI-powered Web Development (JS + Claude Code), and UI/UX Design. Eager to contribute to real-world software &amp; networking systems.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                  <strong className="text-slate-800 dark:text-slate-200">Languages:</strong> Bangla (Native) • English (Proficient) • Urdu (Conversational)
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-1.5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b pb-1 border-slate-200 dark:border-slate-800">
                  Technical Competencies
                </h2>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1 pt-1">
                  <div>
                    <strong className="text-slate-900 dark:text-white">Networking &amp; Infrastructure:</strong> Computer Networking, TCP/IP, OSI Model, Network Architecture, Routing &amp; Switching, Network Security, Linux, Cloud
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Backend &amp; Web:</strong> Python, Django, Django REST Framework (DRF), Flask, RESTful APIs, MySQL, SQLite
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Languages &amp; Tools:</strong> Java, C, C++, JavaScript (ES6+), React.js, Tailwind CSS, HTML5/CSS3, Git &amp; GitHub
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b pb-1 border-slate-200 dark:border-slate-800">
                  Experience &amp; Leadership
                </h2>
                {personalData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1 pt-1">
                    <div className="flex justify-between items-baseline text-xs sm:text-sm">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {exp.role} — <span className="font-semibold text-slate-700 dark:text-slate-300">{exp.organization}</span>
                      </span>
                      <span className="font-semibold text-slate-500 dark:text-slate-400 text-xs">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b pb-1 border-slate-200 dark:border-slate-800">
                  Certifications &amp; Seminars
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  {personalData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex justify-between border-b border-slate-100 dark:border-slate-800/60 pb-1">
                      <span>• {cert.title} — <em>{cert.issuer}</em></span>
                      <span className="text-slate-400 font-mono text-[11px] ml-2 shrink-0">{cert.credentialId}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education (Without 2023-2027 as requested) */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b pb-1 border-slate-200 dark:border-slate-800">
                  Education
                </h2>
                {personalData.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-baseline text-xs sm:text-sm pt-1">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{edu.institution}</div>
                    </div>
                    <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 shrink-0">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 2: Modern Interactive Visual CV */}
          {activeTab === 'modern' && (
            <div className="max-w-3xl mx-auto space-y-6">
              
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-cyan-500 shadow-md"
                />
                <div className="space-y-1 text-center sm:text-left flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {personalData.name} ({personalData.nickName})
                  </h3>
                  <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                    {personalData.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {personalData.institution} • {personalData.location}
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
                      Major: Computer Networks
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                      Backend &amp; Cloud Focus
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-600" />
                  Key Technical Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {skillsData.map((cat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                      <div className="text-xs font-bold text-slate-900 dark:text-white mb-2">{cat.category}</div>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((s, sIdx) => (
                          <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 font-medium">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer with Dual Download Options */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-850">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Available in <strong>Standard Academic</strong> &amp; <strong>Text ATS</strong> formats
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all"
            >
              <FileText className="w-4 h-4 text-purple-600" />
              <span>Download Text Resume</span>
            </button>
            <button
              onClick={handlePrintPDF}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-500/25 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Download Official CV (PDF)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
