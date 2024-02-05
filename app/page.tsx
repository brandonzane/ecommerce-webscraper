import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-24 w-64 text-emerald-600/20" />

      <h1 className="text-3xlmt-2 text-black font-bold mb-5">
        Welcome to the Amazon Web Scraper
      </h1>

      <h2 className="text-lg italic text-center text-black/50">
        Search for any product to get started
      </h2>
    </div>
  );
};

export default HomePage;
