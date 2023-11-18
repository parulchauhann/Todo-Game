const input = document.getElementById("input")
const button = document.getElementById("button")
const todolist = document.getElementById("todolist")

let arr = []
button.onclick = click 

function click (){
    if (input.value){
        arr.push(input.value)
        console.log(arr)
        input.value = ""
        showTodos();
    }
}

function showTodos () {
    todolist.innerHTML = ""
    arr.forEach(function(todo, index){
        todolist.innerHTML +=
          `<li>
                ${todo}
                    <a onclick = 'edithandle(${index})'>Edit Todo</a>
                    <a onclick = 'deletehandle(${index})'>Delete Todo</a>
          </li>`
    })
}

function edithandle (index) {
    let newValue = prompt('Enter new Todo')
    console.log(arr)
    arr.splice(index, 1, newValue)
    showTodos();

    if (newValue.length>0){
        return true;
    }
}

function deletehandle (index) {
    arr.splice(index, 1)
    showTodos();
}