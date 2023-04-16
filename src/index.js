import './style.css';
import Foods from '../modules/meals.js';

const mealsMenu = document.querySelector('.meals');
// document.addEventListener('DOMContentLoaded', Foods.renderFoods);
mealsMenu.addEventListener('click', Foods.renderFoods)
