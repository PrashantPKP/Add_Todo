let todoList = [{
  name: 'Trust me, I’m an engineer. If I can’t fix it, it’s not broken.',
  Duedate: '2024-08-05'
}];

const storedTodoList = localStorage.getItem("todoList");
if (storedTodoList) {
todoList = JSON.parse(storedTodoList);
}

function Addtodo() {
const inputElement = document.querySelector(".NameInput");
let name = inputElement.value;
const DateElement = document.querySelector(".DateInput");
let Duedate = DateElement.value;

if (name === "" || Duedate === "") {
  alert("Please enter both task and due date!");
  return;
}

todoList.push({ name, Duedate });
inputElement.value = "";
DateElement.value = "";
renderTodoList();
saveToStorage(); 
}

function renderTodoList() {
let todoListHTML = "";
for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  const { name, Duedate } = todoObject;
  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <div>Sr No. ${i + 1}</div>
      <div style="flex-grow: 2; margin-left: 10px;">${name}</div>
      <div>${Duedate}</div>
      <button onclick="deleteTodo(${i})" class="DeleteItem">Delete</button>
    </div>
  `;
  todoListHTML += html;
}
document.querySelector(".container").innerHTML = todoListHTML;
}

function deleteTodo(index) {
todoList.splice(index, 1);
renderTodoList();
saveToStorage(); 
}

function saveToStorage() {
localStorage.setItem("todoList", JSON.stringify(todoList));
}

renderTodoList();
