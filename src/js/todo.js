let taskArr = [];

class Task {
  constructor(name, date, description) {
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

function updateDisplay() {
  tasksList.innerHTML = "";
  taskArr.forEach((task) => {
    tasksList.innerHTML += `
      <section class="task">
        <div class="task__title">
          <h1>${task.name}</h1>
          <button class="taskBtn deleteTaskBtn">x</button>
        </div>
        <p>${task.date}</p>
        <p class="task__description">${task.description}</p>
      </section>
    `;
    updateDeleteTaskBtn();
    saveTasks();
  });
}

function updateDeleteTaskBtn() {
  deleteTaskBtns = document.querySelectorAll(".deleteTaskBtn");
  deleteTaskBtns.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => {
      taskArr = taskArr.filter((_, taskIndex) => {
        return taskIndex != buttonIndex;
      });
      console.log(taskArr);
      updateDisplay();
    });
  });
}

function openEditor() {
  taskEditor.style.left = "0";
}

function closeEditor() {
  taskEditor.style.left = "100%";
}

function clearAllTasks() {
  taskArr = [];
  tasksList.innerHTML = `<div class="noTasksAlert">No planned tasks<div>`;
}

function createNewTask(name, date, description) {
  taskArr.push(new Task(name, date, description));
  updateDisplay();
  closeEditor();
}

document.querySelector("#datePicker").valueAsDatetimeLocal = new Date();

// Main view
const tasksList = document.querySelector(".tasks");
const addTaskBtn = document.querySelector(".addTaskBtn");
const clearAllBtn = document.querySelector(".clearAllTasksBtn");
let deleteTaskBtns = document.querySelectorAll(".deleteTaskBtn");
// Editor
const taskEditor = document.querySelector(".taskEditor");
const addNewTaskBtn = document.querySelector(".addNewTaskBtn");
const cancleEditorBtn = document.querySelector(".cancleAddingTask");
const userInputs = document.querySelectorAll("input, textarea");

clearAllBtn.addEventListener("click", () => {
  clearAllTasks();
});

addTaskBtn.addEventListener("click", () => {
  openEditor();
});

cancleEditorBtn.addEventListener("click", () => {
  closeEditor();
});

addNewTaskBtn.addEventListener("click", function (e) {
  createNewTask(userInputs[0].value, userInputs[1].value, userInputs[2].value);
});

updateDeleteTaskBtn();
