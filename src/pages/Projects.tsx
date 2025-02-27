import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: '3D Product Configurator',
      description: 'Interactive 3D product configurator allowing users to customize and visualize products in real-time.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'TypeScript'],
      category: '3d',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Immersive Portfolio',
      description: 'A portfolio website with interactive 3D elements and animations to showcase creative work.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
      category: '3d',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce platform with product listings, cart functionality, and checkout process.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      category: 'web',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Virtual Reality Gallery',
      description: 'VR-compatible web experience showcasing 3D artwork in an interactive virtual gallery.',
      image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['WebXR', 'Three.js', 'React', 'A-Frame'],
      category: '3d',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 5,
      title: 'Weather Visualization App',
      description: 'Interactive weather application with 3D visualizations of weather patterns and forecasts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'D3.js', 'Three.js', 'Weather API'],
      category: 'data',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 6,
      title: 'Task Management Dashboard',
      description: 'Comprehensive task management system with drag-and-drop interface and data visualization.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Redux', 'Firebase', 'Chart.js'],
      category: 'web',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my work spanning 3D web experiences, interactive applications, and creative coding projects.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', '3d', 'web', 'data'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;