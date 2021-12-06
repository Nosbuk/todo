const tasksArr = [];

function Task(name, date, description) {
  this.name = name;
  this.date = date;
  this.description = description;
  this.type = type;
}

document.querySelector("#datePicker").valueAsDatetimeLocal = new Date();
const tasksList = document.querySelector(".tasks");
const addTaskBtn = document.querySelector(".addTaskBtn");
const taskEditor = document.querySelector(".taskEditor");
const body = document.querySelector(".body");
const cancleEditorBtn = document.querySelector(".cancleAddingTask");

addTaskBtn.addEventListener("click", () => {
  taskEditor.style.left = "0";
  body.style.overflowY = "hidden";
});

cancleEditorBtn.addEventListener("click", () => {
  taskEditor.style.left = "100%";
  body.style.overflowY = "scroll";
});
