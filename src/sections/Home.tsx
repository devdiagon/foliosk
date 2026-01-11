import { AnimText } from "../components";

export const Home = () => {

  return (
    <div className="flex flex-col max-w-md p-2 gap-4">
      <AnimText />
      <p className="text-md">
        Software developer who enjoys creating useful solutions for the community. I love creating user interfaces for
        <span className="bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent"> web and mobile apps.</span>
      </p>
    </div>
  );
}