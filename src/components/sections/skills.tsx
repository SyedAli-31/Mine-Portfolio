'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const frontendSkills: Skill[] = [
  { name: 'React.js', percentage: 95 },
  { name: 'TypeScript', percentage: 90 },
  { name: 'Next.js', percentage: 88 },
  { name: 'Tailwind CSS', percentage: 92 },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', percentage: 93 },
  { name: 'Python', percentage: 85 },
  { name: 'PostgreSQL', percentage: 87 },
  { name: 'AWS', percentage: 80 },
];

type SkillBarProps = {
  skill: Skill;
  delay?: number;
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [skill.percentage, delay]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-[#3B82F6]">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-[#1E293B] rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#F59E0B]"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 2, delay: delay / 1000 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-[#3B82F6]">Skills</span>
          </h2>
          <p className="text-xl text-[#E2E8F0]/80 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-[#F59E0B]">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-[#F59E0B]">
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={index * 200 + 800}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
