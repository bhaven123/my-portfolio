import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fullstack React Ecommerce App',
      description: 'Feature-rich eCommerce platform with Stripe, Strapi, Docker, and a modern React front end.',
      technologies: ['React.js', 'Redux', 'Material-UI', 'Stripe', 'Strapi', 'Formik', 'Yup', 'Axios', 'Docker'],
      githubUrl: 'https://github.com/bhaven123/fullstack-ecommerce-app',
      liveUrl: 'https://github.com/bhaven123/fullstack-ecommerce-app'
    },
    {
      title: 'Responsive MERN Social Media App',
      description: 'Scalable social media platform built with the MERN stack and Dockerized for deployment.',
      technologies: ['React.js', 'Redux', 'Express.js', 'MongoDB', 'Material-UI', 'Formik', 'Yup', 'Axios', 'Docker'],
      githubUrl: 'https://github.com/bhaven123/fullstack-socialmedia-mern-app',
      liveUrl: 'https://github.com/bhaven123/fullstack-socialmedia-mern-app'
    },
    {
      title: 'GAN Augmentation',
      description: 'GAN-based video augmentation for human action recognition and medical imaging experiments.',
      technologies: ['Python', 'PyTorch', 'PyTorch Lightning', 'PyTorchVideo'],
      githubUrl: 'https://github.com/bhaven123/Project-GANs',
      liveUrl: 'https://github.com/bhaven123/Project-GANs'
    },
    {
      title: 'Diabetic Retinopathy',
      description: 'Deep learning approach using VGG16 to classify severity of diabetic retinopathy from fundus images.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'HTML', 'CSS', 'AWS EC2'],
      githubUrl: 'https://github.com/bhaven123/Project-Diabetic-Retinopathy',
      liveUrl: 'https://github.com/bhaven123/Project-Diabetic-Retinopathy'
    },
    {
      title: 'Model Deploy Demo',
      description: 'Demo of deploying ML inference as a FastAPI service packaged into a Docker image.',
      technologies: ['Python', 'FastAPI', 'Docker', 'PyTorch'],
      githubUrl: 'https://github.com/bhaven123/model-deploy-demo',
      liveUrl: 'https://github.com/bhaven123/model-deploy-demo'
    },
    {
      title: 'Personal Portfolio',
      description: 'Responsive single-page portfolio built with React and hosted on Firebase (now evolving to Next.js + Vercel).',
      technologies: ['React.js', 'React-Bootstrap', 'HTML', 'CSS', 'Firebase Hosting'],
      githubUrl: 'https://bhaven-naik.com/',
      liveUrl: 'https://bhaven-naik.com/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs text-gray-400 sm:text-sm lg:text-base">
            A selection of things I&apos;ve built recently — from full-stack apps
            and data platforms to deep learning research and deployment demos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-500 hover:shadow-xl lg:p-6"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/bhaven123" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
