import { Card } from "flowbite-react";
import type { Infomation } from "../types/Information";
export default function Skills() {
  const skills: Infomation[] = [
    { 
      icon: "💻", 
      title: "Programming", 
      desc: "JavaScript, Python, C/C++"
    },
    { 
      icon: "🌐", 
      title: "Web Development", 
      desc: "HTML, CSS, React, Node.js, Tailwind CSS" 
    },
    { 
      icon: "🗄️", 
      title: "Databases", 
      desc: "MySQL, MongoDB" },
    { 
      icon: "🛠️", 
      title: "Tools & Frameworks",
      desc: "Git, VS Code, Docker" },
    { 
      icon: "🤖", 
      title: "AI & Machine Learning", 
      desc: "Basics of ML and data analysis" },
    { 
      icon: "🎨", 
      title: "UI/UX Design", 
      desc: "Frontend design and usability skills" }
  ];

  return (
    <div>
      <h2 className="text-yellow-400 font-semibold text-xl mb-6 border-b border-yellow-400 pb-2 w-full">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
        {skills.map(({icon,title,desc}, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 hover:shadow-yellow-400/10 transition-all">
            <h5 className="text-lg font-semibold text-yellow-300">{icon} {title}</h5>
            <p className="text-sm text-gray-400">{desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
