import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="group order-1 md:order-0 logo text-3xl font-bold">
      <Link
        to="/"
        className="cursor-pointer group-hover:text-primaryDarkBlue transition duration-200"
      >
        Big(O)
      </Link>
    </div>
  );
}

export default Logo;
