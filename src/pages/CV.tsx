import Layout from "@/components/Layout";
import { Download } from "lucide-react";

const CV = () => {
  return (
    <Layout>
      <section className="container-narrow py-16 md:py-24">
        <div className="flex items-center justify-between mb-12">
          <h1 className="section-title mb-0">Curriculum Vitae</h1>
          <a 
            href="/cv.pdf" 
            download
            className="inline-flex items-center gap-2 text-sm link"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="font-sans text-sm font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
            Education
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2019 - 2024</span>
              <div>
                <h3 className="font-medium text-foreground">Ph.D. in Data Science</h3>
                <p className="text-muted-foreground">University Name</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Dissertation: "Title of Your Dissertation"
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2017 - 2019</span>
              <div>
                <h3 className="font-medium text-foreground">M.S. in Statistics</h3>
                <p className="text-muted-foreground">Another University</p>
              </div>
            </div>

            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2013 - 2017</span>
              <div>
                <h3 className="font-medium text-foreground">B.S. in Computer Science</h3>
                <p className="text-muted-foreground">Yet Another University</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="font-sans text-sm font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
            Experience
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2024 - Present</span>
              <div>
                <h3 className="font-medium text-foreground">Senior Data Scientist</h3>
                <p className="text-muted-foreground">Company Name</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Leading machine learning initiatives and developing predictive models.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2019 - 2024</span>
              <div>
                <h3 className="font-medium text-foreground">Research Assistant</h3>
                <p className="text-muted-foreground">University Lab</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Conducted research on causal inference methods for observational data.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">Summer 2022</span>
              <div>
                <h3 className="font-medium text-foreground">Data Science Intern</h3>
                <p className="text-muted-foreground">Tech Company</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Developed NLP models for customer feedback analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="mb-12">
          <h2 className="font-sans text-sm font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
            Selected Publications
          </h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-foreground">
                <span className="font-medium">Your Name</span>, Co-Author A, Co-Author B. (2024). 
                "Example Publication Title." <span className="italic">Journal Name</span>.
              </p>
            </div>
            <div>
              <p className="text-foreground">
                Co-Author A, <span className="font-medium">Your Name</span>. (2023). 
                "Another Publication." <span className="italic">Conference Proceedings</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-12">
          <h2 className="font-sans text-sm font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
            Awards & Honors
          </h2>
          
          <div className="space-y-4">
            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2024</span>
              <p className="text-foreground">Best Paper Award, Conference Name</p>
            </div>
            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2023</span>
              <p className="text-foreground">Graduate Fellowship, Foundation Name</p>
            </div>
            <div className="grid md:grid-cols-[140px_1fr] gap-2">
              <span className="text-sm text-muted-foreground">2022</span>
              <p className="text-foreground">Research Grant, Funding Agency</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="font-sans text-sm font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
            Technical Skills
          </h2>
          
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-foreground">Languages: </span>
              <span className="text-muted-foreground">Python, R, SQL, JavaScript</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">ML/AI: </span>
              <span className="text-muted-foreground">TensorFlow, PyTorch, scikit-learn, Hugging Face</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Tools: </span>
              <span className="text-muted-foreground">Git, Docker, AWS, Spark, Tableau</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CV;