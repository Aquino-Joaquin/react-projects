import { Card } from "flowbite-react";
import type { Infomation } from "../types/Information";
export default function Projects() {
  const projects: Infomation[] = [
    { 
      icon: "💻" ,
      title: "Personal Portfolio Website", 
      desc: "Built with React and Tailwind CSS." 
    },
    { 
      icon: "🛠️ ",
      title: "Todo App", 
      desc: "Full-stack web app using Node.js and MongoDB." 
    },
    { 
      icon: "🤖",
      title: " AI Chatbot", 
      desc: "Basic AI chatbot built with Python and NLP." 
    },
    { 
      icon: "🌐",
      title: "E-commerce Frontend", 
      desc: "React-based online store UI." 
    }
  ];

  return (
    <div>
      <h2 className="text-yellow-400 font-semibold text-xl mb-6 border-b border-yellow-400 pb-2 w-full">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
        {projects.map(({icon,title,desc}, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 text-gray-200">
            <h5 className="text-lg font-semibold text-yellow-300">{icon} {title}</h5>
            <p className="text-sm text-gray-400">{desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
