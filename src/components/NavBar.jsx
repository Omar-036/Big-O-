import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      {!isLogged ? (
        <nav className="order-2 md:order-2 ">
          <ul className="flex gap-4 text-md font-semibold items-center ">
            <li className="hidden md:block">
              <NavLink to="/">Link1</NavLink>
            </li>
            <li className="hidden md:block">
              <NavLink>Link2</NavLink>
            </li>
            <li>
              <NavLink className=" btn btn-red">Log in</NavLink>
            </li>
            <li>
              <NavLink
                to="/project1"
                className="btn btn-blue hidden md:inline-flex"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <t className="order-2">Profile image</t>
      )}
    </>
  );
}

export default NavBar;
