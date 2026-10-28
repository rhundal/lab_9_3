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

  const [tasks, setTasks] = useState<Task[]>(tasksArray);
  function onStatusChangeFunction(taskId: string, newStatus: TaskStatus) {
    let selectedTask = tasksArray.find((task) => task.id === taskId);
    if (!selectedTask) return;

    setTasks(
      tasks.map((task) =>
        task === selectedTask ? { ...task, status: newStatus } : task,
      ),
    );
  }

  function onDeleteFunction(taskId: string) {
    let arrayAfterDeletion = tasksArray.filter((task) => task.id !== taskId);
    setTasks(arrayAfterDeletion);
  }

  return (
    <TaskList
      tasks={tasks}
      // this function gets the status of selected task from TaskList Component
      onStatusChange={onStatusChangeFunction}
      // this function gets the id of selected task to be deleted from TaskList Component
      onDelete={onDeleteFunction}
    />
  );
}

export default App;
