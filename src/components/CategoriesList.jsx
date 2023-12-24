import { CoursesProvider } from "../contexts/CoursesContext";
import Courses from "./Courses";

function CategoriesList() {
  return (
    <div className="categories  h-16 flex items-center  group">
      <label htmlFor="" className=" cursor-pointer flex items-center gap-1">
        categories{" "}
        <img
          className="mt-0"
          src="../src/assets/line-angle-down-icon.svg"
          width="12"
          alt=""
        />
      </label>
      <CoursesProvider>
        <Courses />
      </CoursesProvider>
    </div>
  );
}

export default CategoriesList;
