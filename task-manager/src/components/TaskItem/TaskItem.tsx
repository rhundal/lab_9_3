import { type TaskItemProps } from "../../types";

// Create a TaskItem component that displays individual task information.

export default function TaskItem(props: TaskItemProps) {
  return (
    // <li key={props.task.id}>
    <div>
      <h1> {props.task.title}</h1>
      <p> {props.task.description}</p>
      <div>
        <h2> Priority: ${props.task.priority}</h2>
        <h2> Due: ${props.task.dueDate}</h2>
      </div>
    </div>
    // </li>
  );
}
