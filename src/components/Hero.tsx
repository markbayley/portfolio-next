export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="hero-heading text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-amber-300 via-teal-400 to-teal-600 bg-clip-text text-transparent">
              INBLOCK
            </span>
           
          </h1>
           <p className="hero-subheading font-semibold text-gray-800 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            AI Integration | Web3 | UX Design
          </p>
          <p className="hero-subheading text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Professional UX design and web development. We create modern, responsive applications
            with clean code and custom features tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
               className="btn-text px-8 py-3 border-2 border-amber-400 dark:border-amber-400 text-gray-800 dark:text-white rounded-md hover:bg-amber-400 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-800 transition-colors font-medium"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="btn-text px-8 py-3 border-2 border-teal-400 dark:border-teal-400 text-gray-800 dark:text-white rounded-md hover:bg-teal-400 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-800 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
