import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { experienceData } from '@/data/experience';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const exp = experienceData.find(e => e.id === Number(id));

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('scrollbar-hide');
    return () => {
      root.classList.remove('scrollbar-hide');
    };
  }, []);

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Not Found</h2>
          <button onClick={() => navigate('/#experience')} className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">Back to Experience</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent relative overflow-x-hidden">
      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${exp.gradient} opacity-10 blur-3xl rounded-full`} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br opacity-5 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={() => navigate('/#experience')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
          <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Experience</span>
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${exp.gradient} text-white mb-4`}>{exp.company}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 break-words">{exp.role}</h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <FiCalendar className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">{exp.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm">
              <FiMapPin className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium">{exp.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-primary">Key Responsibilities & Achievements</h2>
          <div className="space-y-4">
            {exp.responsibilities.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-colors card-3d premium-glass-3d hover-3d-lift float-3d preserve-3d">
                <div className="mt-0.5 p-1 rounded-full bg-primary/10 text-primary shrink-0"><FiCheckCircle className="w-5 h-5" /></div>
                <p className="text-muted-foreground leading-relaxed text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceDetail;