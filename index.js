import { menuArray } from "./data.js";

renderMenu(menuArray);
renderOrder(menuArray);

const order0 = document.querySelector("#order-0");
const order1 = document.querySelector("#order-1");
const order2 = document.querySelector("#order-2");
const remove0 = document.querySelector("#remove-0");
const remove1 = document.querySelector("#remove-1");
const remove2 = document.querySelector("#remove-2");
const footer = document.querySelector("#footer");

let pizzaDisplayed = false;
let burgerDisplayed = false;
let beerDisplayed = false;
let usrName = "";

// const pizzaObj = menuArray[0];

document.addEventListener("click", function (e) {
  if (e.target.id === "0" || e.target.id === "1" || e.target.id === "2") {
    showOrder(e.target.id);
    document.querySelector("#thank-msg").style.display = "none";
  } else if (
    e.target.id === "remove-0" ||
    e.target.id === "remove-1" ||
    e.target.id === "remove-2"
  ) {
    showOrder(e.target.id);
    console.log(e.target.id);
  } else if (e.target.id === "order-btn") {
    checkoutMenu();
  }
  console.log(e.target.id);
});

document.addEventListener("submit", function (e) {
  e.preventDefault();
  usrName = document.querySelector("#fname").value;
  document.querySelector("#popup").style.display = "none";
  document.querySelector("#fname").value = "";
  document.querySelector("#cardnumber").value = "";
  document.querySelector("#cvv").value = "";
  order0.style.display = "none";
  order1.style.display = "none";
  order2.style.display = "none";
  pizzaDisplayed = false;
  burgerDisplayed = false;
  beerDisplayed = false;
  sum = 0;
  footer.style.visibility = "hidden";
  document.querySelector("#thank-msg").style.display = "block";
});

function renderMenu(itemArray) {
  let menuHTML = "";
  itemArray.forEach((menuItem) => {
    menuHTML += `
    <div class="icon-menu">
        <p class="icons">${menuItem.emoji}</p>
        <p>
            <span class="food-span">${menuItem.name}</span>
            <span class="food-ingredients">${menuItem.ingredients}</span>$${menuItem.price}
        </p>
        <button id="${menuItem.id}">+</button>
    </div>`;
  });
  document.querySelector("#food-section").innerHTML = menuHTML;
}

function renderOrder(itemArray) {
  let orderHtml = "";
  itemArray.forEach((menuItem) => {
    orderHtml += `
         <p id="order-${menuItem.id}" class="order">
            <span class="order-item fw400">${menuItem.name}</span
            ><span id="remove-${menuItem.id}" class="order-remove fw400">remove</span
            ><span class="order-price fw400">$${menuItem.price}</span>
          </p>`;
  });
  document.querySelector("#order-items").innerHTML += orderHtml;
}

let sum = 0;

function showOrder(itemId) {
  if (itemId === "0" && pizzaDisplayed === true) {
    console.log("This has already been ordered!");
  } else if (itemId === "0" && !pizzaDisplayed) {
    order0.style.display = "flex";
    pizzaDisplayed = !pizzaDisplayed;
    sum += 14;
  }
  if (itemId === "1" && burgerDisplayed) {
    console.log("This has already been ordered!");
  } else if (itemId === "1" && !burgerDisplayed) {
    order1.style.display = "flex";
    burgerDisplayed = !burgerDisplayed;
    sum += 12;
  }
  if (itemId === "2" && beerDisplayed) {
    console.log("This has already been ordered!");
  } else if (itemId === "2" && !beerDisplayed) {
    order2.style.display = "flex";
    beerDisplayed = !beerDisplayed;
    sum += 12;
  }
  if (!pizzaDisplayed && !burgerDisplayed && !beerDisplayed) {
    footer.style.visibility = "hidden";
  } else if (pizzaDisplayed || burgerDisplayed || beerDisplayed) {
    footer.style.visibility = "visible";
  }
  if (itemId === "remove-0") {
    order0.style.display = "none";
    pizzaDisplayed = !pizzaDisplayed;
    sum -= 14;
  }

  if (itemId === "remove-1") {
    order1.style.display = "none";
    burgerDisplayed = !burgerDisplayed;
    sum -= 12;
  }

  if (itemId === "remove-2") {
    order2.style.display = "none";
    beerDisplayed = !beerDisplayed;
    sum -= 12;
  }
  document.querySelector("#total-price").innerHTML = `$${sum}`;
}

function checkoutMenu() {
  document.querySelector("#popup").style.display = "flex";
}
