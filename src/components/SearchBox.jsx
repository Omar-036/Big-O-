import CategoriesList from "./CategoriesList";

function SearchBox() {
  return (
    <form className="md:flex hidden md:order-1 items-center gap-4 justify-center flex-1">
      <CategoriesList />
      <div className="searchBox flex-1 flex justify-start">
        <input
          type="text"
          placeholder="Search For Topics"
          className=" focus:outline-none border-2 border-primaryDarkBlue w-full rounded-full py-1 px-3 transition-all duration-200 md:focus:w-[90%]  outline-none md:w-[80%] placeholder:text-sm"
        />
        <img src="../src/assets/search.svg" className="w-4 -ml-6" alt="" />
      </div>
    </form>
  );
}

export default SearchBox;
