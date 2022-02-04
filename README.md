# Bellini Pizzeria Shopping Cart
This was a final project for the Intro to JavaScript course, part of the <a href="https://extension.ucsd.edu/courses-and-programs/front-end-development"> Front End Development Certificate </a> delivered by <a href="https://ucsd.edu/"> the University of California San Diego Extension.</a> It was a solitary project that allowed me to build a Shopping Cart for a restaurant using JavaScript and the Local Storage.
#### Check it out! https://bellini-pizzeria-shopping-cart.netlify.app/

<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/84801660/151803833-3f4ed952-0ae0-4a2d-b886-e9a039785cc0.JPG"> &nbsp &nbsp &nbsp
  <img src="https://user-images.githubusercontent.com/84801660/151803784-281eda08-b56f-4ea9-a893-8215e5b6b8f6.JPG" height="690">
</p>

<br />

<img src="https://user-images.githubusercontent.com/84801660/151803814-1dff57ba-d3e1-4771-917a-5878bdf532df.JPG">

## The project 

### Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Add menu items to the cart
- View quantity of menu items added 
- View the cart
- Remove items from the cart
- Increase or decrase quantity of items in the cart
- View the total cost of menu itmes ordered

### Built with:
- Semantic HTML5
- CSS 3
- CSS custom properties <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/css/style.css#L1-L5"> example code </a>
- Media Queries
- @keyframes <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/css/style.css#L517-L527"> example code </a>
- BEM
- Javascript ES6 <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/js/cart.js#L92"> example code </a>
- jQuery <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/js/main.js#L17-L25"> example code </a>
- AOS  - Animate On Scroll Library
- Browser Local storage <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/js/cart.js#L166"> example code </a>

### Featured Code
#### Featured piece of code no.1
Every time the user adds a menu item to the cart, the number of items in the cart is added to the local storage and the quantity of items ordered is displayed in a badge. 

```javascript
 function onLoadCartNumbers() {
	  let prodcutNumbers = localStorage.getItem('cartNumbers');
	

	  if (prodcutNumbers) {
	    document.querySelector('.cart').textContent = prodcutNumbers;
	  }
	}
	

	function cartNumbers(menuItem) {
	  let productNumbers = localStorage.getItem('cartNumbers');
	  productNumbers = parseInt(productNumbers);
	

	  if (productNumbers) {
	    localStorage.setItem('cartNumbers', productNumbers + 1);
	    document.querySelector('.cart').textContent = productNumbers + 1;
	  } else {
	    localStorage.setItem('cartNumbers', 1);
	    document.querySelector('.cart').textContent = 1;
	  }
	}

```

<img src="https://user-images.githubusercontent.com/84801660/152518801-aac02b80-35af-4121-9b30-b27f9d51bf81.JPG">

### What I learned
-	Modular Functions
-	Identified and used basic data structures (arrays, variables, data types, expressions)
-	DOM object structure of JavaScript in web pages
-	How to manipulate the DOM
-	Standard set of JavaScript commands and operators
-	JavaScript functions and parameter-passing
-	Event handling within JavaScript
-	getItem(): How to get items from localStorage
-	setItem(): How to store values in localStorage
-	JSON











