import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function DrivenForbes() {
  const tasks = [
    {
      text: "Leading the frontend development team, providing technical guidance, code reviews, and mentoring to ensure high-quality deliverables and team growth.",
      keywords: ["team leadership", "frontend development", "technical guidance", "code reviews", "mentoring"],
    },
    {
      text: "Managing Content Management System (CMS) and integrations with Customer Relationship Management (CRM) systems to streamline business operations and improve user experience.",
      keywords: ["CMS", "CRM", "system integrations", "business operations", "user experience"],
    },
    {
      text: "Collaborating closely with third-party providers for SEO optimization, growth strategies, and strategic partnerships with similar companies in the market.",
      keywords: ["third-party providers", "SEO optimization", "growth strategies", "strategic partnerships"],
    },
    {
      text: "Overseeing deployment processes, repository management, and infrastructure to ensure reliable and scalable application delivery.",
      keywords: ["deployment", "repository management", "infrastructure", "scalable applications"],
    },
    {
      text: "Establishing and improving hiring processes for the engineering team, contributing to talent acquisition and team building initiatives.",
      keywords: ["hiring processes", "talent acquisition", "team building", "engineering team"],
    },
  ];
  
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Principal Software Engineer <span className="text-AAsecondary">@ Driven | Forbes Global Properties</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">May 2025 — Present</span>
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