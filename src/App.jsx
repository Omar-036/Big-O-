import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Project1 from "./pages/Project1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/project1" element={<Project1 />} />
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
