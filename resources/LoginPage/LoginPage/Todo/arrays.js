
let todoList = []; 
showTasks();

function addTodo()
{
   let inputElem = document.querySelector('.js-todo-input');
   const name = inputElem.value;

   const dateInputElement = document.querySelector('.js-date');
   const dueDate = dateInputElement.value;
   

   todoList.push({
    name: name,
    dueDate: dueDate
   });
 
   inputElem.value = '';
   showTasks();

}


function showTasks()
{
    let todoListHTML = '';

   /* 
            USING FOR LOOP

   for(let i = 0; i < todoList.length; i++)
    {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const htmlElem = `
        <div class="task-name">${name}</div>
        <div class="task-due-date">${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            showTasks();
        " class="delete-button">Delete</button>`;

        todoListHTML = todoListHTML + htmlElem;
    }

    */

    //          USING .forEach(value,index) in array

    todoList.forEach(function(todoObject , i){
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const htmlElem = `
        <div class="task-name">${name}</div>
        <div class="task-due-date">${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            showTasks();
        " class="delete-button">Delete</button>`;

        todoListHTML = todoListHTML + htmlElem;
    });
    document.querySelector('.js-show-tasks').innerHTML = todoListHTML;

}

async function updateTodo(){
    
    let APIurl = "http://localhost:8000/"
    const res = await axios.post((APIurl + "update-todo"), data);
}