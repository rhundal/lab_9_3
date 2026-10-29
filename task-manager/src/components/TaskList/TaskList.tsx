import { type TaskStatus } from "../../types";
import { type Task } from "../../types";
import { type TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

import { useState } from "react";

export default function TaskList(props: TaskListProps) {
  let tasksArrayReceived = props.tasks;
  let onStatusChange = props.onStatusChange;
  let onDeleteFunc = props.onDelete;

  //   let allStatuses: TaskStatus[] = tasksArrayReceived.map((task) => task.status);

  const [currentStatuses, setCurrentStatuses] = useState<TaskStatus[]>([
    "pending",
    "in-progress",
    "completed",
  ]);

  function changeStatusFunction(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as any;
    // setCurrentStatus(newStatus);
    // props.onStatusChange(props.task.id, newStatus);
  }

  return (
    <>
      <div className="bg-slate-200 flex justify-center items-center p-6 min-h-screen">
        <div className="p-5 justify-start w-[50%] border-2 border-red-200 bg-white rounded-xl shadow-sm">
          {/* Header Section */}
          <div className="flex flex-row gap-10 border-b pb-3 mb-5 font-semibold text-gray-700">
            <h1>Status</h1>
            <div>Priority</div>
          </div>

          {/* Global Filters Dropdown Area (If intended for sorting/filtering) */}
          <div className="mt-5 flex flex-row gap-10 items-center">
            <div>
              <select
                className="rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
                onChange={(e) => {
                  // Optional: Put global filter logic here if needed
                }}
              >
                {currentStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <ul className="space-y-4">
              {tasksArrayReceived.map((task) => (
                <li key={task.id}>
                  <TaskItem
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDeleteFunc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  //   return (
  //     <>
  //       <div className="bg-slate-200 flex justify-center items-center m-25">
  //         <div className="p-5 justify-start w-[50%] border-2 border-red-200">
  //           <div className="flex flex-rows gap-10">
  //             <h1> Status</h1>
  //             <div> Priority </div>
  //           </div>
  //           <div className="mt-5 flex flex-rows gap-10">
  //             <div>
  //               {tasksArrayReceived.map((task) => (
  //       <div key={task.id} className="bg-slate-300 p-3 rounded-xl mt-5">
  //         <h1>{task.title}</h1>

  //         {/* There is only ONE select element per task */}
  //         <select
  //           value={task.status}
  //           onChange={(e) => changeStatusFunction(task.id, e.target.value as any)}
  //           className={`w-full rounded-lg border border-gray-300 px-3 py-2 ${
  //             task.status === "pending"
  //               ? "bg-yellow-100 text-yellow-700"
  //               : task.status === "in-progress"
  //                 ? "bg-white text-blue-400"
  //                 : task.status === "completed"
  //                   ? "bg-white text-green-400"
  //                   : "bg-white text-black"
  //           }`}
  //                       >
  //                      {currentStatuses.map((status) => (
  //             <option key={status} value={status}>
  //               {status}
  //             </option>
  //           ))}

  //         </select>
  //             </div>
  //         ))}

  //             <div> dd 2</div>
  //           </div>

  //           <div className="mt-10 flex flex-col gap-5">
  //             <ul>
  //               {tasksArrayReceived.map((task) => {
  //                 return (
  //                   // I kept TaskItem and TaskLists components as a presentaiton component only.
  //                   <li key={task.id}>
  //                     {" "}
  //                     <TaskItem
  //                       task={task}
  //                       onStatusChange={onStatusChange}
  //                       onDelete={onDeleteFunc}
  //                     />
  //                   </li>
  //                 );
  //               })}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
}
