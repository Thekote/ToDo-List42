// Create a new toDo

function newToDo() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("description").value;
    var inputDate = document.getElementById("dueDate").value;
    var t = document.createTextNode(inputValue);
    var d = document.createTextNode(inputDate);
    li.appendChild(t);
    li.appendChild(d);
    if (inputValue === '' || inputDate === '') {
        alert("Descrição ou Deadline não podem ser vazios!!");
    } else {
        document.getElementById("todoList").appendChild(li);
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









