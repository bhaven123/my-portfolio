import { User, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const aboutPoints = [
    {
      icon: User,
      title: 'About Me',
      description: 'I am passionate about transforming data into actionable insights and building robust AI solutions. My expertise spans MLOps, Solution Architecture, Data Science, Machine Learning, and Deep Learning.'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'AI Consultant at Lemay (2023). I love solving complex problems and delivering scalable, efficient systems, from end-to-end ML pipelines to cloud-native production deployments.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Master of Applied Computer Science at St. Francis Xavier University (2020–2022).'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            Get to know more about my background, experience, and AI expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutPoints.map((point, index) => (
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <div className="text-gray-600 space-y-3 leading-relaxed">
                {point.description.split('.').map((sentence, index) => (
                  <p key={index} className="text-sm sm:text-base lg:text-lg">
                    {sentence.trim()}.
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-base lg:text-lg">
                  🚀 Let&apos;s connect and collaborate on exciting AI and data science ventures!
                </p>
                <p className="text-base lg:text-lg">
                  I care a lot about clean interfaces, observability, and making research actually shippable.
                </p>
              </div>
            </div>
            <div className="bg-primary-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Focus</h4>
              <ul className="space-y-3 text-gray-600 text-base lg:text-lg">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  MLOps & Solution Architecture
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Data Science & Machine Learning
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Deep Learning Research
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Cloud-native Deployments
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  End-to-end ML Pipelines
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
