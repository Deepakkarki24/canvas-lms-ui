import React, { useState } from "react";

const Tab = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index); // notify parent to show correct section
  };

  return (
    <div className="flex space-x-4 border-b mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(index)}
          className={`pb-2 px-3 border-b-2 ${
            index === activeTab
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-blue-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
