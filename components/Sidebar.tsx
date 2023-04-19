import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-sky-700">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-sky-700/50" />

        <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-bold">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-center text-xs">
          Finding the unfindable
        </h2>
        <ul>
          {/* SideRow */}
          {/* SideRow */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
