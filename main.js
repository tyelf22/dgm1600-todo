//assign elements to variables
const newTask = document.querySelector('#new-task');   //use of const and let variables
const addTaskBtn = document.querySelector('#addTask');

const toDoUl = document.querySelector(".todo-list ul");
const completeUl =  document.querySelector(".complete-list ul");


//define functions

//task list item
let createNewTask = (task) => {             // use of proper arrow functions
  console.log("Creating new task...");
  
  //create new list item
  let listItem = document.createElement("li"); //<li>
  let checkBox = document.createElement("input"); //checkbox
  let label = document.createElement("label"); // <label>
  
  
  //input text into a label
  label.innerText = task;
  
  //add check property
  checkBox.type = "checkbox";
  checkBox.className = "checkmark"
  
  //add the items to the list
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  //merge together
  return listItem;  
  
};


//add new task
let addTask = () => {                       
  console.log("Adding new task...");
  //Inputted text into a let
  let listItem = createNewTask(newTask.value);
  //new list item in list
  toDoUl.appendChild(listItem); 
  //clear
  newTask.value="";
  
  //put items together in completed
  bindIncompleteItems(listItem, completeTask);

};

//delete previous item
let delItem = () => {
  var list = document.querySelector("ul");
  list.removeChild(list.childNodes[0]);
}


addTaskBtn.addEventListener("click", addTask);


