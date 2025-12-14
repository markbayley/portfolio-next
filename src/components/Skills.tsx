import Image from "next/image";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "/skillimages/react.png" },
        { name: "HTML", icon: "/skillimages/html.png" },
        { name: "CSS", icon: "/skillimages/css.png" },
        { name: "JavaScript", icon: "/skillimages/js.png" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "/skillimages/node.png" },
        { name: "Firebase", icon: "/skillimages/firebase.png" },
      ],
    },
    {
      category: "Web3 & Blockchain",
      skills: [
        { name: "Web3", icon: "/skillimages/web3.png" },
        { name: "Solidity", icon: "/skillimages/solidity.png" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <div className="relative w-10 h-10 mr-4 flex-shrink-0">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
