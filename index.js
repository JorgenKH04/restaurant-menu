import { menuArray } from "./data.js";

function renderMenu(itemArray) {
  const menuHTML = "";
  itemArray.forEach((menuItem) => {
    menuHTML += `
    <div class="icon-menu">
        <p class="icons">🍕</p>
        <p>
            <span class="food-span">Pizza</span>
            <span class="food-ingredients">pepperoni,mushrom,mozarella</span>$14
        </p>
        <button>+</button>
    </div>;`;
  });
}
