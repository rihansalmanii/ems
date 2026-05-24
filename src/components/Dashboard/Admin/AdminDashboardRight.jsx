import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { AuthContext } from "../../../contexts/AuthProvider";


const AdminDashboardRight = () => {

  const authData = useContext(AuthContext);
  const { employees } = authData;

  return (
    <div className="rounded-3xl h-[79vh] w-[70%] bg-[#e2e2e2] p-5 flex flex-col">
      <div className="flex gap-3">
        <div className="flex w-[80%] items-center bg-white rounded-3xl   py-2 gap-3 px-3">
          <span className="text-xl">
            <IoSearch />
          </span>
          <input type="text" className="outline-none w-full border-0 text-lg" />
        </div>
        <button className="bg-black text-white px-10 py-2 rounded-3xl font-semibold text-lg">
          Search
        </button>
      </div>
      <div id="noScroll" className="h-full w-full bg-[#ffffff] rounded-3xl mt-4 p-4 flex flex-col gap-2 overflow-hidden">
        <div className="w-full h-fit flex justify-between px-7 bg-black text-white py-5 rounded-xl text-lg font-semibold">
          <p>Employee Name</p>
          <p>New Task</p>
          <p>Active Task</p>
          <p>Completed</p>
          <p>Failed</p>
        </div>

      <div id="noScroll" className="overflow-auto flex flex-col gap-3">
         {employees.map((employee, idx) => {
        return <div key={idx} className="w-full h-fit flex justify-between px-7 border-2 border-gray-200 py-5 rounded-xl text-lg font-medium cursor-pointer hover:bg-gray-200">
          <p className="">{employee.firstName}</p>
          <p className="text-yellow-600">{employee.taskCounts.newTask}</p>
          <p className="text-blue-500">{employee.taskCounts.active}</p>
          <p className="text-green-700 font-semibold">{employee.taskCounts.completed}</p>
          <p className="text-red-600">{employee.taskCounts.failed}</p>
        </div>
       }) } 
        
       
       </div> 

      </div>
    </div>
  );
};

export default AdminDashboardRight;
