import { type TaskItemProps } from "../../types";
import { useState } from "react";
// Create a TaskItem component that displays individual task information.

export default function TaskItem(props: TaskItemProps) {
  const [currentStatus, setCurrentStatus] = useState(props.task.status);

  function changeStatusFunction(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as any;
    setCurrentStatus(newStatus);
    props.onStatusChange(props.task.id, newStatus);
  }

  function handleDeleteFunction(e: React.MouseEvent<HTMLButtonElement>) {
    props.onDelete(props.task.id);
  }

  return (
    <div className="bg-slate-300 p-3 rounded-xl mt-5">
      <div className="flex flex-rows">
        <div className="flex flex-rows justify-start gap-100">
          <h1> {props.task.title}</h1>
          <div className="flex flex-rows justify-end gap-4">
            <div>
              <select
                value={currentStatus}
                onChange={changeStatusFunction}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2"
              >
                <option value="">Select a status</option>
                <option value="pending">pending</option>
                <option value="in-progress">in-progress</option>
                <option value="completed">completed</option>
              </select>
            </div>
            <div>
              <button onClick={handleDeleteFunction}> Delete Task</button>
            </div>
          </div>
        </div>
      </div>
      <p> {props.task.description}</p>
      <div>
        <h2> Priority: {props.task.priority}</h2>
        <h2> Due: {props.task.dueDate}</h2>
      </div>
    </div>
  );
}
