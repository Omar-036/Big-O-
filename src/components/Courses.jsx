import Course from "./Course";
import { useCourses } from "../contexts/CoursesContext";

function CourseList() {
  const { courses } = useCourses();

  return (
    <div
      className={`absolute top-[4rem]  hidden  group-hover:block bg-white border `}
    >
      <ul className=" relative ">
        {courses.map((course) => (
          <Course name={course.name} id={course.id} key={course.id} />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
