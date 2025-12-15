"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { projectsData, uxProjects, gameProjects } from "@/data/projectsData";

type TabType = "apps" | "ux" | "games";

export default function Projects() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab') as TabType | null;
  const [activeTab, setActiveTab] = useState<TabType>(tabParam || "apps");
  
  useEffect(() => {
    if (tabParam && (tabParam === 'apps' || tabParam === 'ux' || tabParam === 'games')) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const projects = projectsData;

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading font-medium text-gray-900 dark:text-white mb-12">
          Portfolio
           <hr className="my-4 text-gray-900 dark:text-gray-600 w-32"></hr>
            <p className="section-subheading text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mt-8">Click on any of the images below to view examples of our work.</p>
        </h2>

        {/* Tab Menu */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("apps")}
            className={`px-6 py-3 rounded-lg cursor-pointer font-medium transition-all ${
              activeTab === "apps"
                ? "bg-teal-400 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setActiveTab("ux")}
            className={`px-6 py-3 rounded-lg cursor-pointer font-medium transition-all ${
              activeTab === "ux"
                ? "bg-teal-400 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Apps
          </button>
          <button
            onClick={() => setActiveTab("games")}
            className={`px-6 py-3 rounded-lg cursor-pointer font-medium transition-all ${
              activeTab === "games"
                ? "bg-teal-400 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Games
          </button>
        </div>
      
        {/* Apps Tab */}
        {activeTab === "apps" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/project/${project.slug}?from=apps`}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer block"
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
        )}

        {/* UX Projects Tab */}
        {activeTab === "ux" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uxProjects.map((project, index) => (
              <Link
                key={index}
                href={`/project/${project.slug}?from=ux`}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer block"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.images[0]}
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
                        className="px-3 py-1 border-2 border-teal-400 text-gray-800 dark:text-gray-200 rounded-full text-sm"
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
        )}

        {/* Games Tab */}
        {activeTab === "games" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.map((project, index) => (
              <Link
                key={index}
                href={`/project/${project.slug}?from=games`}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer block"
              >
                <div className="relative w-full aspect-video bg-black">
                  <video
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                  >
                    <source src={`${project.video}#t=0.1`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
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
                        className="px-3 py-1 border-2 border-teal-400 text-gray-800 dark:text-gray-200 rounded-full text-sm"
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
        )}
      </div>
    </section>
  );
}
