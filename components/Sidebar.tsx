import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-emerald-600">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-emerald-600" />

        <h1 className="hidden md:inline text-center text-3xl mt-2 mb-2 font-bold">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-center text-xs italic">
          Finding impossible prices
        </h2>
      </div>

      <ul>
        {/* Sidebar Row */}
        {/* Sidebar Row */}
        {/* Sidebar Row */}
        {/* Sidebar Row */}
        {/* Sidebar Row */}
      </ul>
    </div>
  );
};

export default Sidebar;
