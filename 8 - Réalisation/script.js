let input = document.getElementById("taskInput");
let btn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

function load() {
  const saved = localStorage.getItem("tasks");
  if (!saved) return;

  const tasks = JSON.parse(saved);
  tasks.forEach(task => {
    addTask(task.text, task.done);
  });
}

function save() {
  let tasks = [];
  list.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.querySelector("span").textContent,
      done: li.querySelector("input").checked
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(text, done = false) {
  let li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" ${done ? "checked" : ""}> <span>${text}</span> <button>Delete</button>`;

  li.querySelector("input").addEventListener("change", () => {
    li.querySelector("span").style.textDecoration = li.querySelector("input").checked ? "line-through" : "none";
    save();
  });

  li.querySelector("button").addEventListener("click", () => {
    li.remove();
    save();
  });

  list.appendChild(li);
}

btn.addEventListener("click", () => {
  if (input.value.trim() === "") return alert("Please enter a task");
  addTask(input.value);
  input.value = "";
  save();
});

load();
