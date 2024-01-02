import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CoursesProvider } from "./contexts/CoursesContext.jsx";
import { QuizProvider } from "./contexts/QuizContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoursesProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </CoursesProvider>
  </React.StrictMode>
);
