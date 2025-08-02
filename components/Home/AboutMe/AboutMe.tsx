import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    ["Next.js/React", "TypeScript/JavaScript", "Tailwind CSS", "Node.js", "AWS/Azure",  ],
    ["Java", "Spring Boot","Sanity CMS", "MongoDB/PostgreSQL", "AI Agents/Automation"],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              Hey there! I&apos;m Yazan, and I&apos;m pretty obsessed with building cool stuff with code. My tech journey
              really took off when I was around 16, I started installing custom ROMs on my Android phone and exploring
              different Linux distros just to hack into my own Wi-Fi. That curiosity cracked open a whole new world of
              problem-solving and creativity, and I haven&apos;t looked back since.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              Despite my growing love for tech, life had its own plans. After high school, I scored{" "}
              <span className="text-AAsecondary">83%</span> — which, in my home country, wasn&apos;t quite enough to get into the{" "}
              <span className="text-AAsecondary">Computer Science faculty</span>. So I ended up enrolling in{" "}
              <span className="text-AAsecondary">Electrical Engineering</span> instead. My first year was in{" "}
              <span className="text-AAsecondary">Aleppo</span>, a different city from where I lived, and even then I was constantly questioning: &quot;Is this what I really want to be doing?&quot;
            </div>
            <div className="font-Header text-gray-400 text-justify">
              That inner tug never went away. After three years of soul-searching (and a lot of late-night coding), I finally decided to make the leap — I left{" "}
              <span className="text-AAsecondary">Electrical Engineering</span> and fully committed to pursuing my passion for{" "}
              <span className="text-AAsecondary">software development</span>. And I haven&apos;t stopped learning since.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              Over the years, I&apos;ve worn many hats: from{" "}
              <span className="text-AAsecondary">manual testing</span> to{" "}
              <span className="text-AAsecondary">automation testing</span>,{" "}
              <span className="text-AAsecondary">frontend development</span>, and eventually{" "}
              <span className="text-AAsecondary">full-stack roles</span>. Each challenge taught me something new, and every role brought me closer to becoming the kind of developer I always dreamed of being.
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {techGroup.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary flex-none"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/yazan-avatar.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/yazan-avatar.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
