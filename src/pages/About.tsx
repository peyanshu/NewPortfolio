import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import SkillSphere from '../components/SkillSphere';

const About = () => {
  const skills = [
    'React', 'Three.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
    'Tailwind', 'Blender', 'WebGL', 'Node.js', 'Git', 'Figma',
    'GLSL', 'React Three Fiber', 'Next.js', 'Framer Motion'
  ];

  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'Tech Innovations Inc.',
      period: '2025 - Present',
      description: 'Leading the development of interactive 3D web experiences using Three.js and React.'
    },
    
    {
      title: 'Full stack Developer',
      company: 'Patch Line',
      period: '2024 - 2025',
      description: 'Developed responsive websites and web applications using modern JavaScript frameworks.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'oirntal institute of science and technology',
      year: '2021 - 2025',
      description: 'Computer science artifical intelligent and machine learning'
    },
    {
      degree: 'Schooling',
      institution: 'Sri sankara vidyalaya',
      year: '2020 - 2021',
      description: 'PCM'
    },
    {
      degree: 'Schooling',
      institution: 'Sri sankara vidyalaya',
      year: '2018 - 2019',
     
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a creative developer passionate about building immersive digital experiences
            at the intersection of design and technology.
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-blue-500 pb-2 inline-block">
              My Journey
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                With over 0.5 years of experience in web development and 3D design, I've dedicated my career to creating
                engaging digital experiences that blend technical excellence with artistic vision.
              </p>
              <p>
                My journey began as a traditional web developer, but I quickly became fascinated with the possibilities
                of 3D on the web. This led me to specialize in WebGL technologies, particularly Three.js and React Three Fiber.
              </p>
              <p>
                I believe in pushing the boundaries of what's possible on the web, creating experiences that are not only
                visually stunning but also performant and accessible.
              </p>
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-[400px] bg-gray-900 rounded-lg overflow-hidden"
          >
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <SkillSphere skills={skills} />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-blue-500 pb-2 inline-block">
            <Briefcase className="inline-block mr-2 mb-1" />
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-blue-400">{exp.period}</span>
                </div>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-blue-500 pb-2 inline-block">
            <GraduationCap className="inline-block mr-2 mb-1" />
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-blue-400">{edu.year}</span>
                </div>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-blue-500 pb-2 inline-block">
            <Award className="inline-block mr-2 mb-1" />
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-blue-900/30 transition-colors"
              >
                <span className="text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
