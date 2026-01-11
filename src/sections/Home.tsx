import { AnimText, ButtonLink } from "../components";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Home = () => {

  return (
    <div className="flex flex-col max-w-md p-2 gap-4 items-center text-center">
      <AnimText />
      <p className="text-md">
        Software developer who enjoys creating useful solutions for the community. I love creating user interfaces for
        <span className="bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent"> web and mobile apps.</span>
      </p>
      <div className="flex gap-4">
        <ButtonLink
          label="devdiagon"
          url="https://github.com/devdiagon"
          icon={FaGithub}
        />

        <ButtonLink
          label="Frektip"
          url="https://github.com/Frektip"
          icon={FaGithub}
        />

        <ButtonLink
          label="fredericktimo@gmail.com"
          url="mailto:fredericktimo@gmail.com"
          icon={IoIosMail}
        />
      </div>
    </div>
  );
}