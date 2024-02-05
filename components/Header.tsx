"use client";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { FormEvent, useRef } from "react";

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }

    try {
      // call our api to activate scraper...
      //  /api/activateScrapper
    } catch (error) {
      // handle errors
    }
  };
  return (
    <header>
      <form
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-emerald-100 max-w-md mx-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-emerald-400 placeholder:text-emerald-300"
        />
        <button hidden>Search</button>
        <MagnifyingGlassCircleIcon className="h-6 w-6 text-emerald-300" />
      </form>
    </header>
  );
};

export default Header;
