import Sidebar from "../components/Sidebar";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences"; 

export default function Resume() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen bg-gray-100">
      
      <aside className="bg-[#0b1120] text-white p-6 md:col-span-1">
        <Sidebar />
      </aside>

      <main className="bg-white text-gray-800 p-8 md:col-span-2 space-y-12">
        
        <section>
          <Experiences />
        </section>

        <section>
            <Skills />
          
        </section>
        <section>
          <Projects/>
        </section>
        <section >
            <Education />
          
        </section>

      </main>
    </div>
  );
}
