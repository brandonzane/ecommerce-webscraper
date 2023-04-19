import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-sky-700/40" />
      <h1 className="text-3xl mt-2 text-black text-center font-bold mb-5">
        Welcome to the Online Store Scraper
      </h1>
      <h2 className="text-lg italic text-center text-black/50">
        If you're interested in some of our products feel free to check out our
        website
      </h2>

      <h3 className="text-lg text-center italic text-black/50">
        https://www.acromiatechnology.com
      </h3>
    </div>
  );
}

export default HomePage;
