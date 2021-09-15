// Create a new toDo

function newToDo() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("description").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Descrição não pode ser vazia!!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("description").value = "";

    var span = document.createElement("span");
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
    if (e.target.tagName === 'li') {
        e.target.classList.toggle('checked');
    }
}, false);


// Close btn for each toDo

var todoList = document.getElementsByTagName("li");
var c;
for (c = 0; c < todoList; c++) {
    var span = document.createElement("span");
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









