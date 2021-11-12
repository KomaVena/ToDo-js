// Селекторы
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoUl = document.querySelector(".todo-ul");
// Событие  
todoButton.addEventListener("click", addTodo);
todoUl.addEventListener("click", btnDelete);
todoUl.addEventListener("click", btnAdd);
// Функции
function addTodo(event) {
    event.preventDefault();
    // Создание элемента div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Создание элемента li
    const newTodo = document.createElement("li");
    if (todoInput.value !== "") {

        newTodo.innerText = todoInput.value;

        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //+
        const plusButton = document.createElement("button");
        plusButton.innerHTML = 'Completed'
        plusButton.classList.add("plusBtn");
        todoDiv.appendChild(plusButton);
        //-
        const minusButton = document.createElement("button");
        minusButton.innerHTML = 'Delete'
        minusButton.classList.add("minusBtn");
        todoDiv.appendChild(minusButton);
        todoUl.appendChild(todoDiv);


        //при обновление пустая строка 
        todoInput.value = "";
    } else {
        alert("Enter text!");
    }


}
//  функция удаления 
function btnDelete(event) {
    const item = event.target;
    if (item.classList[0] === "minusBtn") {
        const todo = item.parentElement;
        todo.remove();
    }
}
//  функция добавления
function btnAdd(event) {
    const item = event.target;
    if (item.classList[0] === "plusBtn") {
        const todo = item.parentElement;
        todo.classList.add("btnAdd");
    }
}
// функция сохранения информации 
function saveInfo(event) {

}