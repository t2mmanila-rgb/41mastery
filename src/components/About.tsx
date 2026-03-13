import React from 'react';
import { motion } from 'motion/react';
import joanneImg from '../assets/Joanne Sison.png';
import gretchenImg from '../assets/Gretchen Veran.png';

const TEAM = [
  { name: "Rico Bautista", role: "Chief Executive Officer" },
  { name: "Charmina Lou Bautista", role: "Managing Director" },
  { name: "Joanne Sison", role: "Data Analytics Partner", image: joanneImg },
  { name: "Luis Sison, PhD", role: "AI & Technology Partner" },
  { name: "Xavier Marzan", role: "AI & Digital Transformation Partner" },
  { name: "Robert Newgen", role: "AI & Digital Transformation Partner" },
  { name: "Gretchen Veran", role: "Digital Marketing Partner", image: gretchenImg },
  { name: "Sumeet Ahuja", role: "AI & Product Technology Partner" },
  { name: "Yobel Bautista", role: "Program Specialist" },
  { name: "Niann Pascual", role: "Program Specialist" },
  { name: "Wendy Espino", role: "Digital Marketing Specialist" },
  { name: "Eric Bautista", role: "General Manager, La Adhika" }
];

const PARTNERS = ["Embiggen X", "Get Smarter and Better", "AI CERTs", "Evoque Impact"];

export default function About() {
  return (
    <div className="pt-48 pb-32 px-6 bg-teal">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-cream rounded-[40px] p-12 md:p-20 shadow-2xl mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-teal/5 border border-teal/10 mb-8">
            <Globe className="w-4 h-4 text-teal" />
            <span className="font-tech text-xs font-bold uppercase tracking-[0.3em] text-teal">Our Vision // ASEAN Transformation</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-10 glow-text uppercase text-dark">
            Bridging People <br />
            <span className="text-cyan-accent">& Technology.</span>
          </h1>
          <p className="text-2xl text-dark/80 leading-relaxed max-w-3xl font-bold">
            In a rapidly evolving business landscape, organizations often face a difficult choice: invest in new technology or invest in their people. At ETX Ph, we believe you cannot have one without the other.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bg-cream p-12 rounded-[40px] shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="w-32 h-32 text-teal" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight text-teal">Our Vision</h2>
            <p className="text-xl text-dark/70 font-bold leading-relaxed">
              To enable the holistic transformation of 100 businesses and 100,000 individuals across the ASEAN Region within the next 5 years, shaping future-ready organizations and empowered professionals.
            </p>
          </div>
          <div className="bg-cream p-12 rounded-[40px] shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Zap className="w-32 h-32 text-teal" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6 uppercase tracking-tight text-teal">Our Mission</h2>
            <p className="text-xl text-dark/70 font-bold leading-relaxed">
              To design and deliver specialized programs that blend proven methods with innovative systems, empowering employees, transforming leaders, and driving sustainable growth for organizations.
            </p>
          </div>
        </div>

        {/* La Adhika Section */}
        <div className="mb-32">
          <div className="bg-cream rounded-[40px] shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tighter text-dark">La Adhika</h2>
                <p className="text-2xl text-dark/70 font-bold leading-relaxed mb-8">
                  Our one-of-a-kind beachfront learning center where teams can step away from distractions and truly transform together.
                </p>
                <div className="flex items-center gap-4 text-teal font-tech text-xs font-bold uppercase tracking-widest">
                  <MapPin className="w-5 h-5" />
                  Beachfront Development Centre
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
            <h2 className="text-5xl font-display font-bold mb-6 uppercase tracking-tight text-white">Meet the Team</h2>
            <p className="text-white/60 font-tech text-sm uppercase tracking-widest font-bold">Our network of corporate training experts and AI partners.</p>
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

        {/* Partners & Contact */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-cream p-12 rounded-[40px] shadow-xl">
            <h2 className="text-3xl font-display font-bold mb-10 uppercase tracking-tight text-dark">Network of Excellence</h2>
            <div className="grid grid-cols-2 gap-6">
              {PARTNERS.map((partner, i) => (
                <div key={i} className="flex items-center gap-3 text-dark/70 font-tech text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-teal" />
                  {partner}
                </div>
              ))}
            </div>
          </div>
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
                <Facebook className="w-6 h-6 text-dark/40 hover:text-teal cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-dark/40 hover:text-teal cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-dark/40 hover:text-teal cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
