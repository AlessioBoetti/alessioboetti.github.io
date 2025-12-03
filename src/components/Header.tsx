import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container-narrow py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="font-serif text-xl font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            Alessio Boetti
          </NavLink>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
            <NavLink 
              to="/research" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Research
            </NavLink>
            <NavLink 
              to="/cv" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              CV
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/alessio-boetti/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/AlessioBoetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="alessio.boetti@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center gap-6 pt-4 border-t border-border/30 mt-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/research" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Research
          </NavLink>
          <NavLink 
            to="/cv" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            CV
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;