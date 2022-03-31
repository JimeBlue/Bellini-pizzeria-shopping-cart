# Bellini Pizzeria Shopping Cart
This was my final project for the Intro to JavaScript course, part of the <a href="https://extension.ucsd.edu/courses-and-programs/front-end-development"> Front End Development Certificate </a> delivered by <a href="https://ucsd.edu/"> the University of California San Diego Extension.</a> It was a solitary project that allowed me to build a Shopping Cart for a restaurant using JavaScript, the Local Storage and vanilla CSS.
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

<img src="https://user-images.githubusercontent.com/84801660/152528522-7ce3be84-59b4-4885-8d34-b8c09cefa096.JPG">

#### Featured piece of code no.2

This allows the user to decrease and increase the menu items quantity in the Cart Page 

```javascript
function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');
  let cartItems = localStorage.getItem('productsInCart');
  let currentQuantity = 0;
  let currentProduct = '';
  cartItems = JSON.parse(cartItems);

  decreaseButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentQuantity = btn.parentElement.querySelector('span').textContent;

      currentProduct =
        btn.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], 'decrease');
        totalCost(cartItems[currentProduct], 'decrease');
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

        displayCart();
      }
    });
  });

  increaseButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentQuantity = btn.parentElement.querySelector('span').textContent;
      currentProduct =
        btn.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  });
}

```

<img src="https://user-images.githubusercontent.com/84801660/152528277-8723256c-dcc3-409f-9b93-b3c1614f4d9f.JPG">

### Built with:
- Semantic HTML5
- CSS 3
-  <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/css/style.css#L1-L5"> CSS custom properties </a>
- Media Queries
- <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/css/style.css#L517-L527"> @keyframes </a>
- BEM
-  <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/js/cart.js#L92"> Javascript ES6  </a>
-  <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/js/main.js#L17-L25"> jQuery  </a>
- AOS  - Animate On Scroll Library
-  <a href="https://github.com/JimeBlue/Bellini-pizzeria-shopping-cart/blob/7fd4992011fa066ae36ee65705b66f1fc9276a15/js/cart.js#L166"> Browser Local storage  </a>

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











