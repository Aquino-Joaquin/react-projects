import { Card } from "flowbite-react";
import type { Infomation } from "../types/Information";

export default function Experiences() {
  const experiences: Infomation[] = [
    {
      icon: "🏢",
      title: "Software Engineer Intern — Tech Solutions",
      desc: "Developed and optimized React components, integrated REST APIs, and improved frontend performance by 25%.",
      date: "Jun 2024 – Sep 2024",
    },
    {
      icon: "💻",
      title: "Freelance Web Developer",
      desc: "Built and deployed responsive websites using React, Tailwind CSS, and Node.js for small businesses and startups.",
      date: "Jan 2023 – May 2024",
    },
    {
      icon: "🧠",
      title: "AI Research Assistant — University Project",
      desc: "Worked on natural language processing models using Python, TensorFlow, and Hugging Face for sentiment analysis.",
      date: "Sep 2023 – Dec 2023",
    },
    {
      icon: "⚙️",
      title: "Backend Developer — Startup Inc.",
      desc: "Designed RESTful APIs using Express.js and MongoDB, focusing on scalability and clean architecture.",
      date: "May 2022 – Dec 2022",
    },
    {
      icon: "📱",
      title: "Mobile App Developer — Student Project",
      desc: "Developed a cross-platform Flutter app integrating Firebase authentication and real-time database.",
      date: "Mar 2022 – Jun 2022",
    },
    {
      icon: "🌐",
      title: "Open Source Contributor",
      desc: "Contributed to open-source projects on GitHub, focusing on documentation, bug fixes, and frontend improvements.",
      date: "Ongoing",
    }
  ];

  return (
    <div>
      <h2 className="text-yellow-400 font-semibold text-xl mb-6 border-b border-yellow-400 pb-2 w-full">
        Experiences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
        {experiences.map(({icon,title,desc,date}, index) => (
          <Card key={index} className="bg-gray-900  border-gray-800 hover:shadow-yellow-400/10 transition-all duration-300">
            <h5 className="text-lg font-semibold text-yellow-300 flex items-center gap-2">
              {icon} {title}
            </h5>
            <p className="text-sm text-gray-400 mt-1">{desc}</p>
            <p className="text-xs text-gray-500 mt-2 italic">{date}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
