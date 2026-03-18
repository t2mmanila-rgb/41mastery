import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, ArrowRight, CheckCircle2, Globe, Zap, BarChart3, GraduationCap, Calendar, ExternalLink, Mail, Linkedin, ChevronLeft, AlertCircle, ShieldCheck, Target, Menu, X } from 'lucide-react';
import AITest from './components/AITest';
import Logo from './components/Logo';
import Webinars from './components/Webinars';
import About from './components/About';

type AppState = 'landing' | 'test' | 'results' | 'webinars' | 'about';

import joanneImg from './assets/Joanne Sison.png';
import gretchenImg from './assets/Gretchen Veran.png';

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [results, setResults] = useState<{ scores: any; recommendation: { ai: any[]; marketing: any[] } } | null>(null);
  const [preSignupCourse, setPreSignupCourse] = useState<any | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleComplete = (scores: any, recommendation: any) => {
    setResults({ scores, recommendation });
    setState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (newState: AppState) => {
    setState(newState);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preSignupCourse) return;

    const subject = encodeURIComponent(`Please sign me up for ${preSignupCourse.title}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
    window.location.href = `mailto:t2mmanila@gmail.com?subject=${subject}&body=${body}`;

    alert(`We have registered your interest for the course ${preSignupCourse.title} and will get back to you with more details`);
    setPreSignupCourse(null);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-teal text-dark font-sans selection:bg-cyan-accent selection:text-white neural-bg">
      <AnimatePresence mode="wait">
        {(state === 'landing' || state === 'webinars' || state === 'about') && (
          <motion.div
            key={state}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-cream border-b border-teal/10">
              <div className="max-w-7xl mx-auto px-6 h-20 sm:h-24 flex items-center justify-between">
                <button onClick={() => navigateTo('landing')}>
                  <Logo className="scale-90 sm:scale-100 origin-left" />
                </button>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 font-tech text-sm font-bold uppercase tracking-[0.2em] text-teal">
                  <button onClick={() => navigateTo('webinars')} className={`hover:text-dark transition-colors ${state === 'webinars' ? 'text-cyan-accent' : ''}`}>Webinars</button>
                  <a href="#" className="hover:text-dark transition-colors">Resources</a>
                  <button onClick={() => navigateTo('about')} className={`hover:text-dark transition-colors ${state === 'about' ? 'text-cyan-accent' : ''}`}>ETX Ph</button>
                  <button 
                    onClick={() => navigateTo('test')}
                    className="apply-button text-white px-10 py-4 rounded-xl font-tech text-lg font-bold uppercase tracking-widest transition-all active:scale-95"
                  >
                    FREE ASSESSMENT
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 text-teal"
                >
                  {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
              </div>

              {/* Mobile Menu Overlay */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-cream border-b border-teal/10 overflow-hidden"
                  >
                    <div className="px-6 py-8 flex flex-col gap-8 font-tech text-base font-bold uppercase tracking-widest text-teal">
                      <button onClick={() => navigateTo('webinars')} className={`text-left hover:text-dark transition-colors ${state === 'webinars' ? 'text-cyan-accent' : ''}`}>Webinars</button>
                      <a href="#" className="hover:text-dark transition-colors">Resources</a>
                      <button onClick={() => navigateTo('about')} className={`text-left hover:text-dark transition-colors ${state === 'about' ? 'text-cyan-accent' : ''}`}>ETX Ph</button>
                      <button 
                        onClick={() => navigateTo('test')}
                        className="apply-button text-white w-full py-5 rounded-xl font-tech text-base font-bold uppercase tracking-widest transition-all active:scale-95"
                      >
                        FREE ASSESSMENT
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>

            {state === 'landing' && (
              <>
                {/* Hero Section */}
                <section className="pt-48 pb-32 px-6 overflow-hidden">
                  <div className="max-w-7xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-cream rounded-[40px] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-visible"
                    >
                      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                        <div className="max-w-2xl">
                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-teal/5 border border-teal/10 mb-8">
                            <Globe className="w-4 h-4 text-teal" />
                            <span className="font-tech text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-teal">Global Edition // 2026</span>
                          </div>
                          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.85] tracking-tighter mb-10 text-dark">
                            MASTER<br />
                            THE <span className="text-cyan-accent">AI</span><br />
                            <span className="text-cyan-accent">REVOLUTION.</span>
                          </h1>
                          <p className="text-lg md:text-xl lg:text-2xl text-dark/80 leading-relaxed mb-12 max-w-xl font-bold">
                            Demystifying AI for global professionals. Learn how to leverage the power of AI from two industry leaders dedicated to your growth.
                          </p>
                          <div className="flex flex-col sm:flex-row items-center gap-8">
                            <button
                              onClick={() => navigateTo('test')}
                              className="w-full sm:w-auto group apply-button text-white px-6 py-4 sm:px-10 sm:py-6 rounded-xl text-sm sm:text-base font-tech font-bold uppercase tracking-widest flex items-center justify-center gap-4 transition-all"
                            >
                              FREE ASSESSMENT
                              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <div className="flex items-center gap-5">
                              <div className="flex -space-x-3">
                                {[1,2,3].map(i => (
                                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-cream grayscale" referrerPolicy="no-referrer" />
                                ))}
                              </div>
                              <div className="font-tech text-[9px] text-dark/40 font-bold uppercase tracking-widest leading-tight">
                                <span className="text-dark font-bold">2,400+</span> professionals<br />enrolled
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative grid grid-cols-2 gap-6 md:gap-8 min-h-[400px] lg:min-h-[600px] mt-12 lg:mt-0">
                          <div className="relative h-fit group">
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                              <img 
                                src={joanneImg} 
                                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                                alt="Joanne Sison"
                              />
                            </div>
                            <div className="absolute -bottom-4 -left-2 right-4 p-4 bg-teal rounded-xl shadow-xl z-20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-white/20">
                              <p className="text-white font-tech text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Joanne Sison</p>
                              <p className="text-white/60 font-tech text-[7px] uppercase tracking-widest leading-tight">Data Analytics Partner, ETX Ph</p>
                            </div>
                          </div>
                          
                          <div className="relative h-fit pt-16 group">
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3 group-hover:rotate-0 transition-transform duration-500">
                              <img 
                                src={gretchenImg} 
                                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                                alt="Gretchen Veran"
                              />
                            </div>
                            <div className="absolute -bottom-4 -right-2 left-4 p-4 bg-cyan-accent rounded-xl shadow-xl z-20 transform rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-white/20">
                              <p className="text-dark font-tech text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Gretchen Veran</p>
                              <p className="text-dark/60 font-tech text-[7px] uppercase tracking-widest leading-tight">Digital Marketing Partner, ETX Ph</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Features Grid */}
                <section className="py-32 px-6 bg-cream">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                      <h2 className="text-5xl font-display mb-6 tracking-tight uppercase text-dark">Psychological Assessment Framework</h2>
                      <p className="text-dark/60 max-w-2xl mx-auto font-tech text-sm uppercase tracking-widest">Our 25-question framework analyzes four critical dimensions of your relationship with the AI revolution.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                      {[
                        { icon: <AlertCircle className="w-6 h-6" />, title: "Concern", desc: "Your psychological stress levels regarding automation." },
                        { icon: <ShieldCheck className="w-6 h-6" />, title: "Preparedness", desc: "Your current skill set and readiness for change." },
                        { icon: <Zap className="w-6 h-6" />, title: "Exposure", desc: "How vulnerable your specific industry is to AI." },
                        { icon: <Target className="w-6 h-6" />, title: "Barriers", desc: "What's actually stopping you from moving forward." }
                      ].map((f, i) => (
                        <div key={i} className="p-10 bg-teal rounded-[30px] shadow-xl hover:shadow-2xl transition-all group">
                          <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 group-hover:border-cyan-accent/50 transition-all">
                            <div className="text-cream">{f.icon}</div>
                          </div>
                          <h3 className="text-2xl font-display mb-4 uppercase tracking-tight text-cyan-accent">{f.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed font-tech uppercase tracking-wide">{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {state === 'webinars' && <Webinars />}
            {state === 'about' && <About />}
          </motion.div>
        )}

        {state === 'test' && (
          <motion.div
            key="test"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-32 pb-20"
          >
            <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center justify-between">
              <button 
                onClick={() => setState('landing')}
                className="font-tech text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40 hover:text-cyan-accent transition-colors flex items-center gap-3"
              >
                <ChevronLeft className="w-4 h-4" /> Terminate Protocol
              </button>
              <Logo className="scale-75 origin-right" />
            </div>
            <AITest onComplete={handleComplete} />
          </motion.div>
        )}

        {state === 'results' && results && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-40 pb-32 px-6 bg-teal"
          >
            <div className="max-w-5xl mx-auto">
              {/* Results Header */}
              <div className="bg-cream rounded-[40px] p-12 md:p-20 shadow-2xl mb-12 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-block p-6 bg-teal/5 border border-teal/10 rounded-2xl mb-10"
                >
                  <Sparkles className="w-12 h-12 text-cyan-accent" />
                </motion.div>
                <h2 className="text-6xl md:text-7xl font-display tracking-tighter mb-8 uppercase text-dark">Your Readiness Profile</h2>
                <p className="text-dark/60 max-w-2xl mx-auto font-tech text-base uppercase tracking-[0.2em]">We've analyzed your responses. Here is your personalized breakdown and strategic roadmap.</p>
              </div>

              {/* Score Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {Object.entries(results.scores).filter(([k]) => k !== 'Overall').map(([key, value]: [any, any], i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-cream rounded-[30px] p-10 shadow-xl"
                  >
                    <div className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-dark/40 mb-6">{key}</div>
                    <div className="text-6xl font-display mb-6 text-dark">{value}%</div>
                    <div className="h-1 w-full bg-teal/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        className="h-full bg-cyan-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AI Recommendations */}
              <div className="space-y-12 mb-20">
                <div className="text-center mb-16">
                  <h3 className="text-3xl font-display uppercase tracking-widest text-white/40 mb-4">Recommended AI Mastery Path</h3>
                  <div className="h-1 w-24 bg-cyan-accent mx-auto rounded-full" />
                </div>
                
                {results.recommendation.ai.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="bg-cream rounded-[40px] shadow-2xl overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                      <Zap className="w-80 h-80 text-teal" />
                    </div>
                    
                    <div className="p-12 md:p-20 relative z-10">
                      <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-teal/5 border border-teal/10 mb-10">
                            <GraduationCap className="w-4 h-4 text-teal" />
                            <span className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-teal">Strategic Roadmap // {idx === 0 ? 'Primary' : 'Additional'}</span>
                          </div>
                          <h3 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[0.9] uppercase tracking-tighter text-dark">
                            {course.title}
                          </h3>
                          <p className="text-xl text-dark/80 mb-12 leading-relaxed font-bold">
                            {course.description}
                          </p>
                          
                          <div className="grid sm:grid-cols-2 gap-8 mb-16">
                            {course.objectives.map((obj: string, i: number) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full bg-teal/5 flex items-center justify-center shrink-0">
                                  <CheckCircle2 className="w-3 h-3 text-cyan-accent" />
                                </div>
                                <span className="font-tech text-sm text-dark/70 uppercase tracking-wide leading-relaxed font-bold">{obj}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-8 items-center">
                            {course.link ? (
                              <a 
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto apply-button text-white px-8 py-4 sm:px-12 sm:py-6 rounded-xl font-tech font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all"
                              >
                                REGISTER NOW
                                <ArrowRight className="w-5 h-5" />
                              </a>
                            ) : (
                              <button 
                                onClick={() => setPreSignupCourse(course)}
                                className="w-full sm:w-auto apply-button text-white px-8 py-4 sm:px-12 sm:py-6 rounded-xl font-tech font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all"
                              >
                                PRE-SIGN UP
                                <Mail className="w-5 h-5" />
                              </button>
                            )}
                            <div className="flex items-center gap-4 text-dark/60">
                              <Calendar className="w-5 h-5" />
                              <span className="font-tech text-xs font-bold uppercase tracking-[0.2em]">{course.date}</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full lg:w-96 shrink-0">
                          <div className="bg-teal/5 border border-teal/10 p-10 rounded-3xl relative">
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-cream border border-teal/10 rounded-lg flex items-center justify-center">
                              <Sparkles className="w-6 h-6 text-cyan-accent" />
                            </div>
                            <div className="flex items-center gap-5 mb-10">
                              <img src={course.image || (course.speaker === "Joanne Sison" ? joanneImg : gretchenImg)} className="w-20 h-20 rounded-xl object-cover grayscale" referrerPolicy="no-referrer" />
                              <div>
                                <div className="font-display text-xl uppercase text-dark">{course.speaker}</div>
                                <div className="font-tech text-xs text-teal uppercase tracking-[0.3em] font-bold mt-1">ETX Ph Partner</div>
                              </div>
                            </div>
                            <p className="font-tech text-sm text-dark/50 leading-relaxed mb-8 uppercase tracking-wide italic font-bold">
                              {course.speaker === "Joanne Sison" 
                                ? '"As an expat, your ability to automate isn\'t just a convenience—it\'s your competitive advantage in a global market."'
                                : '"Strategic growth isn\'t about doing more marketing—it\'s about doing the RIGHT marketing for your unique business stage."'
                              }
                            </p>
                            <div className="pt-8 border-t border-teal/10 flex items-center justify-between">
                              <span className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-dark/30">In Collaboration with</span>
                              <span className="font-display text-sm tracking-tighter text-dark">AI MASTERY</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Marketing Recommendations */}
              {results.recommendation.marketing.length > 0 && (
                <div className="space-y-12">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl font-display uppercase tracking-widest text-white/40 mb-4">Business & Marketing Growth</h3>
                    <div className="h-1 w-24 bg-cyan-accent mx-auto rounded-full" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {results.recommendation.marketing.map((course, idx) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + (idx * 0.1) }}
                        className="bg-cream rounded-[40px] shadow-2xl p-10 relative overflow-hidden group"
                      >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-teal/5 border border-teal/10 mb-8">
                          <BarChart3 className="w-4 h-4 text-teal" />
                          <span className="font-tech text-[10px] font-bold uppercase tracking-[0.3em] text-teal">Marketing Strategy</span>
                        </div>
                        <h4 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight text-dark leading-tight group-hover:text-cyan-accent transition-colors">
                          {course.title}
                        </h4>
                        <p className="text-dark/70 mb-8 font-bold leading-relaxed line-clamp-3">
                          {course.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <button 
                            onClick={() => course.link ? window.open(course.link, '_blank') : setPreSignupCourse(course)}
                            className="font-tech text-xs font-bold uppercase tracking-[0.2em] text-teal hover:text-cyan-accent transition-colors flex items-center gap-2"
                          >
                            {course.link ? 'Learn More' : 'Pre-sign up'}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <div className="font-tech text-[9px] font-bold uppercase tracking-widest text-dark/30">
                            {course.date}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Secondary CTA */}
              <div className="mt-16 text-center">
                <button 
                  onClick={() => navigateTo('landing')}
                  className="font-tech text-xs font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
                >
                  Reset Assessment Protocol
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pre-signup Modal */}
      <AnimatePresence>
        {preSignupCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreSignupCourse(null)}
              className="absolute inset-0 bg-teal/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-cream rounded-[40px] p-10 md:p-16 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Mail className="w-24 h-24 text-teal" />
              </div>

              <div className="relative z-10">
                <button 
                  onClick={() => setPreSignupCourse(null)}
                  className="absolute -top-8 -right-8 p-4 text-dark/20 hover:text-dark transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-teal/5 border border-teal/10 mb-8">
                  <Sparkles className="w-4 h-4 text-teal" />
                  <span className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-teal">Pre-registration Protocol</span>
                </div>

                <h3 className="text-4xl font-display font-bold mb-4 uppercase tracking-tighter text-dark">
                  Join the Waitlist
                </h3>
                <p className="text-dark/60 font-tech text-sm uppercase tracking-widest mb-10 pb-8 border-b border-teal/10">
                  {preSignupCourse.title}
                </p>

                <form onSubmit={handlePreSignup} className="space-y-6">
                  <div>
                    <label className="block font-tech text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40 mb-3 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-teal/5 border border-teal/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-cyan-accent focus:border-transparent outline-none transition-all font-tech text-sm uppercase font-bold"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block font-tech text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40 mb-3 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-teal/5 border border-teal/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-cyan-accent focus:border-transparent outline-none transition-all font-tech text-sm uppercase font-bold"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-tech text-[10px] font-bold uppercase tracking-[0.3em] text-dark/40 mb-3 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-teal/5 border border-teal/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-cyan-accent focus:border-transparent outline-none transition-all font-tech text-sm uppercase font-bold"
                      placeholder="+63 9xx xxx xxxx"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full apply-button text-white px-8 py-5 rounded-xl font-tech font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all mt-10"
                  >
                    SEND REQUEST
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/10 bg-teal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <Logo className="mb-8" variant="white" />
              <p className="text-white/60 font-tech text-xs font-bold uppercase tracking-widest leading-relaxed max-w-sm">
                Empowering global professionals to navigate the AI revolution through psychological insight and practical mastery.
              </p>
            </div>
            <div>
              <h4 className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
              <ul className="space-y-4 font-tech text-xs font-bold uppercase tracking-widest text-white/60">
                <li><button onClick={() => navigateTo('landing')} className="hover:text-cyan-accent transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('webinars')} className="hover:text-cyan-accent transition-colors">Webinars</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-cyan-accent transition-colors">About ETX Ph</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-white mb-8">Connect</h4>
              <div className="flex gap-6">
                <Linkedin className="w-6 h-6 text-white/60 hover:text-cyan-accent cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-white/60 hover:text-cyan-accent cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-tech text-xs font-bold uppercase tracking-[0.4em] text-white/30">© 2026 AI MASTERY // All Rights Reserved</p>
            <div className="flex gap-8 font-tech text-xs font-bold uppercase tracking-[0.4em] text-white/30">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

