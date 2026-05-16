import React from "react";
import TaskCards from "./TaskCards";

const TaskList = ({data}) => {
  return (
    <div className="h-120 w-[95%] mx-auto bg-[#e5e5e5] rounded-3xl mt-10 py-5 px-5">
      <div id="noScroll" className=" flex flex-nowrap overflow-x-scroll gap-5">
        <TaskCards bgColor={`#ff6b6b`} />
        <TaskCards bgColor="#4ecdc4" />
        <TaskCards bgColor="#45b7d1" />
        <TaskCards bgColor="#96ceb4" />
        <TaskCards bgColor="#feca57" />
        <TaskCards bgColor="#ff9ff3" />
        <TaskCards />
      </div>
    </div>
  );
};

export default TaskList;
