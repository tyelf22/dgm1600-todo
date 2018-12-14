//SELECT ELEMENTS AND ASSIGN THEM TO VARS
let newTask = document.querySelector('#new-task');
let addTaskBtn = document.querySelector('#addTask');

let toDoUl = document.querySelector(".todo-list ul");
let completeUl =  document.querySelector(".complete-list ul");


//CREATE FUNCTIONS

//CREATING THE ACTUAL TASK LIST ITEM
let createNewTask = (task) => {
  console.log("Creating task...");
  
  //SET UP THE NEW LIST ITEM
  let listItem = document.createElement("li"); //<li>
  let checkBox = document.createElement("input"); //checkbox
  let label = document.createElement("label"); // <label>
  
  
  //PULL THE INPUTED TEXT INTO LABEL
  label.innerText = task;
  
  //ADD PROPERTIES
  checkBox.type = "checkbox";
  
  //ADD ITEMS TO THE LI
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  //EVERYTHING PUT TOGETHER
  return listItem;  
  
};

//ADD THE NEW TASK INTO ACTUAL INCOMPLETE LIST
let addTask = () => {
  console.log("Adding task...");
  //FOR CLARITY, GRAB THE INPUTTED TEXT AND STORE IT IN A let
  let listItem = createNewTask(newTask.value);
  //ADD THE NEW LIST ITEM TO LIST
  toDoUl.appendChild(listItem); 
  //CLEAR THE INPUT
  newTask.value="";
  
  //BIND THE NEW LIST ITEM TO THE INCOMPLETE LIST
  bindIncompleteItems(listItem, completeTask);

};


addTaskBtn.addEventListener("click", addTask);


