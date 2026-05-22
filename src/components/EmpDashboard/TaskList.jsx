import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

const TaskList = ({ data }) => {

  const taskInfo = data.tasks


  return (
    <div className="h-120 w-[95%] mx-auto bg-[#e5e5e5] rounded-3xl mt-10 py-5 px-5">
      <div id="noScroll" className=" flex flex-nowrap overflow-x-scroll gap-5">
        {data.tasks.map((elem, idx) => {
          if (elem.status === 'completed') return <CompleteTask key={idx} taskInfo={taskInfo[idx]} />;
          if (elem.status === 'failed') return <FailedTask key={idx} taskInfo={taskInfo[idx]} />;
          if (elem.status === 'active') return <AcceptTask key={idx} taskInfo={taskInfo[idx]} />;
          if (elem.status === 'new') return <NewTask key={idx} taskInfo={taskInfo[idx]} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
