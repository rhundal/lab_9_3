### Project Objective

Build a Task Management System (a Component) which:

1. displays a list of tasks
   1. each task shows task title, description, priority, due date
2. filter them by status [Pending, In Progress, Completed]
3. show different visual states based on task properties
4. provide Delete Button to delete the task

Optionally To do: (didnt attempt)

1. provide a button that sorts the tasks by due date
2. provide a button that adds a new task to the task list (This will require adding some type of form for the user to input the task details)
3. provide buttons to the TaskItem component that allow the user to move the task up and down the list

### How To Run Project

- cd Task-Manager/task-manager
- npm install
- npm run dev

### Reflections

1. How did you ensure unique keys for your list items?
   1. by passing key property/attribute on `<li>` items and by setting their value to `task.id`

2. What considerations did you make when implementing the filtering functionality?
   1. Intially I was writing code to filter in TaskList Component and completely forgot about the TaskFilter component, I then realized what I was missing and made corrections by moving the filter renderring logic in TaskFilter component and implementing the functions which actually apply the filtering in the TaskList Component - particularly the `visibleTasks` function. I basically check for each filter applied individually and return their respective boolean values based on which the ui reacts.
3. How did you handle state updates for task status changes?
   - I made use of `currentStatus` state variable in `TaskItem` component whose value I changed using `changeStatusFunction` which is a function called by onChange on respective dropdowns.
4. What challenges did you face when implementing conditional rendering?
   - I was lost initially, I started workign on and figured it out as I went through the assignment. I was particularly lost with how which component should be child and which should be parent but spending time on interfaces made it clear over time. I struggled alot with syntax at times and even logic for certain onChange handler functions, I had to google alot of issues.

### Known Bug

- <del> I just added more tasks and discovered the All Statuses and All Priorities is not functioning properly </del>
- Bug Fixed
  1. remove duplicate id in initial task array
  2. corrected data set to have all combinations
  3. fixed bug in TaskFilter component - checked functions (handleStatusChange, handlePriorityChange) and remove default value for `currentPriority` state variable which fixed the issue.
