
//to get the user click on the button
document.getElementById('addItem').addEventListener("click", function(){
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }

});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id

  //check if it is to be added to the completed list or the todo list
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  //remove it from the list and add it to the required
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);

}

function addItemTodo(text) {
  var removeSVG = '<i class="fa fa-trash-alt"></i>';
  var completeSVG = '<i class="fa fa-check"></i>';
  var list = document.getElementById('todo');

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