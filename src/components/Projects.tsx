import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "#",
      image: "/projectimages/shopping.png",
    },
    {
      title: "Dashboard Analytics",
      description: "Comprehensive analytics dashboard with real-time data visualization and insights.",
      tags: ["React", "Node.js", "MongoDB", "Charts.js"],
      link: "#",
      image: "/projectimages/dashboard.png",
    },
    {
      title: "Airbnb Clone",
      description: "Full-stack accommodation booking platform with advanced search and filters.",
      tags: ["React", "Express", "PostgreSQL"],
      link: "#",
      image: "/projectimages/airbnbratio.png",
    },
    {
      title: "Let's Social Platform",
      description: "Social networking application with real-time messaging and content sharing.",
      tags: ["Next.js", "Socket.io", "Redis"],
      link: "#",
      image: "/projectimages/letssratio.png",
    },
    {
      title: "Tern Application",
      description: "Modern web application with sleek UI and seamless user experience.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
      image: "/projectimages/ternratio.png",
    },
    {
      title: "Anime Gallery",
      description: "Interactive anime gallery with search, filters, and detailed character information.",
      tags: ["Next.js", "API Integration", "Tailwind CSS"],
      link: "#",
      image: "/projectimages/animegirl.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
