import { Link } from "react-router-dom";
import Topics from "./Topics";
import { useState } from "react";

import { formatName } from "./Topic";
// eslint-disable-next-line react/prop-types
function Course({ name, id }) {
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(!isHover);
  }

  return (
    <li className="flex" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Link
        className={`links  ${isHover ? "isHovered" : ""}`}
        to={`/courses/${formatName(name)}`}
      >
        <h3>{name}</h3>
        <span>
          <svg
            className="transform scale-[0.3]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </span>
      </Link>

      {isHover ? <Topics id={id} /> : null}
    </li>
  );
}

export default Course;
