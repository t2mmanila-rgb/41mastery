import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS, calculateScores, getRecommendation } from '../lib/test-data';
import { ChevronRight, ChevronLeft, AlertCircle, Brain, Zap, Target, ShieldCheck, Sparkles } from 'lucide-react';

interface AITestProps {
  onComplete: (scores: any, recommendation: any) => void;
}

export default function AITest({ onComplete }: AITestProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleAnswer = (score: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: score }));
    
    if (currentStep < QUESTIONS.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      const finalScores = calculateScores({ ...answers, [currentQuestion.id]: score });
      const recommendation = getRecommendation(finalScores);
      onComplete(finalScores, recommendation);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Concern': return <AlertCircle className="w-5 h-5 text-sky-400" />;
      case 'Preparedness': return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case 'Exposure': return <Zap className="w-5 h-5 text-sky-400" />;
      case 'Barriers': return <Target className="w-5 h-5 text-sky-400" />;
      default: return <Brain className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="mb-16">
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-center gap-3">
            {getCategoryIcon(currentQuestion.category)}
            <span className="font-tech font-bold uppercase tracking-[0.2em] text-cyan-accent text-xs">
              Phase: {currentQuestion.category}
            </span>
          </div>
          <span className="font-tech text-xs text-dark/40 font-bold uppercase tracking-widest">
            {currentStep + 1} // {QUESTIONS.length}
          </span>
        </div>
        <div className="h-1 w-full bg-teal/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-cyan-accent shadow-[0_0_10px_rgba(41,197,246,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-cream rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Brain className="w-32 h-32 text-teal" />
          </div>

          <h2 className="font-tech text-2xl md:text-4xl font-bold text-dark mb-12 leading-tight uppercase tracking-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleAnswer(option.score)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 flex items-center justify-between group
                  ${answers[currentQuestion.id] === option.score 
                    ? 'border-cyan-accent bg-cyan-accent/10 text-dark' 
                    : 'border-teal/10 bg-teal/5 hover:border-teal/20 hover:bg-teal/10 text-dark/60'
                  }`}
              >
                <span className="font-tech text-lg font-bold uppercase tracking-wide">{option.text}</span>
                <ChevronRight className={`w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 ${answers[currentQuestion.id] === option.score ? 'text-cyan-accent' : 'text-dark/20'}`} />
              </motion.button>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 font-tech text-xs font-bold uppercase tracking-widest transition-colors
                ${currentStep === 0 ? 'text-dark/10 cursor-not-allowed' : 'text-dark/40 hover:text-cyan-accent'}`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            
            <div className="flex items-center gap-3 text-dark/20">
              <Sparkles className="w-4 h-4" />
              <span className="font-tech text-[10px] font-bold uppercase tracking-[0.3em]">AI Mastery Protocol</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Contextual Tip */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 p-8 bg-cream rounded-[40px] shadow-xl flex gap-6 items-start"
      >
        <div className="p-3 bg-cyan-accent/10 rounded-xl border border-cyan-accent/20">
          <Zap className="w-5 h-5 text-cyan-accent" />
        </div>
        <div>
          <p className="font-tech text-sm text-dark/60 leading-relaxed uppercase tracking-wide font-bold">
            <span className="text-cyan-accent font-bold">System Note:</span> Your response helps us calibrate your unique psychological relationship with automation, allowing for a more precise career roadmap.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
