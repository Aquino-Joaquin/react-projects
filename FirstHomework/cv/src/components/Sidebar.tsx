import ContactInfo from "./ContactInfo";
import Languages from "./Languages";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-3xl shadow-xl w-[600px]">
      
      <img
        src="/src/assets/profile.png"
        alt="Profile"
        className="rounded-full w-32 h-32 object-cover border-4 border-yellow-400"
      />

      <h1 className="text-2xl font-bold mt-4 text-white">Alexandro Novak</h1>
      <p className="text-yellow-400 mt-1">Computer Engineer</p>

      <p className="text-gray-300 mt-4 text-sm text-left">
        Computer Engineering professional with experience in web and mobile development, AI, and cloud computing. 
        Passionate about creating high-performance, elegant, and user-friendly applications that balance functionality and design.
      </p>

      <div className="w-full mt-6">
        <ContactInfo />
      </div>

      <div className="w-full mt-6">
        <Languages />
      </div>

    </div>
  );
}
