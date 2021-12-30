var todoText = document.getElementById("todoText");
var showList = document.getElementById("todoUL");

function addTodo(){
    var todoValue  = todoText.value;
    var todoLi = document.createElement('li');
    todoLi.appendChild(document.createTextNode(todoValue));
    showList.appendChild(todoLi)

    var editBtn = document.createElement("button")
    editBtn.setAttribute("onclick","Edit(this)")
    editBtn.setAttribute("Class","btnEdit")
    var b = document.createTextNode("Edit")
    editBtn.appendChild(b)
    todoLi.appendChild(editBtn)
    showList.appendChild(todoLi)

    var DelBtn = document.createElement("button")
    DelBtn.setAttribute("onclick","Delete(this)")
    DelBtn.setAttribute("Class","btnDel")
    var c = document.createTextNode("Delete")
    DelBtn.appendChild(c)
    todoLi.appendChild(DelBtn)
    showList.appendChild(todoLi)

    todoText.value = ""

}

function Edit(element){
  element.parentNode.firstChild.nodeValue = prompt("Enter Value to Edit",element.parentNode.firstChild.nodeValue)
}

function Delete(element)
{
     element.parentNode.remove()
}

function DeleteAll(){
    showList.innerHTML = ""
}