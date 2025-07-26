import React from "react";
import { todos } from "../data/mockData";

const Todo = () => {
  return (
    <div className="bg-white text-black rounded-xl p-4">
      <h3 className="text-[20px]">To-Do</h3>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" />
          <span className="mx-2">{todo}</span>
        </div>
      ))}
    </div>
  );
};

export default Todo;
