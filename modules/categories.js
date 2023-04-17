const dropdownCategories = document.querySelector('.dropdown-categories');

const Categories = {
  renderCategories: () => {
    const getResponse = async() => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
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
      const categoriesData = data.meals;
      
      dropdownCategories.innerHTML = categoriesData.map((category) => `
        <a href="#" id="category-${category.strCategory}">${category.strCategory}</a>
      `).join('');

    });
  },
  
}

export default Categories;