import shufflefyScreenshot from "../assets/shufflefy_screenshot.jpeg";
import covidTrackerScreenshot from "../assets/covid-19-tracker_screenshot.jpeg";

const SelectedWork = () => {
  return (
    <div className="p-8">
      <div className="grid md:grid-cols-4 md:grid-rows-4 gap-8">
        <div className="md:col-span-2 md:row-span-2">
          <img
            src={shufflefyScreenshot}
            width={400}
            height={500}
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
            width={500}
            height={300}
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
    </div>
  );
};

export default SelectedWork;
