let json =
  '{ "menu": { "slice of pizza": "2.00", "toppings": { "pepperoni": ".25", "meatballs": ".35", "mushrooms": ".40", "olives": ".20" }, "sides": { "potato salad": "1.25", "hummus": "2.50", "caesar salad": "3.50", "garden salad": "2.25" }, "drinks": { "soda": { "small": "1.95", "medium": "2.20", "large": "2.50" }, "juice": "2.00", "water": "1.25" } } }';

let obj = JSON.parse(json);
let sliceContent = '';
let toppingsContent = '';
let sidesContent = '';
let drinksContent = '';
let menu = obj.menu;

for (i in menu) {
  if (i === 'slice of pizza') {
    sliceContent += `
      <h2>Enjoy a ${i} for just...</h2>
      <p class="menu__item-price">$${menu[i]}</p>
      <button
        class="btn btn--primary btn--block add-cart"
        type="button"
        name="${i}"
        value="${menu[i]}"
      >
        Order Now
      </button>
      `;
  }

  if (i === 'toppings') {
    for (j in menu[i]) {
      toppingsContent +=
        `
          <div class="menu__image-container">
          <img
            class="menu__pepperoni"
            src="images/${j}.png"
            alt="${j} topping"
            data-aos="zoom-in"
            
          />
        </div> ` +
        `<div class="menu__item-content">
          <h3 class="menu__item-heading" >${j}</h3>
          <p class="menu__item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="menu__item-price">$0${menu[i][j]}</p>
          <button
            class="btn btn--primary add-cart btn--block add-cart"
            name="${j}"
            value="0${menu[i][j]}"
          >
            Order Now
          </button>
          </div>
          `;
    }
  }
  if (i === 'sides') {
    for (j in menu[i]) {
      sidesContent +=
        `
      <div class="menu__image-container">
     
      <img
        class="menu__pepperoni"
        src="images/${j.trim().replace(/[ -]+/g, '-')}.png"
        alt="${j} "
        data-aos="zoom-in"
      />
    </div> ` +
        `<div class="menu__item-content">
      <h3 class="menu__item-heading">${j}</h3>
      <p class="menu__item-description">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <p class="menu__item-price">$${menu[i][j]}</p>
      <button
        class="btn btn--primary add-cart btn--block add-cart"
        name="${j}"
        value="${menu[i][j]}"
      >
        Order Now
      </button>
      </div>
      `;
    }
  }
  if (i === 'drinks') {
    for (j in menu[i]) {
      if (j === 'soda') {
        for (k in menu[i][j]) {
          drinksContent +=
            `
        <div class="menu__image-container">
       
        <img
          src="images/${j}-${k}.png"
          alt="${j} ${k}"
          data-aos="zoom-in"
        />
      </div> ` +
            `<div class="menu__item-content">
        <h3 class="menu__item-heading">${j} ${k}</h3>
        <p class="menu__item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p class="menu__item-price">$${menu[i][j][k]}</p>
        <button
          class="btn btn--primary add-cart btn--block add-cart"
          name="${j} ${k}"
          value="${menu[i][j][k]}"
        >
          Order Now
        </button>
        </div>
        `;
        }
      }

      if (j === 'juice') {
        drinksContent +=
          `
    <div class="menu__image-container">
   
    <img
      src="images/${j}.png"
      alt="${j}"
      data-aos="zoom-in"
    />
  </div> ` +
          `<div class="menu__item-content">
    <h3 class="menu__item-heading">${j}</h3>
    <p class="menu__item-description">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </p>
    <p class="menu__item-price">$${menu[i][j]}</p>
    <button
      class="btn btn--primary add-cart btn--block add-cart"
      name="${j}"
      value="${menu[i][j]}"
    >
      Order Now
    </button>
    </div>
    `;
      }

      if (j === 'water') {
        drinksContent +=
          `
    <div class="menu__image-container">
   
    <img
      src="images/${j}.png"
      alt="${j}"
      data-aos="zoom-in"
    />
  </div> ` +
          `<div class="menu__item-content">
    <h3 class="menu__item-heading">${j}</h3>
    <p class="menu__item-description">
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </p>
    <p class="menu__item-price">$${menu[i][j]}</p>
    <button
      class="btn btn--primary add-cart btn--block add-cart"
      name="${j}"
      value="${menu[i][j]}"
    >
      Order Now
    </button>
    </div>
    `;
      }
    }
  }
}

document.getElementById('slice-content').innerHTML = sliceContent;
document.getElementById('toppings-content').innerHTML = toppingsContent;
document.getElementById('sides-content').innerHTML = sidesContent;
document.getElementById('drinks-content').innerHTML = drinksContent;
