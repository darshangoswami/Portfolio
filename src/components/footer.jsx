import { Button } from "./ui/button";

function footer() {
  return (
    <div className="mt-32">
      <h3>Get in Touch!</h3>
      <p className="text-3xl text-yellow-500">goswamd@purdue.edu</p>
      <div className="flex flex-col md:flex-row md:justify-between mb-10 mt-32">
        <p>
          Made with love ❤️ by Darshan Goswami <br /> &#169; - 2024
        </p>
        <nav className="flex flex-wrap md:flex-nowrap md:justify-between">
          <div>
            <Button asChild variant="link" className="text-md pl-0">
              <a href="https://github.com/darshangoswami">Github</a>
            </Button>
            <Button asChild variant="link" className="text-md">
              <a href="https://www.linkedin.com/in/darshangoswami/">Linkedin</a>
            </Button>
            <Button asChild variant="link" className="text-md">
              <a href="mailto:goswamd@purdue.edu">Email</a>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default footer;
