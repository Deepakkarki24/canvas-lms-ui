import React, { useState } from "react";
import Tab from "../components/Tab";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import MobileNav from "../components/MobileNav";

const CourseDetail = ({ courseDet, setShowSidebar, showSidebar }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const nav = useNavigate();

  return (
    <div className="w-full flex flex-row">
      {/* mobile */}
      <MobileNav onToggle={() => setShowSidebar(true)} />
      {/* sidebar*/}
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />

      <div className="p-6">
        <div className="mb-4 mt-8 text-gray-500 sm:mt-2">
          <span
            className="cursor-pointer hover:text-blue-400"
            onClick={() => nav("/")}
          >
            Dashboard
          </span>{" "}
          &gt; {courseDet.title}
        </div>
        <h1 className="text-2xl font-bold mb-2">{courseDet.title}</h1>

        <Tab
          tabs={["Overview", "Assignments", "Grades"]}
          onTabChange={(index) => setTabIndex(index)}
        />

        {tabIndex === 0 && <p>{courseDet.description}</p>}
        {tabIndex === 1 && <p>Here are the assignments.</p>}
        {tabIndex === 2 && <p>These are your grades.</p>}
      </div>
    </div>
  );
};

export default CourseDetail;
