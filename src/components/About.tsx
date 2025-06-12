
const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            {/* Profile Picture Placeholder */}
            <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center text-8xl font-bold text-foreground">
                T
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up space-y-6">
            <div className="text-lg leading-relaxed text-muted-foreground">
              <p className="mb-6">
                I am a <span className="text-primary font-semibold">Web Developer</span> with a BSc in Computer Science and Engineering from Daffodil International University (2021). I specialize in creating fast, mobile-friendly, SEO-optimized WordPress websites tailored to business goals.
              </p>
              
              <p className="mb-6">
                Currently working at <span className="text-secondary font-semibold">Excel-Engine</span>, I handle diverse projects ranging from custom WordPress theme development to complete website optimization. My passion lies in building reliable, attractive sites that not only look great but perform exceptionally well.
              </p>
              
              <p className="mb-8">
                I believe in clean code, effective communication, and delivering solutions that exceed client expectations. Every project is an opportunity to create something meaningful that drives business success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect p-6 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Experience</h4>
                <p className="text-muted-foreground">3+ Years</p>
              </div>
              
              <div className="glass-effect p-6 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">Projects</h4>
                <p className="text-muted-foreground">50+ Completed</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
