import shufflefyScreenshot from "../assets/shufflefy_screenshot.jpeg";
import covidTrackerScreenshot from "../assets/covid-19-tracker_screenshot.jpeg";
import { Button } from "./ui/button";

const SelectedWork = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="grid md:grid-cols-4 md:gap-32">
        <div className="md:col-span-2 md:row-span-2 mb-10">
          <img
            src={shufflefyScreenshot}
            className="md:max-w-96"
            alt="Starbucks: otto project"
          />
          <h2 className="text-xl mt-4">Shufflefy</h2>
          <p className="text-sm text-gray-400">
            A better way to shuffle tracks with Spotify
          </p>
          <p className="text-sm text-yellow-600 mt-2">Flask - React</p>
        </div>

        <div className="md:col-start-3 col-span-2 row-start-2 row-span-2">
          <img
            src={covidTrackerScreenshot}
            className="md:max-w-96 lg:max-w-[450px] xl:max-w-[500px]"
            alt="Starbucks: otto project"
          />
          <h2 className="text-xl mt-4">COVID-19 Tracker</h2>
          <p className="text-sm text-gray-400">
            A dashboard to get live data on ongoing COVID-19 cases around the
            world.
          </p>
          <p className="text-sm text-yellow-600 mt-2">React</p>
        </div>
      </div>
      <h2 className="text-center text-2xl">
        My code arhive of all previous
        <br /> work I've Played, Worked, and <br />
        Experimented with.
      </h2>
      <Button asChild className="mt-5 p-5 rounded-3xl">
        <a href="https://github.com/darshangoswami" target="_blank">
          Github Profile
        </a>
      </Button>
    </div>
  );
};

export default SelectedWork;
