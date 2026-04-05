import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/bhaven123', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/bhaven-naik', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:naikbhaven11@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, my name is <span className="gradient-text">Bhaven Naik</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            I&apos;m an 🤖 Artificial Intelligence Consultant at <span className="text-primary-600">Lemay.ai</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            🌟 I help teams turn data and machine learning into real, production-grade products. From MLOps and solution architecture to deep learning research, I love building AI systems that actually ship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/Bhaven_Naik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <Download size={20} className="mr-2" />
              View Resume
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="animate-bounce">
            <a 
              href="#about"
              className="inline-flex items-center text-gray-400 hover:text-primary-600 transition-colors duration-200"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={32} className="mr-2" />
              Scroll Down
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
