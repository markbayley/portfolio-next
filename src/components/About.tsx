export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center text-gray-900 dark:text-white mb-12">
          Why Us?
          <hr className="my-4 text-gray-900 font-thin dark:text-gray-600 w-32 mx-auto"></hr>
            <p className="section-subheading font-thin tracking-wide text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mt-8 mx-auto">
              Professional UX design and web development.
              </p>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="">

            <h3 className="card-heading tracking-wide font-semibold text-gray-900 dark:text-white mb-4">
              Modern Design
            </h3>
            <p className="card-text tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
              Our modern web design practices always ensure fast web page loading and a
              responsive mobile friendly experience for your users.
            </p>
          </div>
           <div className="">

             <h3 className="card-heading tracking-wide font-semibold text-gray-900 dark:text-white mb-4">
              Custom Features
            </h3>
            <p className="card-text tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
              We tailor each website with custom features to meet the aesthetic and functional
              requirements of your audience, creating a better user experience.
            </p>
          </div>
           <div className="">

             <h3 className="card-heading tracking-wide font-semibold text-gray-900 dark:text-white mb-4">
              100% Responsive Layout
            </h3>
           <p className="card-text tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
              Our websites are built with responsive layouts and mobile ready customers and
              users in mind, so you can attract a larger audience.
            </p>
          </div>
           <div className="">

             <h3 className="card-heading tracking-wide font-semibold text-gray-900 dark:text-white mb-4">
              Clean Modern Code
            </h3>
           <p className="card-text tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
              Developed with clean modern web design coding practices, you can be confident
              that your application will perform well on any device.
            </p>
          </div>
           <div className="">

             <h3 className="card-heading tracking-wide font-semibold text-gray-900 dark:text-white mb-4">
              Search Optimised
            </h3>
            <p className="card-text tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
              Designed with the latest search optimisation practices in mind to build your
              audience, and keep your business growing into the future.
            </p>
          </div>
          <div className="">

             <h3 className="card-heading tracking-wide font-semibold text-gray-900 dark:text-white mb-4">
              Updates & Support
            </h3>
            <p className="card-text tracking-wide text-gray-600 dark:text-gray-300 leading-relaxed">
              We offer ongoing support to ensure that your website or business can keep up
              and running and responding to changing customer needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
