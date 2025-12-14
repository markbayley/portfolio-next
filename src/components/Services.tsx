export default function Services() {
  const services = [
    {
      icon: "🔍",
      title: "SEO Ready",
      description: "Designed with the latest search optimisation practices in mind to build your audience.",
    },
    {
      icon: "📱",
      title: "Responsive Layouts",
      description: "We design for mobile ready responsive devices so your users can keep up with you on the go.",
    },
    {
      icon: "⚡",
      title: "Fast Loading",
      description: "Our clean modern coding techniques mean that your application or website will load fast every time.",
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description: "Give your existing website a modern makeover that enhances your brand and builds user confidence.",
    },
    {
      icon: "💻",
      title: "Clean Code",
      description: "When your website is professionally coded the results speak for themselves, fast loading applications.",
    },
    {
      icon: "🛠️",
      title: "Updates & Support",
      description: "Get the right updates and support to keep your online business running as it grows.",
    },
  ];

  const packages = [
    {
      title: "Basic Website",
      description: "Package includes basic HTML/CSS website with responsive design, custom domain name, and one year's free hosting.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Interactive App",
      description: "Package includes all features of the basic features plus more advanced user interaction such as login, registration, user profiles, chat or messaging, and user photo uploading, with React / JavaScript",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Blockchain Dapp",
      description: "Package includes browser detection of MetaMask account, smart contract integration and deployment, and user interface using Solidity and Web3.js",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center text-gray-900 dark:text-white mb-6">
          Services
        </h2>
        <p className="card-text text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          We work closely with you to understand the needs of your business and design a site that works for you.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="card-heading text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="card-text text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <h3 className="section-subheading text-center text-gray-900 dark:text-white mb-12">
          Select A Product
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${pkg.gradient}`}></div>
              <div className="p-8">
                <h4 className="card-heading text-gray-900 dark:text-white mb-4">
                  {pkg.title}
                </h4>
                <p className="card-text text-gray-600 dark:text-gray-400 mb-6">
                  {pkg.description}
                </p>
                <a
                  href="#contact"
                  className="btn-text inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
