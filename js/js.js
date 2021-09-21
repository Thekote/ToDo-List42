// Create a new toDo

function newToDo() {
    const todo = {
        description : document.getElementById("description").value,
        dueDate : document.getElementById("dueDate").value
    }
    if (todo.description === '' || todo.dueDate === '') {
        alert("Descrição ou Deadline não podem ser vazios!!");
    } else {
        var li = document.createElement("li");
        document.createTextNode(JSON.stringify(todo));
        li.append(todo.description, todo.dueDate);
        document.getElementById("todoList").appendChild(li);
        // window.localStorage.setItem('todo', JSON.stringify(todo));
    }
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (c = 0; c < close.length; c++) {
        close[c].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    
}


// Complete a toDo

var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);


// Close btn for each toDo

var todoList = document.getElementsByTagName("LI");
var c;
for (c = 0; c < todoList; c++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    todoList[c].appendChild(span);
}


// Hide/delete function for close btn

var close = document.getElementsByClassName("close");
var c;
for (c = 0; c < close.length; c++) {
    close[c].onclick = function () {
        var div = this.parentElement;
        div.getElementsByClassName.display = "none";
    }
}









