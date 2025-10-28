let input = document.getElementById("taskInput");
let btn = document.getElementById("addBtn");
let list = document.getElementById("taskList"); 

btn.onclick = function() {
  if (input.value === "") return alert("insert some text");

  let li = document.createElement("li");
  li.innerHTML = "<input type='checkbox'> <span>" + input.value + "</span> <button>delete</button>";
  list.appendChild(li);
  input.value = "";
  save();
};

list.onclick = function(e) {
  if (e.target.tagName === "BUTTON") e.target.parentElement.remove();
  if (e.target.type === "checkbox")
    e.target.parentElement.style.textDecoration = e.target.checked ? "line-through" : "none";
  save();
};

function save() {
  localStorage.setItem("tasks", list.innerHTML);
}

function load() {
  list.innerHTML = localStorage.getItem("tasks");
}
load();
