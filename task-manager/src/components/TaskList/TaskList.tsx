import { type TaskStatus } from "../../types";
import { type Task } from "../../types";
import { type TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props: TaskListProps) {
  let tasksArrayReceived = props.tasks;
  let onStatusChange = props.onStatusChange;
  let onDeleteFunc = props.onDelete;

  return (
    <>
      <div className="bg-slate-200 flex justify-center items-center m-25">
        <div className="p-5 justify-start w-[50%] border-2 border-red-200">
          <div className="flex flex-rows gap-10">
            <h1> Status</h1>
            <div> Priority </div>
          </div>
          <div className="mt-5 flex flex-rows gap-10">
            <div> dd 1</div>
            <div> dd 2</div>
          </div>
          <div className="mt-10 flex flex-col gap-5">
            <ul>
              {tasksArrayReceived.map((task) => {
                return (
                  // I kept TaskItem and TaskLists components as a presentaiton component only.
                  <li key={task.id}>
                    {" "}
                    <TaskItem
                      task={task}
                      onStatusChange={onStatusChange}
                      onDelete={onDeleteFunc}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
