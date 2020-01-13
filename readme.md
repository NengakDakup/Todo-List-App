# Todo List app
## A simple html Todo List app powered by changing DOM elements with Javascript

see it here:
[https://nengakdakup.github.io/Todo-List-App/](https://nengakdakup.github.io/Todo-List-App/)

##Features
 - Add an item to be done
 - Complete an item
 - Re-add an item that is not done
 - Delete an item
 - Local storage that stores items so they can be accessed even if the browser is closed
 
## How it works
 first of all add an event listener for any clicks on the add list button
 - this event listener runs a function when the event takes placeholder
 - this function fetches the value of the input field, checks if not empty, then runs a function to add the item, with the value as the parameter
 - the above functions also resets the value of the input field, for better user experience
 - the additem function works by:
  - creating top level elements like the divs, li's, and buttons using the "createElement" function
  - these created elements have classes added to them by using the "classList.add" function.
  - these created elements(the buttons), have the svg, added to them using the "innerHTML" function
  - event listeners are also added for these buttons, so functions can be run when they are clicked
