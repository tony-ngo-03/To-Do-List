function getDayOfWeek(dayIndex){
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayOfWeek[dayIndex];
}

function getNameOfMonth(monthIndex){
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return month[monthIndex];
}

function setHeader(){
    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = getNameOfMonth(date.getMonth());
    let currentYear = date.getFullYear();
    let currentNameOfDay = getDayOfWeek(date.getDay());
    let currentDate = `${currentNameOfDay}, ${currentMonth} ${currentDay}, ${currentYear}`;
    document.getElementById('date').innerHTML = currentDate;
}

document.addEventListener("DOMContentLoaded", function(){
    setHeader();
})


class Task{
    constructor(id, taskMessage){
        this.id = id;
        this.message = taskMessage;
    }
}

window.allTasks = [];

function addTask(task){
    let newTask = new Task(allTasks.length,task);
    allTasks.push(newTask);

    const listItem = document.createElement("li");
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = task;
    listItem.appendChild(taskParagraph);

    const taskList = document.getElementById("toDoTaskList");
    taskList.appendChild(listItem);
}

function removeTask(number) {
    const taskList = document.getElementById("toDoTaskList");
    if (number >= 1 && number <= allTasks.length) {
      let currentIndex = 0;
      let listItemToRemove;
      for (let i = 0; i < taskList.childNodes.length; i++) {
        const node = taskList.childNodes[i];
        if (node.nodeType === 1) {
          currentIndex++;
          if (currentIndex === number) {
            listItemToRemove = node;
            break;
          }
        }
      }    
      if (listItemToRemove) {
        allTasks.splice(number - 1, 1);
        taskList.removeChild(listItemToRemove);
      }
    }
  }
  

const taskForm = document.getElementById("taskForm");
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

const deleteTaskForm = document.getElementById("deleteTaskForm");
deleteTaskForm.addEventListener("submit", function (event){
    event.preventDefault();
    const input = document.getElementById('delTask');
    const taskToDel = Number(input.value.trim());
    removeTask(taskToDel);
    input.value = "";
});

