import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="container-narrow py-16 md:py-24">
        <h1 className="section-title">About Me</h1>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16">
          <div className="prose-content">
            <h2 className="font-serif text-xl font-medium text-foreground mb-4">Background</h2>
            <p>
              I completed my [Degree] in [Field] at [University] (Year-Year), 
              with a focus on [Specialty Area]. My academic journey has taken me 
              through various institutions where I developed expertise in data science, 
              machine learning, and statistical analysis.
            </p>

            <p>
              Prior to my current role, I worked at [Previous Institution/Company] 
              where I [brief description of work]. This experience shaped my approach 
              to combining rigorous methodology with practical applications.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mb-4 mt-8">Current Work</h2>
            <p>
              Currently, I am [your current role] at [Organization], where I focus on 
              [description of current work]. My work involves developing scalable 
              machine learning solutions, conducting statistical analyses, and 
              translating complex findings into actionable insights.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mb-4 mt-8">Skills & Expertise</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-sans text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Programming Languages
                </h3>
                <p className="text-muted-foreground">
                  Python, R, SQL, JavaScript
                </p>
              </div>

              <div>
                <h3 className="font-sans text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Machine Learning & AI
                </h3>
                <p className="text-muted-foreground">
                  TensorFlow, PyTorch, scikit-learn, XGBoost, Hugging Face Transformers
                </p>
              </div>

              <div>
                <h3 className="font-sans text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Data Tools
                </h3>
                <p className="text-muted-foreground">
                  Pandas, NumPy, Spark, Tableau, Power BI, Git
                </p>
              </div>

              <div>
                <h3 className="font-sans text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Cloud Platforms
                </h3>
                <p className="text-muted-foreground">
                  AWS, Google Cloud, Azure
                </p>
              </div>
            </div>

            <h2 className="font-serif text-xl font-medium text-foreground mb-4 mt-8">Beyond Work</h2>
            <p>
              Outside of data science, I enjoy [your hobbies/interests]. I believe in 
              continuous learning and regularly engage with the data science community 
              through [conferences, meetups, online forums, etc.].
            </p>
          </div>

          {/* Secondary Photo */}
          <div className="order-first md:order-last">
            <div className="w-full aspect-square photo-placeholder rounded-sm">
              <span>Photo</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;