import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className="bg-[#F8F8F8] py-12">
      <div className="lg:container px-4">
        <h1 className="text-center heading-lg">
          Get fast and relevant Google search results
        </h1>

        <form
          className="mt-8 lg:mt-12 lg:px-72 flex gap-3 lg:gap-5 relative"
          onSubmit={handleSearch}
        >
          <div className="absolute top-3 lg:top-4 pl-4 lg:pl-5 text-slate-500">
            <label htmlFor="search" aria-label="search">
              <FaSearch />
            </label>
          </div>

          <input
            type="text"
            id="search"
            className="w-full pl-10 pr-5 py-2 lg:py-3 outline-none border border-slate-300 focus:border-blue-400 rounded-full"
            onChange={(e) => setText(e.target.value)}
          />

          <button
            type="submit"
            className=" px-8 lg:px-16 text-sm font-Montserrat border-2 border-red-300 hover:bg-green-400 hover:border-green-400 duration-300 rounded-full uppercase"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
