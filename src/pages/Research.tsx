import Layout from "@/components/Layout";
import { FileText, Github, ExternalLink } from "lucide-react";

interface PublicationProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links?: {
    paper?: string;
    code?: string;
    project?: string;
  };
  image?: boolean;
}

const Publication = ({ title, authors, venue, year, links, image }: PublicationProps) => {
  return (
    <div className="grid md:grid-cols-[180px_1fr] gap-6 pb-8 border-b border-border/50 last:border-0">
      {image && (
        <div className="w-full h-32 photo-placeholder rounded-sm">
          <span className="text-xs">Figure</span>
        </div>
      )}
      {!image && <div className="hidden md:block" />}
      
      <div>
        <h3 className="font-serif text-lg font-medium text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          {authors}
        </p>
        <p className="text-sm text-muted-foreground italic mb-3">
          {venue}, {year}
        </p>
        
        {links && (
          <div className="flex items-center gap-4">
            {links.paper && (
              <a 
                href={links.paper} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm link"
              >
                <FileText size={14} />
                Paper
              </a>
            )}
            {links.code && (
              <a 
                href={links.code} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm link"
              >
                <Github size={14} />
                Code
              </a>
            )}
            {links.project && (
              <a 
                href={links.project} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm link"
              >
                <ExternalLink size={14} />
                Project
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Research = () => {
  const publications: PublicationProps[] = [
    {
      title: "Example Publication Title: A Machine Learning Approach to Problem X",
      authors: "Your Name, Co-Author A, Co-Author B",
      venue: "Conference on Machine Learning (ICML)",
      year: "2024",
      links: {
        paper: "#",
        code: "#",
      },
      image: true,
    },
    {
      title: "Understanding Patterns in Large-Scale Data: Methods and Applications",
      authors: "Co-Author A, Your Name, Co-Author C",
      venue: "Journal of Data Science",
      year: "2023",
      links: {
        paper: "#",
        project: "#",
      },
      image: true,
    },
    {
      title: "Causal Inference in Observational Studies: A Practical Framework",
      authors: "Your Name, Co-Author D",
      venue: "Statistics in Medicine",
      year: "2023",
      links: {
        paper: "#",
      },
      image: true,
    },
  ];

  return (
    <Layout>
      <section className="container-narrow py-16 md:py-24">
        <h1 className="section-title">Research</h1>

        <div className="prose-content mb-12">
          <p>
            My research focuses on developing and applying data science methods to 
            solve real-world problems. I'm particularly interested in machine learning, 
            causal inference, and natural language processing.
          </p>
        </div>

        <h2 className="font-serif text-xl font-medium text-foreground mb-8">
          Selected Publications
        </h2>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <Publication key={index} {...pub} />
          ))}
        </div>

        <h2 className="font-serif text-xl font-medium text-foreground mb-8 mt-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-border rounded-sm">
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">
              Project Name
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Brief description of the project and its impact. This could include 
              the problem solved, methods used, and key outcomes.
            </p>
            <a href="#" className="text-sm link inline-flex items-center gap-1.5">
              <Github size={14} />
              View on GitHub
            </a>
          </div>

          <div className="p-6 border border-border rounded-sm">
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">
              Another Project
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Description of another significant project. Highlight the technical 
              challenges and innovative solutions.
            </p>
            <a href="#" className="text-sm link inline-flex items-center gap-1.5">
              <ExternalLink size={14} />
              View Project
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;