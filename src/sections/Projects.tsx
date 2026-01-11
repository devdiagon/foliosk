import { FaCubes } from "react-icons/fa6";

export const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      <header className="flex items-center gap-3">
        <FaCubes size={36} />
        <h2 className="text-2xl font-light text-black">
          Projects
        </h2>
      </header>

      {/* Contenido */}
      <div className="w-full min-h-[120px] bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm">
        
      </div>
    </div>
  );
}