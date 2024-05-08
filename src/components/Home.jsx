import HeroImage from "../assets/heroImage2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full ml-10 mt-40"
          />
        </div>

        <div className="flex flex-col justify-center h-full ml-20 md:pt-40 sm:pt-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-20">
            I&apos;m a Front End web developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I possess a solid background of hands-on experience in
            software development and design. My current focus lies in crafting
            web applications, leveraging technologies such as Javascript, React,
            Tailwind, and Github, which I thoroughly enjoy.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
