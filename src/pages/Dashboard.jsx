import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/mockData.js";
import Todo from "../components/Todo.jsx";
import Calendar from "../components/Calendar.jsx";
import MobileNav from "../components/MobileNav.jsx";

const Dashboard = ({ setCourseDet, setShowSidebar, showSidebar }) => {
  const [studentName, setStudentName] = useState("Deepak");
  const date = new Date();
  return (
    <div className="w-full flex relative bg-gray-200">
      <MobileNav onToggle={() => setShowSidebar(true)} />
      {/* sidebar*/}
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />
      {/* sidebar*/}

      <div className="flex-1/2">
        <div className="grid lg:grid-cols-[2fr_1fr]">
          {/* left */}
          <div className="w-full text-black p-10 grid grid-cols-1">
            {/* Header */}
            <div className="grid grid-cols-1 col-span-1 mt-4">
              <div className="w-full">
                <h2 className="font-bold text-3xl">Welcome, {studentName}</h2>
                <span className="text-[18px]">{date.toDateString()}</span>
              </div>
              {/* Header */}

              {/* Course Card */}
              <div className="w-full mt-10 grid grid-cols-1 gap-6 sm:gap-3 lg:grid-cols-3 md:grid-cols-2">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    setCourseDet={setCourseDet}
                  />
                ))}
              </div>
              {/* Course Card */}
            </div>
          </div>
          {/* left */}

          {/* right */}
          <div className="w-full md:grid-cols-2 py-10 px-5 max-h-[250px] grid lg:grid-cols-1 gap-4 col-span-1">
            {/* todo */}
            <Todo />
            {/* todo */}

            {/* calender */}
            {/* calender */}
            <Calendar />
            {/* calender */}
            {/* calender */}
          </div>
          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
