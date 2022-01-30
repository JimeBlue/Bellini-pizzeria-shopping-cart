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

function totalCost(menuItem) {
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    menuItem.price = parseFloat(menuItem.price);
    localStorage.setItem('totalCost', cartCost + menuItem.price);
  } else {
    localStorage.setItem('totalCost', menuItem.price);
  }
}

onLoadCartNumbers();
