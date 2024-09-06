import shufflefyScreenshot from "../assets/shufflefy_screenshot.jpeg";
import covidTrackerScreenshot from "../assets/covid-19-tracker_screenshot.jpeg";

const SelectedWork = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="grid md:grid-cols-4 md:grid-rows-4 gap-8">
        <div className="md:col-span-2 md:row-span-2">
          <img
            src={shufflefyScreenshot}
            width={500}
            height={400}
            alt="Starbucks: otto project"
          />
          <h2 className="text-xl mt-4">Starbucks: otto</h2>
          <p className="text-sm text-gray-400">
            Creating a more humanistic brand into starbucks existing website.
          </p>
          <p className="text-sm text-yellow-600 mt-2">Visual design</p>
        </div>

        <div className="md:col-start-3 col-span-2 row-start-2 row-span-2">
          <img
            src={covidTrackerScreenshot}
            width={500}
            height={400}
            alt="Starbucks: otto project"
          />
          <h2 className="text-xl mt-4">Wishful</h2>
          <p className="text-sm text-gray-400">
            An inspirational wishing wall for the community to view and cast
            wishes.
          </p>
          <p className="text-sm text-yellow-600 mt-2">UX/UI - Front End Dev</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
