- first of all add an event listener for any clicks on the add list button
  -this event listener runs a function when the event takes placeholder
|--this function fetches the value of the input field, checks if not empty, then runs a function to add the item, with the value as the parameter
| -the above functions also resets the value of the input field, for better user experience
|
|--the additem function works by:
      =>the argument is set as the innerText of li item
      =>creating top level elements like the divs, li's, and buttons using the "createElement" function
      =>these created elements have classes added to them by using the "classList.add" function.
      =>these created elements(the buttons), have the svg, added to them using the "innerHTML" function
|-----=>event listeners are also added for these buttons, so functions can be run when they are clicked(completeitem, and delete item)
|     =>the divs have their childs appended which are the variables that were created i.e the buttons
|     =>the items are now appended to the main parent(ul) element
|     =>the li item is now inserted into the main ul elements
|     =>the above insertion has to be done in way that the latest records are at the top of the stack, so:
|     =>it uses the insert before, and selects the index position of [0] e.g   list.insertBefore(item, list.childNodes[0]);
|
|-----=>the removeitem function works by:
|         -storing the value of the 2xparentNode of the button which is the list items
|         -(this) is used to relate to the element that invoked that function
|         -storing the value of the list item parent node which is the ul list item
|         -the parent-which is the ul variable.removeChild(child-which is the list item variable)
|
|-----=>the completeitem function works by:
          -same as the above first three steps
          -the ul parent id is stored in a variable so it can be used to determine if the element is to be added to the completed list or to be readded to the todolist
          -if the above id variable = todo list,
            1- the child is removed from the parentnode which is the ul, li is removeChild
            2- the child is added to the the opposing parent node according to 
            3-
