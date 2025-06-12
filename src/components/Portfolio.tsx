
const Portfolio = () => {
  const projects = [
    {
      title: 'PDCA Consulting',
      description: 'Custom WordPress site for ITIL/PRINCE2 training with SEO optimization and integrated booking system.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format',
      tags: ['WordPress', 'SEO', 'Booking System'],
      link: '#'
    },
    {
      title: 'PASDZIOR',
      description: 'UK construction business website with clean design, responsive layout using Elementor and JavaScript enhancements.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=entropy&auto=format',
      tags: ['WordPress', 'Elementor', 'JavaScript'],
      link: '#'
    },
    {
      title: 'WMS IT',
      description: 'Australian IT services provider with professional layout and clear service presentation.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=entropy&auto=format',
      tags: ['WordPress', 'Professional Design', 'IT Services'],
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of successful projects that demonstrate my expertise and commitment to quality
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-scale-in glass-effect rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                 style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300"
                >
                  View Project
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
