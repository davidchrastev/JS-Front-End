// <script>
//       window.onload = async function () {
//         const urlParams = new URLSearchParams(window.location.search);
//         const userId = urlParams.get("id");
//
//         const tasksResponse = await fetch(
//           `http://localhost:8080/tasks/task/all/${userId}`
//         );
//         if (tasksResponse.ok) {
//           const userDTO = await tasksResponse.json();
//           const tasks = userDTO.tasks;
//           console.log("Tasks:", tasks);
//           tasks.forEach((task) => {
//             // display each task
//           });
//         } else {
//           console.log("Failed to load tasks:", tasksResponse.status);
//         }
//       };
//
//       // Handle adding a new task
//       const addTaskForm = document.getElementById("add-task-form");
//       const urlParams = new URLSearchParams(window.location.search);
//       const userId = urlParams.get("id");
//       addTaskForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const descriptionInput = document.getElementById("description");
//         const description = descriptionInput.value;
//         const body = JSON.stringify({ description, completionStatus: false });
//         fetch(`http://localhost:8080/tasks/save/task/${userId}`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body,
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             const task = data.tasks[data.tasks.length - 1];
//             const tasksList = document.getElementById("tasks");
//             const taskListItem = document.createElement("li");
//             taskListItem.innerHTML = `
//               <input type="checkbox" id="task-${task.id}">
//               <label for="task-${task.id}">${task.description}</label>
//               <button class="delete-button" data-task-id="${task.id}">Delete</button>
//             `;
//             tasksList.appendChild(taskListItem);
//             descriptionInput.value = "";
//           })
//           .catch((error) => {
//             console.error("Failed to add task:", error);
//           });
//       });
//
//       // Handle deleting a task
//       const tasksList = document.getElementById("tasks");
//       tasksList.addEventListener("click", (event) => {
//         if (event.target.classList.contains("delete-button")) {
//           const taskId = event.target.getAttribute("data-task-id");
//           fetch(`/tasks/tasks/delete`, {
//             method: "DELETE",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ taskId }),
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               const taskListItem = event.target.closest("li");
//               taskListItem.remove();
//             })
//             .catch((error) => {
//               console.error("Failed to delete task:", error);
//             });
//         }
//       });
//     </script>