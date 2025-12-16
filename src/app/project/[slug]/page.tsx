"use client";

import { projectsData, uxProjects, gameProjects } from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { useState, use } from "react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const searchParams = useSearchParams();
  const fromTab = searchParams.get('from') || 'apps';
  const { slug } = use(params);
  
  // Check all project types
  const appProject = projectsData.find((p) => p.slug === slug);
  const uxProject = uxProjects.find((p) => p.slug === slug);
  const gameProject = gameProjects.find((p) => p.slug === slug);
  
  const project = appProject || uxProject || gameProject;

  if (!project) {
    notFound();
  }

  const isUxProject = !!uxProject;
  const isGameProject = !!gameProject;
  const isAppProject = !!appProject;

  // Skill icon mapping
  const skillIcons: Record<string, { icon: string; color: string }> = {
    "HTML5": { icon: "/skillimages/html.png", color: "#000000" },
    "CSS3": { icon: "/skillimages/css.png", color: "#000000" },
    "JAVASCRIPT": { icon: "/skillimages/js.png", color: "#000000" },
    "REACT": { icon: "/skillimages/react.png", color: "#000000" },
    "NODE.JS": { icon: "/skillimages/node.png", color: "#84cc16" },
    "NODE JS": { icon: "/skillimages/node.png", color: "#84cc16" },
    "FIREBASE": { icon: "/skillimages/firebase.png", color: "#000000" },
    "MAPBOX": { icon: "/skillimages/mapbox-icon.svg", color: "#4b5563" },
    "SOLIDITY": { icon: "/skillimages/solidity.png", color: "#a855f7" },
    "WEB3.JS": { icon: "/skillimages/web3.png", color: "#f97316" },
    "WEB3 JS": { icon: "/skillimages/web3.png", color: "#f97316" },
    "CHATGPT": { icon: "/skillimages/chatgpt-icon.png", color: "#000000" },
    "CHAT GPT": { icon: "/skillimages/chatgpt-icon.png", color: "#000000" },
    "TAILWIND": { icon: "/skillimages/tailwind.png", color: "#06b6d4" },
    "TAILWIND CSS": { icon: "/skillimages/tailwind.png", color: "#06b6d4" },
    "NEXT.JS": { icon: "/skillimages/nextjs.png", color: "#4b5563" },
    "NEXT JS": { icon: "/skillimages/nextjs.png", color: "#4b5563" },
    "NEXTJS": { icon: "/skillimages/nextjs.png", color: "#4b5563" },
    "UNITY": { icon: "/skillimages/unity2.svg", color: "#4b5563" },
    "C#": { icon: "/skillimages/csharp.png", color: "#a855f7" },
    "CSHARP": { icon: "/skillimages/csharp.png", color: "#a855f7" },
    "TYPESCRIPT": { icon: "/skillimages/typescript.png", color: "#3178c6" },
   
  };

  const getSkillIcon = (tag: string) => {
    const normalizedTag = tag.toUpperCase().replace(/\s+/g, " ").trim();
    return skillIcons[normalizedTag];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/?tab=${fromTab}#portfolio`}
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <h1 className="text-3xl uppercase text-gray-900 dark:text-white mb-6">
          {project.title}
        </h1>

        {/* UX Project Images with Selector */}
        {isUxProject && uxProject && (
          <div className="mb-8">
            <div className="relative w-full h-64 sm:h-96 lg:h-[600px] rounded-xl overflow-hidden shadow-2xl mb-4 bg-gray-100 dark:bg-gray-800">
              <Image
                src={uxProject.images[selectedImage]}
                alt={`${project.title} ${selectedImage + 1}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex gap-4 justify-center">
              {uxProject.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-24 h-24 rounded-lg overflow-hidden border-4 transition-all ${
                    selectedImage === index
                      ? "border-teal-400 scale-110"
                      : "border-gray-300 dark:border-gray-600 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Game Project Video */}
        {isGameProject && gameProject && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-8 bg-black">
            <video
              controls
              className="w-full h-full"
              preload="metadata"
            >
              <source src={gameProject.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* App Project Image */}
        {isAppProject && appProject && (
          <div className="relative w-full h-64 sm:h-96 lg:h-[600px] rounded-xl overflow-hidden shadow-2xl mb-8 bg-gray-100 dark:bg-gray-800">
            <Image
              src={appProject.image}
              alt={project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag, index) => {
            const skillIcon = getSkillIcon(tag);
            return (
              <span
                key={index}
                className="px-4 py-2 border-2 border-teal-400 dark:border-teal-400 text-gray-800 dark:text-gray-200 rounded-full card-text font-medium flex items-center gap-2"
              >
                {skillIcon && (
                  <span 
                    className="relative flex items-center justify-center w-6 h-6 overflow-hidden"
                  >
                    <Image
                      src={skillIcon.icon}
                      alt={tag}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </span>
                )}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
          <h2 className="card-heading text-gray-900 dark:text-white mb-4">
            About This Project
          </h2>
          <p className="card-text text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {project.longDescription}
          </p>

          {/* Features */}
          {project.features && (
            <>
              <h3 className="card-heading text-gray-900 dark:text-white mb-4 mt-6">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start card-text text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      className="w-5 h-5 text-teal-500 dark:text-teal-400 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Tools/Technologies for UX and Game Projects */}
          {(isUxProject && uxProject?.tools) || (isGameProject && gameProject?.technologies) ? (
            <>
              <h3 className="card-heading text-gray-900 dark:text-white mb-4 mt-6">
                {isUxProject ? "Design Tools" : "Technologies"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(isUxProject ? uxProject?.tools : gameProject?.technologies)?.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </>
          ) : null}
        </div>

        {/* Action Buttons - Only for App Projects */}
        {isAppProject && appProject && (
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={appProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Live Project
            </a>
            <a
              href={appProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text flex items-center justify-center px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
