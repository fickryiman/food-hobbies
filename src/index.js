import './style.css';
import Nav from '../modules/navbar.js';
import Foods from '../modules/meals.js';

const mealsMenu = document.querySelector('.meals');


document.addEventListener('DOMContentLoaded', Nav.renderNavbar);
document.addEventListener('DOMContentLoaded', Foods.renderFoods);
