import { ArrowRightIcon } from "@radix-ui/react-icons";

const AnimatedArrow = () => {
  return (
    <button className="mb-3 w-12 h-8 rounded-3xl md:group-hover:ml-3 md:group-hover:h-12 md:group-hover:rounded-full -rotate-45 md:group-hover:rotate-0 origin-top text-white bg-gray-600 md:group-hover:bg-white md:group-hover:text-black transition-all duration-300 flex items-center justify-center">
      <ArrowRightIcon className="h-6 w-6" />
    </button>
  );
};

export default AnimatedArrow;
