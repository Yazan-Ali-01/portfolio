import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function NmoAI() {
  const tasks = [
    {
      text: "Backend: Set up Azure CI/CD pipelines and handled Azure DevOps tasks to streamline deployment and development processes. Contributed to database queries improvements and code base improvements.",
      keywords: ["Azure CI/CD", "Azure DevOps", "database queries", "code improvements", "deployment"],
    },
    {
      text: "Frontend: Managed and optimized the architecture of our React code, leading to significant performance improvements and implemented frontend changes based on SEO reports, improving accessibility, site structure, and overall search engine rankings.",
      keywords: ["React", "performance optimization", "SEO", "accessibility", "search engine rankings"],
    },
    {
      text: "Testing: Implemented UI testing with Cypress and unit testing with Jest and Mocha, ensuring robust and reliable code.",
      keywords: ["Cypress", "Jest", "Mocha", "UI testing", "unit testing"],
    },
  ];
  
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full-stack Developer <span className="text-AAsecondary">@ BeInMedia - Nmo AI</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Jul 2022 — Feb 2024</span>
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