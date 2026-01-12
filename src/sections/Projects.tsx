import { FaCubes } from "react-icons/fa6";
import { ProjectItem } from "../components/ProjectItem";
import { projects } from "../content";

export const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      <header className="flex items-center gap-3">
        <FaCubes size={36} />
        <h2 className="text-2xl font-light text-black">
          Projects
        </h2>
      </header>

      <div className="w-full min-h-[120px] grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
}