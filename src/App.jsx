import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

import Courses from "./pages/Courses";

import PageNotFound from "./pages/PageNotFound";
import LinkedList from "./pages/LinkedList";
import QuizApp from "./pages/QuizApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />

        <Route path="courses">
          <Route index element={<Courses />} />
        </Route>
        <Route path="topic">
          <Route path="linked-list" element={<LinkedList />} />
          <Route path="linked-list/quiz" element={<QuizApp />} />
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
