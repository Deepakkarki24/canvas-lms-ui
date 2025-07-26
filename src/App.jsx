import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import CourseDetail from "./pages/CourseDetail";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const [courseDet, setCourseDet] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              setCourseDet={setCourseDet}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          }
        />
        <Route
          path="/course/:id"
          element={
            <CourseDetail
              courseDet={courseDet}
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
