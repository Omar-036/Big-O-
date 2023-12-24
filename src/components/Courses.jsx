import { useState } from "react";

import Course from "./Course";

const initCourses = [
  {
    id: 1,
    name: "Data Structure",
    description: "Data Structure Description",
    topics: [
      {
        id: 1,
        name: "Linked list",
        description: "Linked List Description",
      },
    ],
  },
  {
    id: 2,
    name: "Algorithm",
    description: "Algorithm Description",
    topics: [
      {
        id: 1,
        name: "Red Black Tree",
        description: "Red Black Tree Description",
      },
    ],
  },
];

function CourseList() {
  const [courses, setCourses] = useState(initCourses);

  return (
    <div
      className={`absolute top-[4rem]  hidden ${
        childHover ? "block" : null
      } group-hover:block bg-white border `}
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
