const dropdownIngredients = document.querySelector('.dropdown-ingredients');

const Ingredients = {
  renderIngredients: () => {
    const getResponse = async() => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    };

    getResponse().then((data) => {
      const ingredientsData = data.meals;
      
      dropdownIngredients.innerHTML = ingredientsData.map((ingredient) => `
        <a href="#">${ingredient.strIngredient}</a>
      `).join('');

    });
  },
  
}

export default Ingredients;