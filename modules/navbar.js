import Foods from "./meals.js";

const navbar = document.querySelector('.navbar');

const Nav = {
  renderNavbar: () => {
    navbar.innerHTML = `
      <div class="logo"></div>
      <div class="menu meals">Meals</div>
      <div class="menu categories">Categories</div>
      <div class="menu ingredients">Ingredients</div>
    `
  }
}

export default Nav;