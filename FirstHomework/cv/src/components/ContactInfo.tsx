import { Card } from "flowbite-react";

import type { Infomation } from "../types/Information";

export default function ContactInfo() {
  const contactData: Infomation[] = [
    { 
      icon: "👤",
      title: "Full Name", 
      desc: "Alexandra Novak" 
    },
    { 
      icon: "📞" ,
      title: "Phone", 
      desc: "+1 415 987 6543", 
      
    },
    { 
      icon: "✉️",
      title: "Email", 
      desc: "alex.novak.dev@mail.com", 
       },
    { 
      icon: "📍" ,
      title: "Location", 
      desc: "Berlin, Germany", 
      
    },
    { 
      icon: "🎂" ,
      title: "Date of Birth", 
      desc: "March 15, 1995", 
     
    },
    { 
      icon: "🔗",
      title: "LinkedIn", 
      desc: "linkedin.com/in/alexandra-novak", 
       
    },
    { 
      icon: "💻",
      title: "GitHub", 
      desc: "github.com/alexnovak", 
       
    }
  ];

  return (
    <div className="w-full">
      <h2 className="text-yellow-400 font-semibold text-lg mb-4 border-b border-yellow-400 pb-1 w-full text-left">
        Contact Info
      </h2>

      <div className="flex flex-col gap-3 w-full">
        {contactData.map(({icon,title,desc}, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 hover:shadow-yellow-400/20 transition-all duration-300">
            <p className="text-yellow-300 font-semibold flex items-center gap-2">
              {icon} {title}
            </p>
            <p className="text-gray-200 text-sm mt-1 break-words">{desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
