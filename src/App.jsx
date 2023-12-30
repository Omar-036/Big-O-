import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Project1 from "./pages/Project1";
import RedBlackTree from "./components/RedBlackTree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="courses">
          <Route path="algorithm">
            <Route path="red-black-tree" element={<RedBlackTree />}></Route>
          </Route>
        </Route>
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
