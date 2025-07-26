import React from "react";
import { Home, Book, Calendar, Mail, HelpCircle, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: <Home />, name: "Dashboard", path: "/" },
  { icon: <Book />, name: "Courses", path: "/courses" },
  { icon: <Calendar />, name: "Calendar", path: "/calendar" },
  { icon: <Mail />, name: "Inbox", path: "/inbox" },
  { icon: <HelpCircle />, name: "Help", path: "/help" },
];

const Sidebar = ({ show = true, onClose = () => {} }) => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <>
      {show && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-80 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-700 text-white z-50 transform transition-transform duration-300
        ${
          show ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 sm:w-2 md:w-16 lg:w-44 md:relative md:flex md:flex-col`}
      >
        <div className="flex flex-col py-6 px-3 space-y-4 w-full">
          {/* Close button on mobile */}
          <div className="flex justify-end lg:hidden">
            <X
              className="md:hidden lg:hidden cursor-pointer"
              onClick={onClose}
            />
          </div>

          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                nav(item.path);
                onClose();
              }}
              className={`flex items-center gap-3 px-2 py-2 rounded cursor-pointer text-lg hover:bg-gray-600
              ${location.pathname === item.path ? "bg-gray-950" : ""}`}
            >
              {item.icon}
              <span className="md:hidden lg:inline">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
