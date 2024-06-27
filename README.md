### To Do List Application

This JavaScript code snippet is for a simple to do list application that allows users to add, edit, delete tasks, and mark them as completed using checkboxes.

#### Features

1. **Adding Tasks:**
   - Users can input a task name into an input field and click on a button (`addBtn`) to add the task to the list.
   - If the input field is empty when the user attempts to add a task, an alert is shown and an error message (`error`) is displayed briefly.

2. **Display Task Count:**
   - The number of tasks (`count`) is dynamically updated and displayed in a designated element (`taskCount`).

3. **Editing Tasks:**
   - Each task in the list has an "Edit" button (`editTask`). Clicking this button allows the user to edit the task name directly in the input field (`newTaskInput`).
   - After editing and confirming the change, the original task is removed from the list and replaced with the edited task.

4. **Deleting Tasks:**
   - Each task has a "Delete" button (`deleteTask`). Clicking this button removes the task from the list.
   - Deleting a task decrements the task count (`count`) and updates the displayed count accordingly.

5. **Marking Tasks as Completed:**
   - Each task includes a checkbox (`taskCheck`). Checking or unchecking this checkbox toggles a "Completed" class on the task name, visually indicating its completion status.
   - Checking the checkbox decrements the task count (`count`), while unchecking increments it. The displayed count is updated accordingly.

#### Code Description

- **Selectors:**
  - `addBtn`: Button to add a new task.
  - `newTaskInput`: Input field where users enter new tasks.
  - `tasksContainer`: Container where tasks are dynamically added.
  - `taskCount`: Element displaying the current number of tasks.
  - `error`: Element to display an error message when adding tasks with an empty input.

- **Functions:**
  - `displayCount(count)`: Updates and displays the task count.
  - `addTask()`: Handles the logic for adding a new task.
    - Validates if the input field is empty and displays an error if so.
    - Constructs the HTML for a new task and appends it to `tasksContainer`.
    - Sets up event listeners for delete, edit, and checkbox functionalities within each task.

- **Event Listeners:**
  - Adds an event listener to `addBtn` to call `addTask()` when clicked.

#### Usage

This code provides a basic framework for managing tasks interactively within a web application. Users can add, edit, delete, and mark tasks as completed, with real-time updates to the displayed task count. It utilizes event delegation and DOM manipulation techniques to handle dynamic task operations efficiently.

This application can serve as a foundation for more complex task management systems by incorporating additional features such as task prioritization, due dates, or user authentication.# To-Do-Lists
