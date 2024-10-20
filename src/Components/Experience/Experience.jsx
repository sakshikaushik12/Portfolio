import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import SupabaseLogo from "../../assets/supabase-logo.png"; 
import ExpoLogo from "../../assets/expo-logo.png"; 

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <img src={ExpoLogo} alt="Expo" className="w-12 h-12" /> 
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <img src={SupabaseLogo} alt="Supabase" className="w-12 h-12" /> 
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaReact color="#61DAFB" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">SDE Intern, Dikshant IAS</h2>
              <p className="text-sm leading-tight font-thin">
                June 2024 - August 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Developed the website and app using React.js, React Native, and Expo.</li>
                <li>- Integrated Supabase for database and authentication functionalities.</li>
                <li>- Contributed to feature development and performance optimization.</li>
                <li>- Collaborated with a team to ensure the platform was user-friendly.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
