import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
} from "flowbite-react";
import type { Infomation } from "../types/Information";
export default function Education() {
  const educationData:Infomation[] = [
    {
      date: "2010 - 2014",
      title: "High School Diploma - Stuyvesant High School, New York, USA",
      desc: "Graduated with honors. Strong focus on mathematics, physics, and computer science foundation courses.",
    },
    {
      date: "2014 - 2018",
      title: "Bachelor’s Degree in Computer Engineering - Massachusetts Institute of Technology (MIT), USA",
      desc: "Studied software engineering, algorithms, databases, and computer architecture. Completed a final project optimizing web application performance.",
    },
    {
      date: "2018 - 2020",
      title: "Master’s Degree in Artificial Intelligence - Technical University of Munich (TUM), Germany",
      desc: "Specialized in machine learning, natural language processing, and computer vision. Thesis focused on AI-powered data analysis for smart systems.",
    },
    {
      date: "2021 - Present",
      title: "Certifications & Online Courses - Stanford Online & Coursera",
      desc: "Currently taking courses in Cloud Computing (AWS), Full-Stack Development with React and Node.js, and Deep Learning specialization.",
    }
  ];

  return (
    <div>
      <h2 className="text-yellow-400 font-semibold text-xl mb-6 border-b border-yellow-400 pb-2 w-full">
        Education
      </h2>

      <Timeline horizontal>
        {educationData.map(({date,title,desc}, index) => (
          <TimelineItem key={index}>
            <TimelinePoint className="bg-yellow-400" />
            <TimelineContent>
              <TimelineTime className="text-gray-400 text-sm">{date}</TimelineTime>
              <h3 className="text-yellow-300 text-lg font-semibold mt-1">{title}</h3>
              <TimelineBody className="text-gray-400 text-sm leading-relaxed mt-1">
                {desc}
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
