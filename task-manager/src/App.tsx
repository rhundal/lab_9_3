import { useState } from "react";

import { type Task } from "./types";
import { type TaskStatus } from "./types";
import { type TaskListProps } from "./types";

import TaskList from "./components/TaskList/TaskList";

import "./App.css";

function App() {
  /*
   tasks: Task[];
   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
   onDelete: (taskId: string) => void;
   */

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "",
      title: "",
      description: "",
      status: "pending",
      priority: "low",
      dueDate: "",
    },
  ]);
  const [status, setStatus] = useState("");

  let tasksArray: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "This is task 1",
      status: "pending",
      priority: "low",
      dueDate: "12/31/2023",
    },
    {
      id: "2",
      title: "Task 2",
      description: "This is task 2",
      status: "in-progress",
      priority: "medium",
      dueDate: "1/1/2024",
    },
    {
      id: "3",
      title: "Task 1",
      description: "This is task 3",
      status: "completed",
      priority: "high",
      dueDate: "1/2/2024",
    },
  ];

  function onStatusChangeFunction(taskId: string, newStatus: TaskStatus) {
    let selectedTask = tasksArray.find((task) => task.id === taskId);
    if (!selectedTask) return;
    // setTask(selectedTask);
    setTasks([...tasks, selectedTask]);
    setStatus(newStatus);
  }

  function onDeleteFunction(taskId: string) {
    let arrayAfterDeletion = tasksArray.filter((task) => task.id === taskId);
    setTasks(arrayAfterDeletion);
  }

  return (
    <TaskList
      tasks={tasks}
      onStatusChange={onStatusChangeFunction}
      onDelete={onDeleteFunction}
    />
  );
}

export default App;
