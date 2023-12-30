import { CoursesProvider } from "../contexts/CoursesContext";
import Courses from "./Courses";

function CategoriesList() {
  return (
    <div className="categories  h-16 flex items-center  group">
      <label
        htmlFor=""
        className="font-semibold cursor-pointer flex items-center gap-1"
      >
        categories{" "}
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </label>
      <CoursesProvider>
        <Courses />
      </CoursesProvider>
    </div>
  );
}

export default CategoriesList;
