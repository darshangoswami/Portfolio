import "./App.css";
import { Button } from "./components/ui/button";
import resume from "./assets/darshanGoswami_SWE_Resume.pdf";
import SelectedWork from "@/components/selected-work";

function App() {
  return (
    <div>
      <nav className="flex flex-wrap md:flex-nowrap md:justify-between pt-5 mb-5 px-5 md:px-20 lg:px-36 sticky top-0 bg-white">
        <Button asChild variant="link" className="text-2xl pl-0">
          <a href="#">Darshan.</a>
        </Button>
        <div className="mt-0.5">
          <Button asChild variant="link" className="text-md pl-0">
            <a href="#work">Work</a>
          </Button>
          <Button asChild variant="link" className="text-md">
            <a href="#about">About</a>
          </Button>
          <Button asChild variant="link" className="text-md pr-0">
            <a href={resume} target="_blank">
              Resume
            </a>
          </Button>
        </div>
      </nav>
      <main className="px-5 md:px-20 lg:px-36">
        <div className="mt-44 mb-28">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] text-gray-800 font-medium">
            Hi, I'm Darshan.
          </h1>
          <h2 className="w-5/6 md:w-4/6 lg:w-3/5 xl:w-2/5 text-gray-400 text-2xl md:text-3xl xl:text-4xl mt-5 lg:mt-7 xl:mt-10 flex-wrap">
            I'm a <span className="text-gray-800">Software Engineer</span>, and
            I like to solve problems.
          </h2>
          <nav className="flex flex-wrap md:flex-nowrap md:justify-between mt-52">
            <div>
              <Button asChild variant="link" className="text-md pl-0">
                <a href="https://github.com/darshangoswami">Github</a>
              </Button>
              <Button asChild variant="link" className="text-md">
                <a href="https://www.linkedin.com/in/darshangoswami/">
                  Linkedin
                </a>
              </Button>
              <Button asChild variant="link" className="text-md">
                <a href="mailto:goswamd@purdue.edu">Email</a>
              </Button>
            </div>
            <p className="py-2 px-4 font-medium hidden md:flex">
              _ OPEN TO WORK
            </p>
          </nav>
        </div>
        <h3 className="text-center text-3xl mb-10">Selected Work</h3>
        <SelectedWork />
      </main>
    </div>
  );
}

export default App;
