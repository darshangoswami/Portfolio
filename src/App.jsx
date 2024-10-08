import "./App.css";
import { Button } from "./components/ui/button";
import resume from "./assets/Darshan_Goswami_Resume.pdf";
import SelectedWork from "@/components/selected-work";
import Footer from "@/components/footer";
import { Link as ScrollLink } from "react-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <nav className="flex flex-wrap md:flex-nowrap justify-between pt-5 mb-5 px-5 md:px-20 lg:px-36 sticky top-0 bg-background">
        <Button asChild variant="link" className="text-2xl pl-0 cursor-pointer">
          <ScrollLink to="top" smooth={true} duration={500} offset={-250}>
            Darshan.
          </ScrollLink>
        </Button>
        <div className="mt-0.5">
          <Button
            asChild
            variant="link"
            className="text-md pl-0 cursor-pointer"
          >
            <ScrollLink to="work" smooth={true} duration={500} offset={-60}>
              Work
            </ScrollLink>
          </Button>
          <Button asChild variant="link" className="text-md">
            <a href={resume} target="_blank">
              Resume
            </a>
          </Button>
          <ModeToggle />
        </div>
      </nav>
      <main className="px-5 md:px-20 lg:px-36" id="top">
        <div className="mt-44 mb-28">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] light:text-gray-800 font-medium">
            Hi, I'm Darshan.
          </h1>
          <h2 className="space-mono-regular w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/5 light:text-gray-400 text-2xl md:text-3xl xl:text-4xl mt-5 lg:mt-7 xl:mt-10 flex-wrap tracking-tight">
            I'm a <span className="light:text-gray-800">Software Engineer</span>
            , and I like to solve problems.
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
        <h3 className="text-center text-3xl mb-10" id="work">
          Selected Work
        </h3>
        <SelectedWork />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
