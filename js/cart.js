let addCart = document.querySelectorAll('.add-cart');

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener('click', () => {
    let menuItem = {
      name: addCart[i].name,
      price: addCart[i].value,
      inCart: 0,
    };

    cartNumbers(menuItem);
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
}

onLoadCartNumbers();
