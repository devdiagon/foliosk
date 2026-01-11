import { Timeline } from "primereact/timeline";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import type { Milestone } from '../content/milestones';
import { Badge } from "./Badge";

interface MilestoneTimelineProps {
  milestones: Milestone[];
}

export const MilestoneTimeline = ({milestones}: MilestoneTimelineProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl">
        <Timeline
          value={milestones}
          align="alternate"
          className="customized-timeline"
          content={(item: Milestone, options: number) => {
            const isRight = options % 2 === 0;
            return(
            <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-5 shadow-sm">
              <h3 className="text-base font-medium text-black mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-700 mb-3">
                {item.description}
              </p>

              <div className={`flex gap-2 flex-wrap ${isRight ? "justify-start" : "justify-end"}`}>
                <Badge
                  label={item.location}
                  icon={FaMapMarkerAlt}
                />

                <Badge
                  label={item.period}
                  icon={FaCalendarAlt}
                />
              </div>
            </div>
          )}}
          marker={() => (
            <span className="w-3 h-3 bg-[#D6533C] rounded-full shadow" />
          )}
        />
      </div>
    </div>
  );
}