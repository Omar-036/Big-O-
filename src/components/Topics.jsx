import { useCourses } from "../contexts/CoursesContext";
import Topic from "./Topic";

function Topics({ id }) {
  const x = useCourses();
  const f = x.courses.find((course) => course.id === id);

  return (
    <div className="absolute bg-white border  top-[-1px] left-[100%]  ">
      <ul className="">
        {f.topics.map((topic) => (
          <Topic name={topic.name} key={topic.id} />
        ))}
      </ul>
    </div>
  );
}

export default Topics;
