const toDoForm=document.querySelector("#todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector('#todo-list');
let toDos=[];

const TODOS_KEY='todos';
//**현재 toDos배열을 localStorage에 저장한다.  */
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteTodo(event){
    const li=event.target.parentElement.parentElement;
    toDos=toDos.filter((toDo)=> toDo.id!==parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintTodo(newTodoObj){
    const li=document.createElement('li');
    li.id=newTodoObj.id;
    const span=document.createElement('span');
    span.innerText=newTodoObj.text;
    const btn=document.createElement('button');
    btn.id='todo-btn';
    // btn.innerText='❌';

    const btn_i=document.createElement('img');
    btn_i.src='img/etc/del_btn.png';
    btn.appendChild(btn_i);

    btn.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSumbit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";

    const newTodoObj={
        text:newToDo,
        id:Date.now(),
    };
    
    paintTodo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumbit);

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintTodo);
}