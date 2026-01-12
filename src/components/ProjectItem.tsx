import { FaGithub, FaImage } from "react-icons/fa";
import type { Project } from "../content"
import Badge from "./Badge";
import { ButtonLink } from "./ButtonLink";

interface ProjectItemProps {
  project: Project
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const hasImage = project.image !== undefined;

  return (
    <div
      className={`
        grid
        gap-6
        border
        border-gray-200
        p-6
        shadow-[3px_3px_0px_rgba(0,0,0,0.1)]
        ${hasImage ? "grid-cols-1 md:grid-cols-[140px_1fr]" : "grid-cols-1"}
      `}
    >
      {/* Image */}
      {hasImage && (
        <div className="flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-28 object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-28 flex items-center justify-center bg-gray-100 rounded-xl">
              <FaImage className="text-gray-400 text-3xl" />
            </div>
          )}
        </div>
      )}


      {/* Content */}
      <div className="flex flex-col gap-4">

        {/* Title */}
        <h3 className="text-md font-medium text-black">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-700 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => {

            return (
              <Badge
                key={index}
                label={tech.label}
                icon={tech.icon}
              />
            );
          })}
        </div>

        {/* Buttons */}
        {(project.repository || project.url) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.repository && (
              <ButtonLink
                label="Repository"
                url={project.repository}
                icon={FaGithub}
              />
            )}

            {project.url && (
              <ButtonLink
                label={project.url.label}
                url={project.url.link}
                icon={project.url.icon}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}