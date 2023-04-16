const dropdownArea = document.querySelector('.dropdown-area');

const Area = {
  renderArea: () => {
    const getResponse = async() => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
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
      const areasData = data.meals;
      
      dropdownArea.innerHTML = areasData.map((area) => `
        <a href="#">${area.strArea}</a>
      `).join('');

    });
  },
  
}

export default Area;