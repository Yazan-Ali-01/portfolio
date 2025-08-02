import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function  Osous() {
  const tasks = [
    {
      text: "Created user-friendly and responsive web interfaces using React, Material-UI, Tailwind CSS, and integrated Framer Motion for interactive animations and smooth transitions.",
      keywords: ["React", "Material-UI", "Tailwind CSS", "Framer Motion", "responsive design", "web interfaces"],
    },
    {
      text: "Improved design predictability and resolved various design issues, enhancing user experience and visual consistency.",
      keywords: ["UI/UX", "design consistency", "user experience", "problem-solving"],
    },
    {
      text: "Collaborated closely with backend developers to ensure smooth integration and efficient teamwork.",
      keywords: ["collaboration", "backend integration", "teamwork", "cross-functional"],
    },
  ];
  
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Front-End Engineer <span className="text-AAsecondary">@ Osous Technologies</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Apr 2020 - Jun 2022</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
