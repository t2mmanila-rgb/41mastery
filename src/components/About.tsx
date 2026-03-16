import React from 'react';
import { motion } from 'motion/react';
import { Globe, Target, Zap, MapPin, Users, ShieldCheck, Mail, Linkedin, Facebook, Instagram, Phone, Brain, Sparkles, BookOpen, Presentation, Code } from 'lucide-react';
import joanneImg from '../assets/Joanne Sison.png';
import gretchenImg from '../assets/Gretchen Veran.png';
import charmzImg from '../assets/Charmz Bautista.png';

const TEAM = [
  { name: "Rico Bautista", role: "Chief Executive Officer" },
  { name: "Charmina Lou Bautista", role: "Managing Director", image: charmzImg },
  { name: "Joanne Sison", role: "Data Analytics Partner, ETX Ph", image: joanneImg },
  { name: "Luis Sison, PhD", role: "AI & Technology Partner" },
  { name: "Xavier Marzan", role: "AI & Digital Transformation Partner" },
  { name: "Robert Newgen", role: "AI & Digital Transformation Partner" },
  { name: "Gretchen Veran", role: "Digital Marketing Partner, ETX Ph", image: gretchenImg },
  { name: "Sumeet Ahuja", role: "AI & Product Technology Partner" },
  { name: "Yobel Bautista", role: "Program Specialist" },
  { name: "Niann Pascual", role: "Program Specialist" },
  { name: "Wendy Espino", role: "Digital Marketing Specialist" },
  { name: "Eric Bautista", role: "General Manager, La Adhika" }
];

const SERVICES = [
  {
    title: "AI Certification & Training",
    description: "Future-proof your career and company. Authorized training partner of AI CERTs offering globally recognized certifications.",
    icon: <Brain className="w-8 h-8" />
  },
  {
    title: "Leadership & Sales",
    description: "High-impact training, motivational speaking, and soft skills mastery programs specifically curated for executive teams.",
    icon: <Presentation className="w-8 h-8" />
  },
  {
    title: "La Adhika L&D Centre",
    description: "Exclusive, distraction-free sanctuary in Morong, Bataan for strategic planning and executive retreats.",
    icon: <MapPin className="w-8 h-8" />
  },
  {
    title: "Business & Tech Consulting",
    description: "Solutions for digital transformation, data analytics, and organizational staff engagement.",
    icon: <Code className="w-8 h-8" />
  }
];

export default function About() {
  return (
    <div className="pt-48 pb-32 px-6 bg-teal">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-cream rounded-[40px] p-12 md:p-20 shadow-2xl mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-teal/5 border border-teal/10 mb-8">
            <Globe className="w-4 h-4 text-teal" />
            <span className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-teal">Expert Corporate Training // Philippines</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-10 glow-text uppercase text-dark">
            Bridging Human Leadership <br />
            <span className="text-cyan-accent">& Digital Innovation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark/80 leading-relaxed max-w-3xl font-bold">
            We are the only firm in the Philippines that integrates modern technology, human-centric leadership, and conducive environments into one ecosystem.
          </p>
        </div>

        {/* Advantage Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bg-cream p-12 rounded-[40px] shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Zap className="w-32 h-32 text-teal" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight text-teal">The ETX Ph Advantage</h2>
            <p className="text-xl text-dark/70 font-bold leading-relaxed">
              Empowering Human + Digital Transformation through real-world executive experience and a partner for every stage of growth.
            </p>
          </div>
          <div className="bg-cream p-12 rounded-[40px] shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="w-32 h-32 text-teal" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight text-teal">Our Vision</h2>
            <p className="text-xl text-dark/70 font-bold leading-relaxed">
              To shape future-ready organizations and empowered professionals by blending proven methods with innovative systems.
            </p>
          </div>
        </div>

        {/* Service Pillars */}
        <div className="mb-32">
          <h2 className="text-4xl font-display font-bold mb-12 uppercase tracking-tight text-white text-center">Comprehensive Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="bg-cream p-10 rounded-[35px] shadow-lg hover:shadow-2xl transition-all">
                <div className="text-teal mb-6">{service.icon}</div>
                <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tight text-dark">{service.title}</h3>
                <p className="text-dark/60 font-tech text-xs font-bold uppercase tracking-widest leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* La Adhika Section */}
        <div className="mb-32">
          <div className="bg-cream rounded-[40px] shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tighter text-dark">La Adhika L&D Centre</h2>
                <p className="text-2xl text-dark/70 font-bold leading-relaxed mb-8">
                  An exclusive, distraction-free sanctuary in Morong, Bataan. The perfect intimate venue for strategic planning, executive retreats, and team building (Max: 25 pax).
                </p>
                <div className="flex items-center gap-4 text-teal font-tech text-xs font-bold uppercase tracking-widest bg-teal/5 p-4 rounded-xl border border-teal/10">
                  <MapPin className="w-5 h-5" />
                  Beachfront Development Centre // Morong, Bataan
                </div>
              </div>
              <div className="h-[400px] lg:h-auto relative">
                <img 
                  src="https://picsum.photos/seed/beach-learning/1200/800" 
                  className="w-full h-full object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cream/20 lg:from-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold mb-6 uppercase tracking-tight text-white">The Core Team</h2>
            <p className="text-white/60 font-tech text-sm uppercase tracking-widest font-bold">Seasoned leaders with 30+ years of executive experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member: any, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-cream p-8 rounded-[30px] shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 border border-teal/10 group-hover:border-cyan-accent/50 transition-all flex items-center justify-center bg-teal/5">
                  {member.image ? (
                    <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} />
                  ) : (
                    <Users className="w-8 h-8 text-teal group-hover:text-cyan-accent transition-colors" />
                  )}
                </div>
                <h3 className="text-xl font-display font-bold mb-2 uppercase tracking-tight text-dark">{member.name}</h3>
                <p className="text-dark/60 font-tech text-xs font-bold uppercase tracking-widest leading-relaxed">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Contact */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-cream p-12 rounded-[40px] shadow-xl">
            <h2 className="text-3xl font-display font-bold mb-10 uppercase tracking-tight text-dark">Get in Touch</h2>
            <div className="space-y-6">
              <a href="mailto:contact@etx.ph" className="flex items-center gap-4 text-dark/70 hover:text-dark transition-colors group">
                <Mail className="w-5 h-5 text-teal" />
                <span className="font-tech text-sm font-bold uppercase tracking-widest">contact@etx.ph</span>
              </a>
              <div className="flex items-center gap-4 text-dark/70">
                <Phone className="w-5 h-5 text-teal" />
                <span className="font-tech text-sm font-bold uppercase tracking-widest">+63 9189161033</span>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="https://www.facebook.com/p/ETX-Ph-61575294141295/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-dark/40 hover:text-teal cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/etx-ph" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-dark/40 hover:text-teal cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/etx.ph/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-dark/40 hover:text-teal cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-cream p-12 rounded-[40px] shadow-xl flex flex-col justify-center text-center">
            <p className="text-dark/60 font-tech text-xs font-bold uppercase tracking-widest mb-6">Ready to transform your organization?</p>
            <a 
              href="mailto:contact@etx.ph?subject=Training Quote Request"
              className="apply-button text-white py-6 px-10 rounded-2xl font-tech font-bold uppercase tracking-widest text-base shadow-xl hover:scale-105 active:scale-95 transition-all inline-block"
            >
              Get a Free Training Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
