import "./App.css";
import { Button } from "./components/ui/button";
import memoji from "./assets/memoji.png";
import resume from "./assets/darshanGoswami_SWE_Resume.pdf";
import AnimatedArrow from "./components/AnimatedArrow";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <div>
      <nav className="flex flex-wrap md:flex-nowrap md:justify-between pt-5 mb-5 px-5 md:px-20 lg:px-36 sticky top-0 bg-white">
        <Button variant="link" className="text-2xl pl-0">
          Darshan.
        </Button>
        <div className="mt-0.5">
          <Button asChild variant="link" className="text-md pl-0">
            <a href="https://github.com/darshangoswami" target="_blank">
              Github
            </a>
          </Button>
          <Button asChild variant="link" className="text-md">
            <a href={resume} target="_blank">
              Resume
            </a>
          </Button>
          <Button asChild variant="link" className="text-md pr-0">
            <a
              href="https://www.linkedin.com/in/darshangoswami/"
              target="_blank"
            >
              Linkedin
            </a>
          </Button>
        </div>
      </nav>
      <main className="px-5 md:px-20 lg:px-36">
        <div className="mb-36 flex flex-col">
          <div className="w-44 self-center my-10 md:pt-20 md:self-end md:mr-[-3rem] lg:mr-0">
            <img src={memoji} alt="" />
          </div>
          <h1 className="text-4xl lg:text-6xl text-gray-800 font-medium md:mt-[-9.5rem]">
            Hi, I'm Darshan!
          </h1>
          <h2 className="text-2xl text-gray-400 lg:text-3xl mt-3 flex-wrap">
            I'm a <span className="text-gray-800">Software Engineer</span>, and
            I like to solve problems.
          </h2>
          <Button asChild className="mt-16 py-6 text-lg w-fit rounded-xl">
            <a href="mailto:goswamd@purdue.edu">Let's work together!</a>
          </Button>
        </div>
        <Separator className="mb-14" />
        <h3 className="text-3xl mb-10">Featured Projects</h3>
        <div className="flex flex-wrap md:flex-nowrap gap-12 mb-24">
          <a
            href="https://shufflefy.darshangoswami.com/"
            target="_blank"
            className="w-full md:w-1/2 h-64 md:h-[inherit] md:aspect-[4/3]"
          >
            <div className="bg-[url('./assets/shufflefy_screenshot.jpeg')] flex items-end group bg-scale-sm bg-left-top h-full rounded-2xl shadow-md">
              <AnimatedArrow />
            </div>
            <p className="text-xl mt-2 text-gray-600">Shufflefy</p>
          </a>

          <a
            href="https://covid-tracker.darshangoswami.com/"
            target="_blank"
            className="w-full md:w-1/2 h-64 md:h-[inherit] md:aspect-[4/3] mt-6 md:mt-0"
          >
            <div className="bg-[url('./assets/covid-19-tracker_screenshot.jpeg')] flex items-end group bg-scale bg-left-top h-full rounded-2xl shadow-md">
              <AnimatedArrow />
            </div>
            <p className="text-xl mt-2 text-gray-600">Covid-19 Tracker</p>
          </a>
        </div>
        <div className="flex items-center justify-between mb-20 border py-10 px-5 rounded-2xl bg-gradient-to-r from-violet-300 to-pink-200 shadow-md">
          <a href="" className="flex flex-col group">
            <h3 className="text-3xl">More Projects</h3>
            <svg
              width="234"
              height="24"
              viewBox="0 0 234 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:ml-5 transition-all duration-300"
            >
              <path
                d="M233.061 13.0607C233.646 12.4749 233.646 11.5251 233.061 10.9393L223.515 1.3934C222.929 0.807612 221.979 0.807612 221.393 1.3934C220.808 1.97918 220.808 2.92893 221.393 3.51472L229.879 12L221.393 20.4853C220.808 21.0711 220.808 22.0208 221.393 22.6066C221.979 23.1924 222.929 23.1924 223.515 22.6066L233.061 13.0607ZM0 13.5H232V10.5H0L0 13.5Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="">
            <GitHubLogoIcon className="w-24 h-24 text-gray-700" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
