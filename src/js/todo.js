const taskArr = [];

class Task {
  constructor(name, date, description) {
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

function createNewTask(name, date, description) {
  taskArr.push(new Task(name, date, description));
}

document.querySelector("#datePicker").valueAsDatetimeLocal = new Date();

// Main view
const tasksList = document.querySelector(".tasks");
const addTaskBtn = document.querySelector(".addTaskBtn");
const taskEditor = document.querySelector(".taskEditor");
const cancleEditorBtn = document.querySelector(".cancleAddingTask");
const userInputs = document.querySelectorAll("input, textarea");
// Editor
const addNewTaskBtn = document.querySelector(".addNewTaskBtn");
const cancleAddingTaskBtn = document.querySelector(".cancleAddingTask");

addTaskBtn.addEventListener("click", () => {
  taskEditor.style.left = "0";
});

cancleEditorBtn.addEventListener("click", () => {
  taskEditor.style.left = "100%";
});

addNewTaskBtn.addEventListener("click", function (e) {
  createNewTask(userInputs[0].value, userInputs[1].value, userInputs[2].value);
  console.log(taskArr);
});
