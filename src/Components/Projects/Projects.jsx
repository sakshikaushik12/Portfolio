import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Toll Tax Calculator"
          main="Crafted with meticulous attention to detail, the toll tax calculator interface, developed
                using Tkinter, offers users a seamless experience. By allowing users to input specific
                city and vehicle details, including vehicle type, weight, and any applicable discounts,
                the interface generates precise tax assessments and detailed invoices. This innovative
                tool not only simplifies toll calculations but also ensures accuracy and transparency in
                the process. Whether navigating through urban highways or rural roads, users can rely
                on this user-friendly interface to streamline their transportation expenses efficiently."
        />
        <ProjectCard
          title="An Automated Plant Watering System"
          main=" Embarking on the creation of a soil moisture detection system, I delved into the
                 intricacies of sensor interfacing, microcontroller programming, and algorithm
                 development. This comprehensive project aimed to accurately gauge soil moisture
                 levels, enabling precise determination of plant watering needs. From establishing
                 sensor connections to fine-tuning algorithms, every step contributed to honing my
                 technical expertise. This immersive experience not only deepened my understanding of
                 hardware-software integration but also underscored the importance of efficient
                 problem-solving in real-world applications."
        />
        <ProjectCard
          title="Dikshant IAS App and Website"
          main="During my intership at Dikshant IAS, I contributed to developing their website and mobile app using React.js, React Native, and Supabase. The platform supports students preparing for civil service exams, featuring course listings, video resources, and user authentication. I worked on optimizing performance and ensuring a responsive design, enhancing both the web and mobile user experiences. This project strengthened my skills in full-stack development and teamwork."
        />
      </div>
    </div>
  );
};

export default Projects;