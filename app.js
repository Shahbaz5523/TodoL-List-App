// This is use to show add new todo app button
function addNewTodo(){
    let div = document.querySelector('div.newtask');
    div.style.display = 'flex';
    document.getElementById("task").focus();
}

// this is used to add todo task in list
function addTask(){
    let task = document.getElementById("task");
    if(task.value != ''){
        let taskContainer = document.getElementsByClassName('TaskContainer');
        let newTaskBox = document.querySelector('div.newtask');
        newTaskBox.style.display='none';
    
        // this is main div that contain task
        let div = document.createElement("div");
        div.setAttribute("class","TaskBox");
    
        // this is input tag that is used to add task value in it
        let inputTag = document.createElement("input");
        inputTag.setAttribute('type','text');
        inputTag.value = task.value;
        // i made it disable because we can make it editable later for update function
        inputTag.disabled = true;
    
        // this button i created to delete a task
        let editBtn = document.createElement("button");
        let editBtnText = document.createTextNode('Edit');
        editBtn.appendChild(editBtnText);
        editBtn.setAttribute('onclick','editTask(event)');
    
        // this button i created to delete a task
        let deleteBtn = document.createElement("button");
        let btnText = document.createTextNode('Delete');
        deleteBtn.appendChild(btnText);
        deleteBtn.setAttribute('onclick','deleteTask(event)');
    
        // now all created tags are appened in div tag an d div tag append in our task Container
        div.appendChild(inputTag);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        taskContainer[0].appendChild(div);
        task.value="";
    }
}

// this function to delete task
function deleteTask(e){
    e.target.parentNode.remove()
}

let edit = true;
// this funtion to edit task
function editTask(e){
    if(edit == true){
        e.target.previousElementSibling.disabled=false;
        e.target.previousElementSibling.focus();
        e.target.innerText='Update';
        edit = false;
    }else{
        e.target.previousElementSibling.disabled=true;
        e.target.innerText='Edit';
        edit = true;
    }
}

// this function remove all tasks
function removeAll(){
    let newTaskBox = document.querySelector('div.newtask');
    newTaskBox.style.display='none';
    let taskContainer = document.getElementsByClassName('TaskContainer');
    taskContainer[0].innerHTML = "";
}