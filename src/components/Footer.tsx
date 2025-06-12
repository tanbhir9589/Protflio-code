
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Tanbhir Ahmed Tonu. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Building the future, one website at a time.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:tanbhir9589.pen@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/tanbhir-ahmed-tonu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
