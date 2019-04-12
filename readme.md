- first of all add an event listener for any clicks on the add list button
  -this event listener runs a function when the event takes placeholder
|--this function fetches the value of the input field, checks if not empty, then runs a function to add the item, with the value as the parameter
| -the above functions also resets the value of the input field, for better user experience
|
|--the additem function works by:
      =>creating top level elements like the divs, li's, and buttons using the "createElement" function
      =>these created elements have classes added to them by using the "classList.add" function.
      =>these created elements(the buttons), have the svg, added to them using the "innerHTML" function
      =>event listeners are also added for these buttons, so functions can be run when they are clicked
