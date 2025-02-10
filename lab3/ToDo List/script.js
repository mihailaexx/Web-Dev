function addTask() {
  let taskInput = document.getElementById("task-add-input"); // input
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let taskList = document.getElementById("task-list"); // ul

  let li = document.createElement("li");
  li.classList.add("task-list-element", "flex-container");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-list-element-checkbox", "flex-container");
    checkbox.onchange = () => {
      li.children[1].classList.toggle("completed");
    };

    let taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    taskSpan.classList.add("task-list-element-text", "flex-container");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#128465"; // Trash emoji
    deleteBtn.classList.add("task-list-delete-button", "flex-container");
    deleteBtn.onclick = () => {
      if (confirm("Are you sure you want to delete this task?")) taskList.removeChild(li);
    };

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}