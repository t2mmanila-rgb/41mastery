import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, CheckCircle2, ArrowRight, Zap, PlayCircle } from 'lucide-react';
import { COURSES } from '../lib/test-data';

export default function Webinars() {
  return (
    <div className="pt-48 pb-32 px-6 bg-teal">
      <div className="max-w-7xl mx-auto">
        <div className="bg-cream rounded-[40px] p-12 md:p-20 shadow-2xl mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-teal/5 border border-teal/10 mb-8">
            <PlayCircle className="w-4 h-4 text-teal" />
            <span className="font-tech text-[10px] font-bold uppercase tracking-[0.3em] text-teal">Live Learning Sessions // 2026</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-10 glow-text uppercase text-dark">
            Master AI <br />
            <span className="text-cyan-accent">Live.</span>
          </h1>
          <p className="text-2xl text-dark/80 leading-relaxed max-w-2xl font-bold">
            Join our expert-led webinars designed to take you from AI curiosity to professional mastery. Practical, non-technical, and focused on immediate results.
          </p>
        </div>

        <div className="grid gap-24">
          {/* AI Mastery Series */}
          <section>
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-dark/10" />
              <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-dark/40">AI Mastery Series</h2>
              <div className="h-px flex-1 bg-dark/10" />
            </div>
            <div className="grid gap-12">
              {COURSES.filter(c => c.category === 'AI').map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cream rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all"
                >
                  <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-xl font-tech text-xs font-bold uppercase tracking-widest shadow-sm">
                          <Calendar className="w-4 h-4" />
                          {course.date}
                        </div>
                        <div className="flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-xl font-tech text-xs font-bold uppercase tracking-widest shadow-sm">
                          <User className="w-4 h-4" />
                          {course.speaker}
                        </div>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight group-hover:text-cyan-accent transition-colors text-dark">
                        {course.title}
                      </h3>
                      
                      <p className="text-xl text-dark/70 mb-10 font-bold leading-relaxed">
                        {course.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {course.objectives.map((obj, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 w-5 h-5 rounded-full bg-teal/5 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-cyan-accent" />
                            </div>
                            <span className="font-tech text-sm text-dark/60 font-bold uppercase tracking-wide leading-relaxed">{obj}</span>
                          </div>
                        ))}
                      </div>

                      <button className="apply-button text-white px-6 py-3 sm:px-10 sm:py-5 rounded-xl font-tech font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 transition-all">
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="w-full lg:w-80 shrink-0">
                      <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden relative">
                        <img 
                          src={`https://picsum.photos/seed/${course.id}/800/800`} 
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-1000"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-cyan-accent flex items-center justify-center shadow-2xl shadow-cyan-accent/50">
                            <Zap className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Business Growth Series */}
          <section>
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-dark/10" />
              <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-dark/40">Business Growth Series</h2>
              <div className="h-px flex-1 bg-dark/10" />
            </div>
            <div className="grid gap-12">
              {COURSES.filter(c => c.category === 'Business').map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-cream rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all"
                >
                  <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-xl font-tech text-xs font-bold uppercase tracking-widest shadow-sm">
                          <Calendar className="w-4 h-4" />
                          {course.date}
                        </div>
                        <div className="flex items-center gap-2 bg-teal text-white px-4 py-2 rounded-xl font-tech text-xs font-bold uppercase tracking-widest shadow-sm">
                          <User className="w-4 h-4" />
                          {course.speaker}
                        </div>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight group-hover:text-cyan-accent transition-colors text-dark">
                        {course.title}
                      </h3>
                      
                      <p className="text-xl text-dark/70 mb-10 font-bold leading-relaxed">
                        {course.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {course.objectives.map((obj, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="mt-1 w-5 h-5 rounded-full bg-teal/5 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-cyan-accent" />
                            </div>
                            <span className="font-tech text-sm text-dark/60 font-bold uppercase tracking-wide leading-relaxed">{obj}</span>
                          </div>
                        ))}
                      </div>

                      <button className="apply-button text-white px-6 py-3 sm:px-10 sm:py-5 rounded-xl font-tech font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 transition-all">
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="w-full lg:w-80 shrink-0">
                      <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden relative">
                        <img 
                          src={`https://picsum.photos/seed/${course.id}/800/800`} 
                          className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-1000"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-cyan-accent flex items-center justify-center shadow-2xl shadow-cyan-accent/50">
                            <Zap className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
