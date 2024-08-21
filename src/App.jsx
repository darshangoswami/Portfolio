import "./App.css";
import { Button } from "./components/ui/button";
import resume from "./assets/darshanGoswami_SWE_Resume.pdf";
import AnimatedArrow from "./components/AnimatedArrow";

function App() {
  return (
    <div>
      <nav className="flex flex-wrap md:flex-nowrap md:justify-between pt-5 mb-5 px-10 md:px-20 lg:px-36 sticky top-0 bg-white">
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
      <main className="px-10 md:px-20 lg:px-36">
        <div className="h-screen flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl text-gray-800 font-medium mt-[-5rem]">
            Hi, I'm Darshan! <span className="text-3xl">👋</span>
          </h1>
          <h2 className="text-2xl text-gray-400 md:text-3xl mt-2">
            I'm a <span className="text-gray-800">Software Engineer</span>, and
            I like to solve problems.
          </h2>
          <Button
            asChild
            className="md:self-end mt-20 py-6 text-lg w-fit rounded-xl"
          >
            <a href="mailto:goswamd@purdue.edu">Let's work together!</a>
          </Button>
        </div>
        <h3 className="text-2xl mb-10">Featured Projects</h3>
        <div className="flex flex-wrap md:flex-nowrap gap-10 mb-24">
          <a
            href="https://shufflefy.darshangoswami.com/"
            target="_blank"
            className="w-full md:w-1/2 h-64 md:h-[inherit] md:aspect-[4/3]"
          >
            <div className="bg-[url('./assets/shufflefy_screenshot.jpeg')] flex items-end group bg-scale-sm bg-left-top h-full rounded-2xl">
              <AnimatedArrow />
            </div>
            <p className="text-xl mt-2 text-gray-600">Shufflefy</p>
          </a>

          <a
            href="https://covid-tracker.darshangoswami.com/"
            target="_blank"
            className="w-full md:w-1/2 h-64 md:h-[inherit] md:aspect-[4/3] mt-10 md:mt-0"
          >
            <div className="bg-[url('./assets/covid-19-tracker_screenshot.jpeg')] flex items-end group bg-scale bg-left-top h-full rounded-2xl">
              <AnimatedArrow />
            </div>
            <p className="text-xl mt-2 text-gray-600">Covid-19 Tracker</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
