import { FaRegUser } from "react-icons/fa";
import { Badge } from "../components";
import { MdOutlineTranslate } from "react-icons/md";
import Stack from "../components/Stack";
import { profiles } from "../content";


export const AboutMe = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      <header className="flex items-center gap-3">
        <FaRegUser size={36} />
        <h2 className="text-2xl font-light text-black">
          About Me
        </h2>
      </header>
      
      <div className="w-full min-h-[120px]">
        <div className="flex gap-8 h-full">

          <div className="w-1/2 text-left">
            <p className="text-gray-600 leading-relaxed">
              My name is Federick Tipán (you can call me Fred), I'm from Quito, Ecuador. I've got involved in the world of programming because I love seeing my creations to be useful for a community. In fact, that's how my interest in this field began, when I took the courage to launch my first project TE+, to the public.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              Currently, I'm most interested in frontend and mobile development, more over into UI/UX concepts. I believe that even the simplest interfaces shouldn't be used with outdated designs. However, I also keep training other logical programming skills such as backend development and databases.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              I consider myself a person who organizes their time, planning every project before diving into the code. I'm able to work in teams and strive to maintain clear and effective communication in order to adapt to any work environment.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              ¯\_(ツ)_/¯
            </p>
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center gap-4">

            <div className="w-64 h-64">
              <Stack autoplay cards={profiles} />
            </div>

            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <Badge label="English (B2)"icon={MdOutlineTranslate} />
              <Badge label="Spanish (native)" icon={MdOutlineTranslate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}