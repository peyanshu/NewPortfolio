shuimport React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Canvas3D from '../components/Canvas3D';
import Typed from 'typed.js';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Backend-Developer", "3D Artist", "Frontend Developer","UI/UX Designer"]
       , typeSpeed: 100,
        backSpeed: 25,
        backDelay: 1000,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-220%',
      transition: {
        repeat: Infinity,
        duration: 10,
        repeatType: "mirror",
      },
    },
  };

  
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div 
          className="absolute inset-0 z-10"
          style={{
            opacity: 1 - Math.min(scrollY / 500, 1),
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Canvas3D 
            modelPath="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"
            scale={0.5}
            position={[0, -1, 0]}
            environmentPreset="night"
          

            
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Hi, I'm Peyanshu</span>
              <span 
              ref={typedRef} 
              className="text-blue-500"></span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              3D Artist & Frontend Developer
            </motion.h2>
            
            <motion.div
              className="flex justify-center space-x-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
              <script>
                window.location.href = "mailto:peyanshu.verma.10@gmail.com";
              </script>
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="#about"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Scroll Down
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      className="absolute z-[0] select-none bottom-[-50px] text-[45vh] whitespace-nowrap font-light text-white/5 uppercase tracking-[-15px] w-1/2 "

      >
        Full-Stack Developer Full-Stack Developer
      </motion.div>
      </section>
      
      {/* About Preview Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm a passionate 3D artist and frontend developer with expertise in creating immersive digital experiences.
              I combine technical skills with creative vision to build engaging web applications and 3D visualizations.
            </p>
            <a 
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Check out some of my recent work combining 3D visualization with web development.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project {index}</h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of this amazing project and the technologies used.
                  </p>
                  <a 
                    href="/projects"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-300 text-lg mb-8">
              Have a project in mind? I'm available for freelance work and collaborations.
              Let's create something amazing together!
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-black text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Peyanshu verma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
