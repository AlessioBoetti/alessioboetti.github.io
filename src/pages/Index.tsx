import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="container-narrow py-16 md:py-24">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          {/* Profile Photo */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/profile.jpg" 
              alt="Alessio Boetti" 
              className="w-64 h-80 object-cover rounded-sm"
            />
            
            {/* Social Links Below Photo */}
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <a href="https://www.linkedin.com/in/alessio-boetti/" target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </a>
              <span>·</span>
              <a href="https://github.com/AlessioBoetti" target="_blank" rel="noopener noreferrer" className="link">
                GitHub
              </a>
              {/* <span>·</span>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="link">
                Blog
              </a> */}
            </div>
          </div>

          {/* Introduction */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-foreground">
              Alessio Boetti
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Data Scientist & Researcher
            </p>

            <div className="prose-content space-y-4">
              <p>
                Welcome! I'm a data scientist passionate about leveraging machine learning 
                and statistical methods to solve complex problems. My work spans 
                predictive modeling, natural language processing, and data visualization.
              </p>
              
              <p>
                Currently, I focus on developing data-driven solutions that create 
                meaningful impact. I hold a Ph.D./M.S. in [Your Field] from [Your University], 
                where I specialized in [Your Specialty].
              </p>

              <p>
                My research interests include:
              </p>

              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Machine Learning & Deep Learning</li>
                <li>Natural Language Processing</li>
                <li>Causal Inference & Experimental Design</li>
                <li>Data Visualization & Communication</li>
              </ul>

              <p>
                Feel free to explore my <Link to="/research" className="link">research</Link> and{" "}
                <Link to="/about" className="link">learn more about me</Link>. 
                You can also download my <Link to="/cv" className="link">CV</Link> or 
                reach out via <a href="mailto:alessio.boetti@gmail.com" className="link">email</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="container-narrow pb-16">
        <h2 className="section-title">News</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground whitespace-nowrap min-w-[100px]">
              Dec 2024
            </span>
            <p className="text-foreground">
              Started a new position as [Your Role] at [Company/Institution].
            </p>
          </div>
          
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground whitespace-nowrap min-w-[100px]">
              Nov 2024
            </span>
            <p className="text-foreground">
              Published a new paper on [Topic] in [Journal/Conference].
            </p>
          </div>
          
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground whitespace-nowrap min-w-[100px]">
              Oct 2024
            </span>
            <p className="text-foreground">
              Presented at [Conference Name] on [Topic].
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;