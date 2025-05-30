import React, { useState, useEffect } from 'react';
import { X, Github, Linkedin, ExternalLink, Calendar, Code, Server, Database, Cloud, Palette, Settings, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import MyPicture from './assets/me.jpg'; 

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const technologyCategories = {
    'Frontend': {
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-purple-600',
      technologies: [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Vite', logo: 'https://vitejs.dev/logo.svg' }
      ]
    },
    'Backend & Databases': {
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      technologies: [
        { name: 'ExpressJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'NGINX', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' }
      ]
    },
    'Programming Languages': {
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      technologies: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
        { name: 'PyQt5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg' }
      ]
    },
    'DevOps & Tools': {
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      technologies: [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Docker Compose', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'NPM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
      ]
    },
    'Cloud Services': {
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-600',
      technologies: [
        { name: 'AWS EC2', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'AWS ELB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'AWS S3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Google Cloud VM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'DigitalOcean', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' }
      ]
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Krypto',
      description: 'Secure account manager created in Python, PyQt5, and Firebase',
      fullDescription: 'A comprehensive password and account management application built with modern security practices. Features encrypted storage, secure authentication, and a clean PyQt5 interface with real-time synchronization across devices.',
      images: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop'
      ],
      date: '2024',
      technologies: ['Python', 'PyQt5', 'Firebase', 'Encryption', 'SQLite'],
      github: 'https://github.com/exdarku/krypto',
      demo: null,
      gradient: 'from-cyan-400 via-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Aidvocate',
      description: 'A platform for easy and secured engagement with charities and NGOs',
      fullDescription: 'A full-stack web platform connecting donors with verified charitable organizations. Features secure payment processing, real-time donation tracking, comprehensive charity verification systems, and impact analytics dashboard.',
      images: [
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=600&fit=crop'
      ],
      date: '2023',
      technologies: ['React', 'Node.js', 'MySQL', 'Express.js', 'TailwindCSS', 'Stripe API'],
      github: 'https://github.com/exdarku/aidvocate',
      demo: 'https://aidvocate.com',
      gradient: 'from-purple-500 via-pink-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Project OCP',
      description: 'An internship platform for Mapua Malayan Colleges of Mindanao',
      fullDescription: 'A comprehensive internship management system designed specifically for academic institutions. Features student-company matching algorithms, application tracking, performance monitoring, and automated reporting systems for coordinators.',
      images: [
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop'
      ],
      date: '2024',
      technologies: ['React', 'Express.js', 'MySQL', 'Docker', 'AWS', 'Redis'],
      github: 'https://github.com/exdarku/project-ocp',
      demo: null,
      gradient: 'from-yellow-400 via-orange-500 to-yellow-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'technologies', 'about-me'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ProjectModal = ({ project, onClose }) => {
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const nextImage = () => {
      setModalImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setModalImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Image Gallery */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-t-xl">
              <img 
                src={project.images[modalImageIndex]} 
                alt={`${project.title} - Image ${modalImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-white transition-all duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 text-white transition-all duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              
              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === modalImageIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all z-10"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            
            <div className="flex items-center gap-4 mb-4 text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{project.images.length} image{project.images.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">{project.fullDescription}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Code size={18} />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-950 bg-opacity-95 backdrop-blur-sm z-40 border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'projects', label: 'Projects' },
              { id: 'technologies', label: 'Technologies' },
              { id: 'about-me', label: 'About Me' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-bold hover:text-lime-400 transition-colors duration-300 ${
                    activeSection === item.id ? 'text-lime-400' : 'text-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="text-center lg:text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Laurence Lesmoras
              </h1>
              <h2 className="text-lg md:text-xl mb-6 text-gray-300">
                Chief Executive Officer at <strong className="font-bold text-white">MMDSC</strong>
              </h2>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Bringing business ideas to life. Empowering students 
                and developers through an open, collaborative community.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
                <img 
                  src={MyPicture}
                  alt="Laurence Lesmoras" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:text-left">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className="group relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-r ${project.gradient} animate-pulse"></div>
                </div>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden h-full group-hover:bg-gray-750 transition-colors duration-300">
                  {/* Image Showcase */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Image Count Badge */}
                    {project.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <span>{project.images.length}</span>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-medium group-hover:bg-gray-600 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        Click to view details
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:text-left">
            Technologies & Skills
          </h2>
          
          <div className="space-y-12">
            {Object.entries(technologyCategories).map(([category, data]) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} shadow-lg`}>
                    {data.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {data.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${data.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm`}></div>
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                          <img 
                            src={tech.logo} 
                            alt={tech.name}
                            className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg hidden items-center justify-center">
                            <Terminal className="w-6 h-6 text-gray-300" />
                          </div>
                        </div>
                        
                        <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:translate-y-1">
                          {tech.name}
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-xl transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
            About Me
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Hi, I'm Laurence Lesmoras, a passionate <strong className="text-white font-bold">full-stack developer</strong> and <strong className="text-white font-bold">Computer Science student</strong> with expertise in <strong className="text-white font-bold">Node.js, Express.js, MySQL, HTML, CSS, and JavaScript.</strong> I specialize in building efficient, scalable web applications and backend systems.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm the <strong className="text-white font-bold">Chief Executive Officer (CEO)</strong> of <strong className="text-white font-bold"><a href="https://www.linkedin.com/company/105596484" className="text-cyan-400 hover:text-cyan-300 transition-colors no-underline">Mapúa Malayan Developer Student Club (MMDSC)</a></strong>, where I lead initiatives to empower student developers through hands-on projects and collaborations. Additionally, I'm the <strong className="text-white font-bold">External Vice President</strong> of the <strong className="text-white font-bold"><a href="https://www.facebook.com/profile.php?id=61569684638599" className="text-cyan-400 hover:text-cyan-300 transition-colors no-underline">Coding Organization for Digital Excellence.</a></strong>
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Beyond coding, I'm the bassist for Sorbetes, an OPM/Indie band, and a <strong className="text-white font-bold">Samsung Galaxy Ambassador</strong>, creating content that showcases cutting-edge tech.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I'm always eager to explore new challenges, contribute to open-source projects, and develop impactful software solutions. Let's connect and build something great!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
              Let's Connect!
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://github.com/exdarku"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group"
              >
                <Github size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/laurencelesmoras"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group"
              >
                <Linkedin size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;