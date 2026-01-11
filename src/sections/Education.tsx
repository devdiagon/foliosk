import { MdOutlineMenuBook } from "react-icons/md";
import { education } from "../content/milestones";
import { MilestoneTimeline } from "../components/MilestoneTimeline";

export const Education = () => {
  return (
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <header className="flex items-center gap-3">
          <MdOutlineMenuBook size={36} />
          <h2 className="text-2xl font-light text-black">
            Education
          </h2>
        </header>
  
        {/* Contenido */}
        <div className="w-full min-h-[120px]">
          <MilestoneTimeline milestones={education} />
        </div>
      </div>
    );
}