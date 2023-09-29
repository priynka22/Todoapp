function Todo(){
    let x = document.getElementById("add").value;

    if( x == "")
    {
        alert("Task is empty");
    }
    else
    {
    let taskItem = document.createElement("p");
        taskItem.innerHTML = `<span>${x}</span>
            <button class="editBtn" onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>`;

        let taskContainer = document.getElementById("task");
        taskContainer.appendChild(taskItem);
        
        document.getElementById("add").value = "";
    }
  
}
function deleteTask(button) {

    let taskItem = button.parentElement;

    taskItem.remove();

    alert("Delete task");
}

function editTask(button) {

    let taskItem = button.previousElementSibling.textContent;
    let updTaskItem = prompt("Edit task:", taskItem);

    if (updTaskItem !== "") {
        button.previousElementSibling.textContent = updTaskItem;
        alert("Task Edited");
    }
    else
    {
        alert("Empty Value");
    }
    
}

