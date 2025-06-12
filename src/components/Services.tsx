
const Services = () => {
  const services = [
    {
      title: 'Custom WordPress Development',
      description: 'Custom themes and plugins tailored to your specific business needs and branding requirements.',
      icon: '🎨'
    },
    {
      title: 'Website Optimization',
      description: 'Performance optimization, speed enhancement, and SEO improvements for maximum visibility.',
      icon: '⚡'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first design approach ensuring perfect display across all devices and screen sizes.',
      icon: '📱'
    },
    {
      title: 'Bug Fixing & Security',
      description: 'Comprehensive bug fixes, security improvements, and ongoing maintenance services.',
      icon: '🔒'
    },
    {
      title: 'SEO Implementation',
      description: 'Search engine optimization strategies to improve your website\'s visibility and ranking.',
      icon: '🚀'
    },
    {
      title: 'API & E-commerce',
      description: 'Third-party integrations, API connections, and complete e-commerce solutions.',
      icon: '🛒'
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions to elevate your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-scale-in glass-effect p-8 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need a <span className="gradient-text">fast, modern website</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's build it together and create something amazing for your business.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
