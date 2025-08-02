import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function RoyalClass() {
  const tasks = [
    {
      text: "Architected and developed responsive web applications using Next.js 14, TypeScript, and React, significantly reducing page load times and improving Core Web Vitals across all metrics.",
      keywords: ["Next.js 14", "TypeScript", "React", "Core Web Vitals", "page load times", "responsive web applications"],
    },
    {
      text: "Implemented React Query for efficient data fetching, minimizing API call overhead and enhancing application responsiveness for a growing user base.",
      keywords: ["React Query", "data fetching", "API call overhead", "application responsiveness"],
    },
    {
      text: "Built type-safe forms with React Hook Form, leading to fewer form-related bugs and streamlined development for complex forms.",
      keywords: ["React Hook Form", "type-safe forms", "form-related bugs", "complex forms"],
    },
    {
      text: "Transformed Figma designs into pixel-perfect interfaces with high design accuracy while ensuring seamless responsiveness across all devices.",
      keywords: ["Figma", "pixel-perfect interfaces", "design accuracy", "responsiveness"],
    },
    {
      text: "Refactored a legacy codebase using Domain-Driven Design principles, improving code maintainability and accelerating developer onboarding.",
      keywords: ["Domain-Driven Design", "legacy codebase", "code maintainability", "developer onboarding"],
    },
  ];
  
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Software Developer <span className="text-AAsecondary">@ Royal Class Group</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Apr 2024 — May 2025</span>
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