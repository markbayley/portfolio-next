import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  const projects = projectsData;

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading font-medium text-gray-900 dark:text-white mb-12">
          Portfolio
           <hr className="my-4 text-gray-900 dark:text-gray-600 w-32"></hr>
            <p className="section-subheading text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mt-8">Click on any of the images below to view examples of our work.</p>
        </h2>
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/project/${project.slug}`}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer block"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="card-heading text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="card-text tracking-wider text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 border-2 dark:border-2 border-teal-400 dark:border-teal-400 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-amber-400 dark:text-amber-400 hover:underline font-medium">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
