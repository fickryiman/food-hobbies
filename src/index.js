import './style.css';
import Foods from '../modules/random-meals.js';
import Area from '../modules/area.js';
import Categories from '../modules/categories.js';
import Ingredients from '../modules/ingredients.js';

// document.addEventListener('DOMContentLoaded', Foods.renderFoods);
document.addEventListener('DOMContentLoaded', Area.renderArea);
document.addEventListener('DOMContentLoaded', Categories.renderCategories);
document.addEventListener('DOMContentLoaded', Ingredients.renderIngredients);

const randomMeals = document.querySelector('.random-meals');

randomMeals.addEventListener('click', event => {
  Foods.renderFoods();
  randomMeals.innerHTML = 'Random Meals (15)';
});

