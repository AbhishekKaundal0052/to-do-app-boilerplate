let task = document.getElementById('input');
let button = document.getElementById('button')
let toDoList = document.getElementById('todolist');

const storage =[];
button.onclick=click;
function click(){
storage.push(input.value)
console.log(storage)
input.value = '';
showToDo()
}
function showToDo(){
    toDoList.innerHTML='';
   storage.forEach(function(todo,index){
   toDoList.innerHTML += 
    `<li>
        ${todo}
        <a onclick=edithandle(${index})>EditTodo</a>
        <a onclick=deletehandle(${index})>delete&times</a>
    </li>`
    });
}
function edithandle(index){
    let newValue=prompt('Enter new To-do')
    storage.splice(index,1,newValue)
    showToDo()
}
function deletehandle(index){
    storage.splice(index,1)
    showToDo()
}