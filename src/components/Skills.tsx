
const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'PHP', level: 88 },
    { name: 'WordPress', level: 95 },
    { name: 'SEO', level: 80 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="animate-scale-in glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'WordPress Development',
              'Custom Themes',
              'Plugin Development',
              'Website Optimization',
              'Responsive Design',
              'SEO Implementation',
              'API Integration',
              'E-commerce Solutions'
            ].map((tech, index) => (
              <div key={tech} className="animate-fade-in glass-effect p-4 rounded-lg hover:border-primary/50 transition-all duration-300"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-sm font-medium text-center">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
