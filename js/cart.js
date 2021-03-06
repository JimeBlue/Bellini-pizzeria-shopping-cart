let addCart = document.querySelectorAll('.add-cart');

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener('click', () => {
    let menuItem = {
      name: addCart[i].name,
      price: addCart[i].value,
      inCart: 0,
    };

    cartNumbers(menuItem);
    totalCost(menuItem);
  });
}

function onLoadCartNumbers() {
  let prodcutNumbers = localStorage.getItem('cartNumbers');

  if (prodcutNumbers) {
    document.querySelector('.cart').textContent = prodcutNumbers;
  }
}

function cartNumbers(menuItem, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (action == 'decrease') {
    localStorage.setItem('cartNumbers', productNumbers - 1);
    document.querySelector('.cart').textContent = productNumbers - 1;
  } else if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart').textContent = 1;
  }

  setItems(menuItem);
}

function setItems(menuItem) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[menuItem.name] == undefined) {
      cartItems = {
        ...cartItems,
        [menuItem.name]: menuItem,
      };
    }
    cartItems[menuItem.name].inCart += 1;
  } else {
    menuItem.inCart = 1;
    cartItems = {
      [menuItem.name]: menuItem,
    };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(menuItem, action) {
  let cartCost = localStorage.getItem('totalCost');

  if (action == 'decrease') {
    cartCost = parseFloat(cartCost);
    localStorage.setItem('totalCost', cartCost - menuItem.price);
  } else if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    menuItem.price = parseFloat(menuItem.price);

    localStorage.setItem('totalCost', cartCost + menuItem.price);
  } else {
    localStorage.setItem('totalCost', menuItem.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector('.products');
  let cartCost = localStorage.getItem('totalCost');
  cartCost = parseFloat(cartCost);
  cartCost = cartCost.toFixed(2);
  let span = document.getElementsByClassName('close')[0];

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';

    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += ` 
      <ul class="inner-container list products-content">
            
            <li class="product">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
              ${item.name}
            </li>
            <li class="price sm-hide">$${item.price}</li>          
            <li class="quantity">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square decrease" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
          </svg>
              <span class="item-inCart">${item.inCart}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square increase" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
            </li>
            <li class="total">$${item.inCart * item.price}</li>
      </ul>`;
    });
    productContainer.innerHTML += `
    <ul class="inner-container list">
    <li class="product"></li>
    <li class="price sm-hide"></li>
    <li><h4>Basket Total</h4></li>
    <li><h4>$${cartCost}</h4></li>
  </ul>
    
    `;
  }

  span.onclick = function () {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
  };

  deleteButtons();
  manageQuantity();
}

onLoadCartNumbers();

document.getElementById('cart').onclick = function () {
  let modal = document.getElementById('myModal');
  displayCart();
  modal.style.display = 'block';
};

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.bi-trash');
  let productName;
  let productsNumber = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem('totalCost');

  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      productName = btn.parentElement.textContent.trim();
      localStorage.setItem(
        'cartNumbers',
        productsNumber - cartItems[productName].inCart
      );
      localStorage.setItem(
        'totalCost',
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );
      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
      onLoadCartNumbers();
    });
  });
}

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
