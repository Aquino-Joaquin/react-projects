import { Progress } from "flowbite-react";
import type { Language } from "../types/Language";
export default function Languages() {
  const languagues:Language[] =[
    {
      language: "Spanish",
      proficiency: "Native",
      percentaje: 100,
    },
    {
      language: "Guarani",
      proficiency: "Native",
      percentaje: 100,
    },
    {
      language: "English",
      proficiency: "Advanced",
      percentaje: 90,
    },
    {
      language: "Turkish",
      proficiency: "Advanced",
      percentaje: 90,
    },
    {
      language: "French",
      proficiency: "Basic",
      percentaje: 40,
    },
  ];

  return (
    
    <div>
      <h2 className="text-yellow-400 font-semibold text-xl mb-6 border-b border-yellow-400 pb-2  w-full">
        Languages
      </h2>
      <div className="w-full space-y-4">
        {languagues.map(({language,proficiency,percentaje},index) => (
          <>
          <div key={index} className="flex justify-between text-sm text-black-300 mb-1">
            <span>{language}</span>
            <span>{proficiency}</span>
          </div><Progress progress={percentaje} color="yellow" size="lg" className="w-full" />
          </>
        ))}
      </div>
    </div>
  );
}
