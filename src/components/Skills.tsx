"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: "/skillimages/html.png", color: "#f97316" },
        { name: "CSS3", icon: "/skillimages/css.png", color: "#1d4ed8" },
        { name: "JAVASCRIPT", icon: "/skillimages/js.png", color: "#84cc16" },
        { name: "REACT", icon: "/skillimages/react.png", color: "#2dd4bf" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "NODE JS", icon: "/skillimages/node.png", color: "#84cc16" },
        { name: "FIREBASE", icon: "/skillimages/firebase.png", color: "#eab308" },
        { name: "MAPBOX", icon: "/skillimages/mapbox-icon.svg", color: "#4b5563" },
      ],
    },
    {
      category: "Web3 & Blockchain",
      skills: [
        { name: "SOLIDITY", icon: "/skillimages/solidity.png", color: "#a855f7" },
        { name: "WEB3 JS", icon: "/skillimages/web3.png", color: "#f97316" },
        { name: "CHAT GPT", icon: "/skillimages/chatgpt-icon.png", color: "#4b5563" },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {skillCategories.map((category, catIndex) =>
            category.skills.map((skill, skillIndex) => {
              const globalIndex = skillCategories
                .slice(0, catIndex)
                .reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
              
              return (
                <div
                  key={`${category.category}-${skillIndex}`}
                  className={`flex flex-col items-center transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${globalIndex * 150}ms` }}
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 transition-transform hover:scale-105">
                    {/* SVG Circle Border with animation */}
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90"
                      viewBox="0 0 160 160"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="74"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="74"
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="465"
                        strokeDashoffset={isVisible ? "0" : "465"}
                        className="transition-all duration-1500 ease-out"
                        style={{
                          transitionDelay: `${globalIndex * 150 + 200}ms`,
                        }}
                      />
                    </svg>
                    
                    {/* Content Container */}
                    <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-50 flex items-center justify-center p-6">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={100}
                        height={100}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center max-w-[200px]">
                    {skill.name === "HTML5" && "We use modern HTML5 code to build the structure of our websites for browser compatibility."}
                    {skill.name === "NODE JS" && "We are proficient in the popular Node.js framework to integrate backend functionality to your site."}
                    {skill.name === "CSS3" && "The latest version of Cascading Style Sheets, CSS3, is used to style your website for visual appeal."}
                    {skill.name === "REACT" && "React is a popular modern JavaScript library used to build highly interactive user interfaces."}
                    {skill.name === "JAVASCRIPT" && "We use traditional vanilla JavaScript to add interactivity and functionality to your web pages."}
                    {skill.name === "FIREBASE" && "Google's Firebase and Firestore is an semi-structured database ideal for many modern applications."}
                    {skill.name === "SOLIDITY" && "Solidity is a language for Ethereum smart contracts that is used in blockchain applications."}
                    {skill.name === "WEB3 JS" && "Web3.js allows browsers to talk to the blockchain by integrating with applications such as MetaMask."}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
