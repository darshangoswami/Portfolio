import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import shufflefy_screenshot from "./assets/shufflefy_screenshot.jpeg";
import covid_tracker_screenshot from "./assets/covid-19-tracker_screenshot.jpeg";
import resume from "./assets/darshanGoswami_SWE_Resume.pdf";

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
        <h3 className="text-2xl underline mb-3">Projects:</h3>
        <div className="flex flex-wrap md:flex-nowrap gap-5 mb-10">
          <a
            href=""
            className="hover:scale-105 transition-all w-full md:w-auto"
          >
            <Card className="shadow-inner">
              <CardHeader className="pb-3">
                <CardTitle>Shufflefy</CardTitle>
                <CardDescription>A better shuffle for Spotify.</CardDescription>
              </CardHeader>
              <CardContent className="w-full md:w-96 h-60 p-2">
                <img
                  className="m-auto max-h-full rounded-sm"
                  src={shufflefy_screenshot}
                  alt=""
                />
              </CardContent>
            </Card>
          </a>

          <a
            href=""
            className="hover:scale-105 transition-all w-full md:w-auto"
          >
            <Card className="shadow-inner">
              <CardHeader className="pb-3">
                <CardTitle>Covid-19 Tracker</CardTitle>
                <CardDescription>
                  A covid-19 statistics dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full md:w-96 h-60 p-2">
                <img
                  className="m-auto max-h-full rounded-sm"
                  src={covid_tracker_screenshot}
                  alt=""
                />
              </CardContent>
            </Card>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
