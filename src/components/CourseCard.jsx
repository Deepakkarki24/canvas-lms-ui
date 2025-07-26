import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course, setCourseDet }) => {
  let nav = useNavigate();
  return (
    <div className="rounded w-full min-h-fit text-white">
      <div className={`${course.color} rounded-t p-4`}>
        <h3 className="font-semibold text-[18px]">{course.title}</h3>
        <span className="text-[14px]">{course.instructor}</span>
        <div className="bg-gray-400 rounded w-full mt-2">
          <div
            className="bg-white rounded h-2"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
      <div
        onClick={() => {
          nav(`course/${course.id}`);
          setCourseDet(course);
        }}
        // onClick={() => console.log("click")}
        className="bg-white cursor-pointer hover:bg-gray-100 rounded-b px-4 py-2 text-black"
      >
        <span>Go to Course</span>
      </div>
    </div>
  );
};

export default CourseCard;
