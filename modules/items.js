const cards = document.querySelector('.cards');
let meals = new Array;
let count = 0;

const Foods = {
  renderFoods: () => {
    const getResponse = async() => {
      while (count < 9) {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/random.php',
          {
            method: 'GET',
          },
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        meals.push(data.meals);
        count++;
      }
      return meals;
    };

    getResponse().then((meals) => {
      const MealsData = meals;
      cards.innerHTML = MealsData.map((meal) => `
        <div class="card">
          <img src="${meal[0].strMealThumb}" class="img-food">
          <div class="food-info">
            <p class="food-name">${meal[0].strMeal}</p>
            <p class="love">&#10084;</p>
          </div>
          <p class="likes">count likes</p>
          <div class="buttons">
            <input type="button" class="button" value="Comments">
            <input type="button" class="button" value="Reservations">
          </div>
        </div>
      `).join('');
    });

  },
}

export default Foods;