import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-start">
          <div className="md:mr-10"> 
            <img className="md:h-80" src={AboutImg} alt="About img" />
          </div>

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Passionate about development
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have a deep enthusiasm for creating intuitive and responsive
                  digital solutions that make a difference.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Building seamless applications
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  With a focus on React and React Native, I develop web and
                  mobile applications that deliver smooth user experiences.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Always learning and growing
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Continuously improving my skills by taking on new challenges
                  and staying updated with industry trends.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
