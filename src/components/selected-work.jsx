import shufflefyScreenshot from "../assets/shufflefy_screenshot.jpeg";
import covidTrackerScreenshot from "../assets/covid-19-tracker_screenshot.jpeg";
import { Button } from "./ui/button";

const SelectedWork = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="md:grid md:grid-flow-col md:grid-cols-4 lg:grid-cols-5 md:gap-12 lg:gap-22 xl:gap-32">
        <div className="md:col-start-1 md:col-span-2 row-span-2 mb-10">
          <a href="https://shufflefy.darshangoswami.com/" target="_blank">
            <img
              src={shufflefyScreenshot}
              alt="Shufflefy: UI to play Spotify with true shuffle"
            />
            <h2 className="text-xl mt-4">Shufflefy</h2>
          </a>
          <p className="text-sm text-gray-400">
            A better way to shuffle tracks with Spotify
          </p>
          <p className="text-sm text-yellow-600 mt-2">Flask - React</p>
        </div>

        <div className="md:col-start-3 md:col-span-2 lg:col-span-3 row-start-2 row-span-2">
          <a href="https://covid-tracker.darshangoswami.com/" target="_blank">
            <img
              src={covidTrackerScreenshot}
              alt="Covid-19 Tracker: Dashboard"
            />
            <h2 className="text-xl mt-4">COVID-19 Tracker</h2>
          </a>

          <p className="text-sm text-gray-400">
            A dashboard to get live data on ongoing COVID-19 cases around the
            world.
          </p>
          <p className="text-sm text-yellow-600 mt-2">React</p>
        </div>
      </div>
      <h2 className="space-mono-regular text-center md:text-2xl mt-20">
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
