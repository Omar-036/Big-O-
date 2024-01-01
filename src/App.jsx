import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

import Courses from "./pages/Courses";

import { useCourses } from "./contexts/CoursesContext";
import { formatName } from "./components/Topic";
import PageNotFound from "./pages/PageNotFound";
import LinkedList from "./pages/LinkedList";

function App() {
  const { courses } = useCourses();
  console.log(formatName(courses[0].name));

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />

        <Route path="courses">
          <Route index element={<Courses />} />
        </Route>
        <Route path="topic">
          <Route path="linked-list" element={<LinkedList />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    // <div className="container mx-auto space-y-8 py-8">
    //   <EmailSubscribe />
    //   <Cards />
    //   <ProductCard />
    // </div>
  );
}

export default App;
