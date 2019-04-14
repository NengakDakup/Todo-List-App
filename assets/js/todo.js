var data =(localStorage.getItem('todolist'))? JSON.parse(localStorage.getItem('todolist')) : {
  todo: [],
  completed: []
};

var removeSVG = '<i class="fa fa-trash-alt"></i>';
var completeSVG = '<i class="fa fa-check"></i>';

renderTodoList();


function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  for (var i = 0; i < data.todo.length; i++) {
    var value = data.todo[i];
    addItemTodo(value);
  }

  for (var j = 0; j < data.completed.length; j++) {
    var value = data.todo[j];
    addItemTodo(value, true);
  }
}


//to get the user click on the button
document.getElementById('addItem').addEventListener("click", function(){
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
  }
  dataObjectUpdated();
});

document.getElementById('item').addEventListener('keydown', function(e){
  var value = this.value;
  if (e.code === 'Enter' && value) {
    addItemTodo(value);
    this.value = "";
    data.todo.push(value);
  }
  dataObjectUpdated();
})

function dataObjectUpdated() {
  localStorage.setItem('todolist', JSON.stringify(data));
}

//to remove an item
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var value = item.innerText;

  if (id === "todo") {
    data.todo.splice(data.todo.indexOf(value), 1);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
  }
  parent.removeChild(item);

  dataObjectUpdated();
}


//to move an item either to the completed list or to the todo list
function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id
  var value = item.innerText;

  if (id === "todo") {
    data.todo.splice(data.todo.indexOf(value), 1);
    data.completed.push(value);
  } else {
    data.completed.splice(data.completed.indexOf(value), 1);
    data.todo.push(value);
  }

  //check if it is to be added to the completed list or the todo list
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  //remove it from the list and add it to the required
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
  dataObjectUpdated();

}

function addItemTodo(text, completed) {
  var list = (completed)? document.getElementById('completed') : document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  //add click event for removing items
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('check');
  complete.innerHTML = completeSVG;

  //add click event for completing items
  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}
