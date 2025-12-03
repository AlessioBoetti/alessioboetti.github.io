import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Twitter } from 'lucide-react';

// Main Portfolio Component
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Portfolio Data - USER: EDIT THIS SECTION WITH YOUR INFORMATION
  const portfolioData = {
    name: "Jane Doe",
    title: "Data Scientist | ML Engineer",
    tagline: "Turning data into actionable insights through machine learning and statistical modeling",
    bio: "I'm a data scientist with 5+ years of experience building ML models and analytics solutions. I specialize in NLP, predictive modeling, and deploying production-ready AI systems. Passionate about solving complex problems with data-driven approaches.",
    email: "jane.doe@example.com",
    github: "https://github.com/janedoe",
    linkedin: "https://www.linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe", // Optional - set to null if not needed
    resumeUrl: "/resume.pdf", // Update with your actual resume path
    
    skills: [
      "Python", "PyTorch", "TensorFlow", "scikit-learn", 
      "pandas", "NumPy", "SQL", "PostgreSQL",
      "Docker", "Git", "Jupyter", "MLflow",
      "NLP", "Time Series", "Deep Learning", "A/B Testing"
    ],
    
    projects: [
      {
        id: 1,
        title: "Customer Churn Prediction System",
        summary: "Built an end-to-end ML pipeline to predict customer churn with 87% accuracy. Implemented ensemble methods (XGBoost, Random Forest) and deployed via REST API. Reduced churn by 23% through targeted retention campaigns.",
        technologies: ["Python", "scikit-learn", "XGBoost", "FastAPI", "Docker"],
        github: "https://github.com/janedoe/churn-prediction",
        demo: null,
        image: null,
        details: "Developed a production-ready churn prediction system processing 100K+ customer records daily. Implemented feature engineering pipeline, hyperparameter tuning, and model monitoring. Achieved 87% precision and 82% recall. The model identifies at-risk customers 2 weeks in advance, enabling proactive retention strategies."
      },
      {
        id: 2,
        title: "NLP Sentiment Analysis for Product Reviews",
        summary: "Created a sentiment analysis model using BERT transformers to analyze 2M+ product reviews. Achieved 92% F1-score across 5 sentiment categories. Built interactive dashboard for real-time insights.",
        technologies: ["PyTorch", "Transformers", "BERT", "Streamlit", "pandas"],
        github: "https://github.com/janedoe/sentiment-analysis",
        demo: "https://sentiment-demo.example.com",
        image: null,
        details: "Fine-tuned BERT model on domain-specific product reviews, handling class imbalance through weighted loss functions. Deployed Streamlit dashboard enabling stakeholders to query sentiments by product, timeframe, and rating. Model processes 10K reviews/hour with 92% accuracy."
      },
      {
        id: 3,
        title: "Time Series Forecasting for Inventory Optimization",
        summary: "Developed LSTM-based forecasting models to predict inventory demand across 500+ SKUs. Reduced stockouts by 34% and overstock by 28%. Integrated with existing ERP systems.",
        technologies: ["TensorFlow", "Keras", "Prophet", "SQL", "Airflow"],
        github: "https://github.com/janedoe/inventory-forecasting",
        demo: null,
        image: null,
        details: "Built multi-horizon forecasting system combining LSTM networks with Facebook Prophet for demand prediction. Handled seasonality, promotions, and external factors. Automated daily predictions via Airflow, reducing inventory costs by $1.2M annually."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
            >
              {portfolioData.name.split(' ')[0]}
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'projects', 'skills', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-gray-900 border-b-2 border-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {['home', 'projects', 'skills', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-sm font-medium text-gray-900 hover:text-gray-600 py-2"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {portfolioData.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-600 mb-6">
              {portfolioData.title}
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {portfolioData.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                View Projects
              </button>
              <a
                href={portfolioData.resumeUrl}
                download
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white text-gray-800 font-medium rounded-full border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <div className="text-gray-400 text-center p-4">
                      <div className="text-6xl mb-2">📊</div>
                      <div className="text-sm">Project Screenshot</div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {project.summary}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedProject.title}
              </h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {selectedProject.details}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 fade-in-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Photo */}
            <div className="md:col-span-1">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-6xl font-bold text-gray-600">
                {/* USER: Replace this with <img src="your-photo.jpg" alt="Profile" className="w-48 h-48 rounded-full object-cover" /> */}
                {portfolioData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            
            {/* Bio */}
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {portfolioData.bio}
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 text-lg">Areas of Expertise:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Natural Language Processing & Text Analytics</li>
                  <li>Predictive Modeling & Machine Learning</li>
                  <li>Time Series Forecasting</li>
                  <li>Model Deployment & MLOps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            {portfolioData.twitter && (
              <a
                href={portfolioData.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={32} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="mt-2">Built with ❤️ & GitHub Pages</p>
        </div>
      </footer>

      {/* CSS for animations */}
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-section.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;