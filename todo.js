const TodoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");

function getTodo(event) {
  event.preventDefault();
  const Newtodo = document.querySelector("#todo-form input");
  console.log(Newtodo.value);
  Newtodo.value = "";
}

todoForm.addEventListener("submit", getTodo);
