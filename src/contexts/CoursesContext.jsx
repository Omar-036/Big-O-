import { createContext, useContext, useState } from "react";

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
      {
        id: 2,
        name: "Double Linked List",
        description: "Double Linked List Description",
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

const CoursesContext = createContext();

function CoursesProvider({ children }) {
  const [courses, setCourses] = useState(initCourses);

  return (
    <CoursesContext.Provider value={{ courses }}>
      {children}
    </CoursesContext.Provider>
  );
}

function useCourses() {
  const context = useContext(CoursesContext);
  if (context === undefined)
    throw new Error("Courses context was used outside provider");
  return context;
}

export { CoursesProvider, useCourses };
