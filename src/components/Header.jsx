import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-[0_5px_15px_-5px_rgba(0,0,0,0.4)]">
      <div className="container px-4 max-w-full mx-auto">
        <div className="flex justify-between h-16 gap-8 items-center">
          <Logo />
          <SearchBox />
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
