


const todoInput = document.querySelector('.todo-inupt');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


  

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', ADDorDelete);


function addTodo(event){
    event.preventDefault(); //stops button from refreshing/submiting form 
   
    // create todo div with class 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo'); // creates a class

    //create List element with class 
    const newTodo = document.createElement('li');
    newTodo.classList.add('newTodo');
    newTodo.innerText = todoInput.value; // adds text inside 
    todoDiv.appendChild(newTodo); //adds "newTodo" INSIDE in todoDiv

    //create checked button
    const checkedButton = document.createElement('button');
    checkedButton.classList.add('checkedButton');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';//adds HTML inside button tags <botton> innerHTML </button>
    todoDiv.appendChild(checkedButton);


    // creates delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);


    todoList.appendChild(todoDiv);

    todoInput.value = '';

}


function ADDorDelete(event){
    const target = event.target;
    
    if(target.classList[0] === 'deleteButton'){
        const parentElement = target.parentElement;
        
        parentElement.remove();

    }


    if(target.classList[0] === 'checkedButton'){
        const parentElement = target.parentElement;
        parentElement.classList.toggle('completed');
    }

}







