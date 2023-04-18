"use strict";
(self["webpackChunkfood_hobbies"] = self["webpackChunkfood_hobbies"] || []).push([["main"],{

/***/ "./modules/area.js":
/*!*************************!*\
  !*** ./modules/area.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Area);

/***/ }),

/***/ "./modules/categories.js":
/*!*******************************!*\
  !*** ./modules/categories.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ }),

/***/ "./modules/ingredients.js":
/*!********************************!*\
  !*** ./modules/ingredients.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ingredients);

/***/ }),

/***/ "./modules/random-meals.js":
/*!*********************************!*\
  !*** ./modules/random-meals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cards = document.querySelector('.cards');
let meals = [];
let count = 0;

const Foods = {

  renderFoods: () => {
    const getResponse = async() => {
      while (count < 15) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Foods);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n  Josh's Custom CSS Reset\r\n  https://www.joshwcomeau.com/css/custom-css-reset/\r\n*/\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  background-color: #f6f6f6;\r\n  font-family: 'Balsamiq Sans', sans-serif;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin-top: 1vw;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.logo {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  width: 80px;\r\n  height: 50px;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.dropdown {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n.dropdown .dropbtn {\r\n  border: none;\r\n  outline: none;\r\n  color: #da729f;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.fa-caret-down {\r\n  margin-left: 5px;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  min-width: 160px;\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  float: none;\r\n  color: #000000;\r\n  padding: 5px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n  background-color: #e5cbd6f1;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.menu {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  color: #da729f;\r\n}\r\n\r\n.items {\r\n  padding-bottom: 7vw;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5vw;\r\n  flex-wrap: wrap;\r\n  margin-top: 5vw;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.img-food {\r\n  cursor: pointer;\r\n  max-width: 25vw;\r\n  min-width: 25vw;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.food-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n}\r\n\r\n.food-name {\r\n  cursor: pointer;\r\n  margin-left: 0.5vw;\r\n  flex-wrap: nowrap;\r\n  max-width: 25vw;\r\n  min-width: 25vw;\r\n}\r\n\r\n.love {\r\n  align-self: flex-end;\r\n  margin-right: 0.75vw;\r\n  margin-top: -1vw;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.likes {\r\n  align-self: flex-end;\r\n  margin-top: -1vw;\r\n  margin-right: 0.5vw;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.button {\r\n  width: 80%;\r\n  padding: 5px 0;\r\n  cursor: pointer;\r\n  box-shadow: 3px 3px 3px 1px #4c4a4b;\r\n}\r\n\r\n.footer {\r\n  border-top: 1px solid #da729f2a;\r\n  border-bottom: 1px solid #da729f2a;\r\n  padding: 5px 0;\r\n  margin-bottom: 5px;\r\n  background-color: #da729f2a;\r\n}\r\n\r\n.footer-text {\r\n  text-align: center;\r\n}\r\n\r\n.footer-name {\r\n  text-decoration: none;\r\n  color: #343fdb;\r\n}\r\n\r\n.love-created {\r\n  color: rgb(228, 40, 40);\r\n  font-size: 1.2em;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;CAGC;;AAED;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,yBAAyB;EACzB,wCAAwC;EACxC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB;;;AAGA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yDAA2C;EAC3C,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,cAAc;EACd,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');\r\n\r\n/*\r\n  Josh's Custom CSS Reset\r\n  https://www.joshwcomeau.com/css/custom-css-reset/\r\n*/\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n  background-color: #f6f6f6;\r\n  font-family: 'Balsamiq Sans', sans-serif;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin-top: 1vw;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.logo {\r\n  background-image: url('../images/logo.png');\r\n  width: 80px;\r\n  height: 50px;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.dropdown {\r\n  float: left;\r\n  overflow: hidden;\r\n}\r\n\r\n.dropdown .dropbtn {\r\n  border: none;\r\n  outline: none;\r\n  color: #da729f;\r\n  padding: 14px 16px;\r\n  background-color: inherit;\r\n  font-family: inherit;\r\n  margin: 0;\r\n}\r\n\r\n.fa-caret-down {\r\n  margin-left: 5px;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  min-width: 160px;\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  float: none;\r\n  color: #000000;\r\n  padding: 5px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n  background-color: #e5cbd6f1;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.menu {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  color: #da729f;\r\n}\r\n\r\n.items {\r\n  padding-bottom: 7vw;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 5vw;\r\n  flex-wrap: wrap;\r\n  margin-top: 5vw;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.img-food {\r\n  cursor: pointer;\r\n  max-width: 25vw;\r\n  min-width: 25vw;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.food-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  margin-top: 10px;\r\n}\r\n\r\n.food-name {\r\n  cursor: pointer;\r\n  margin-left: 0.5vw;\r\n  flex-wrap: nowrap;\r\n  max-width: 25vw;\r\n  min-width: 25vw;\r\n}\r\n\r\n.love {\r\n  align-self: flex-end;\r\n  margin-right: 0.75vw;\r\n  margin-top: -1vw;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.likes {\r\n  align-self: flex-end;\r\n  margin-top: -1vw;\r\n  margin-right: 0.5vw;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.button {\r\n  width: 80%;\r\n  padding: 5px 0;\r\n  cursor: pointer;\r\n  box-shadow: 3px 3px 3px 1px #4c4a4b;\r\n}\r\n\r\n.footer {\r\n  border-top: 1px solid #da729f2a;\r\n  border-bottom: 1px solid #da729f2a;\r\n  padding: 5px 0;\r\n  margin-bottom: 5px;\r\n  background-color: #da729f2a;\r\n}\r\n\r\n.footer-text {\r\n  text-align: center;\r\n}\r\n\r\n.footer-name {\r\n  text-decoration: none;\r\n  color: #343fdb;\r\n}\r\n\r\n.love-created {\r\n  color: rgb(228, 40, 40);\r\n  font-size: 1.2em;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_random_meals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/random-meals.js */ "./modules/random-meals.js");
/* harmony import */ var _modules_area_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/area.js */ "./modules/area.js");
/* harmony import */ var _modules_categories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/categories.js */ "./modules/categories.js");
/* harmony import */ var _modules_ingredients_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/ingredients.js */ "./modules/ingredients.js");






// document.addEventListener('DOMContentLoaded', Foods.renderFoods);
document.addEventListener('DOMContentLoaded', _modules_area_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderArea);
document.addEventListener('DOMContentLoaded', _modules_categories_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderCategories);
document.addEventListener('DOMContentLoaded', _modules_ingredients_js__WEBPACK_IMPORTED_MODULE_4__["default"].renderIngredients);

document.addEventListener('DOMContentLoaded', _modules_random_meals_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderFoods);

// const randomMeals = document.querySelector('.random-meals');

// randomMeals.addEventListener('click', event => {
//   Foods.renderFoods();
//   randomMeals.innerHTML = 'Random Meals (15)';
// });



/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6161170fc2f61d2704e7.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUMwQjtBQUNUO0FBQ1k7QUFDRTtBQUNwRDtBQUNBO0FBQ0EsOENBQThDLG1FQUFlO0FBQzdELDhDQUE4QywrRUFBMkI7QUFDekUsOENBQThDLGlGQUE2QjtBQUMzRTtBQUNBLDhDQUE4Qyw0RUFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1ob2JiaWVzLy4vbW9kdWxlcy9hcmVhLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL21vZHVsZXMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9mb29kLWhvYmJpZXMvLi9tb2R1bGVzL2luZ3JlZGllbnRzLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL21vZHVsZXMvcmFuZG9tLW1lYWxzLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZC1ob2JiaWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb29kLWhvYmJpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mb29kLWhvYmJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9vZC1ob2JiaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb29kLWhvYmJpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZm9vZC1ob2JiaWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zvb2QtaG9iYmllcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkcm9wZG93bkFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tYXJlYScpO1xyXG5cclxuY29uc3QgQXJlYSA9IHtcclxuICByZW5kZXJBcmVhOiAoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRSZXNwb25zZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbGlzdC5waHA/YT1saXN0JyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRSZXNwb25zZSgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgYXJlYXNEYXRhID0gZGF0YS5tZWFscztcclxuICAgICAgXHJcbiAgICAgIGRyb3Bkb3duQXJlYS5pbm5lckhUTUwgPSBhcmVhc0RhdGEubWFwKChhcmVhKSA9PiBgXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj4ke2FyZWEuc3RyQXJlYX08L2E+XHJcbiAgICAgIGApLmpvaW4oJycpO1xyXG5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyZWE7IiwiY29uc3QgZHJvcGRvd25DYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNhdGVnb3JpZXMnKTtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSB7XHJcbiAgcmVuZGVyQ2F0ZWdvcmllczogKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UmVzcG9uc2UgPSBhc3luYygpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xpc3QucGhwP2M9bGlzdCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0UmVzcG9uc2UoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXNEYXRhID0gZGF0YS5tZWFscztcclxuICAgICAgXHJcbiAgICAgIGRyb3Bkb3duQ2F0ZWdvcmllcy5pbm5lckhUTUwgPSBjYXRlZ29yaWVzRGF0YS5tYXAoKGNhdGVnb3J5KSA9PiBgXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBpZD1cImNhdGVnb3J5LSR7Y2F0ZWdvcnkuc3RyQ2F0ZWdvcnl9XCI+JHtjYXRlZ29yeS5zdHJDYXRlZ29yeX08L2E+XHJcbiAgICAgIGApLmpvaW4oJycpO1xyXG5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7IiwiY29uc3QgZHJvcGRvd25JbmdyZWRpZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1pbmdyZWRpZW50cycpO1xyXG5cclxuY29uc3QgSW5ncmVkaWVudHMgPSB7XHJcbiAgcmVuZGVySW5ncmVkaWVudHM6ICgpID0+IHtcclxuICAgIGNvbnN0IGdldFJlc3BvbnNlID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9saXN0LnBocD9pPWxpc3QnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldFJlc3BvbnNlKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBpbmdyZWRpZW50c0RhdGEgPSBkYXRhLm1lYWxzO1xyXG4gICAgICBcclxuICAgICAgZHJvcGRvd25JbmdyZWRpZW50cy5pbm5lckhUTUwgPSBpbmdyZWRpZW50c0RhdGEubWFwKChpbmdyZWRpZW50KSA9PiBgXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj4ke2luZ3JlZGllbnQuc3RySW5ncmVkaWVudH08L2E+XHJcbiAgICAgIGApLmpvaW4oJycpO1xyXG5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZ3JlZGllbnRzOyIsImNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XHJcbmxldCBtZWFscyA9IFtdO1xyXG5sZXQgY291bnQgPSAwO1xyXG5cclxuY29uc3QgRm9vZHMgPSB7XHJcblxyXG4gIHJlbmRlckZvb2RzOiAoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRSZXNwb25zZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICB3aGlsZSAoY291bnQgPCAxNSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3JhbmRvbS5waHAnLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gIFxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBtZWFscy5wdXNoKGRhdGEubWVhbHMpO1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1lYWxzO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXRSZXNwb25zZSgpLnRoZW4oKG1lYWxzKSA9PiB7XHJcbiAgICAgIGNvbnN0IE1lYWxzRGF0YSA9IG1lYWxzO1xyXG4gICAgICBjYXJkcy5pbm5lckhUTUwgPSBNZWFsc0RhdGEubWFwKChtZWFsKSA9PiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsWzBdLnN0ck1lYWxUaHVtYn1cIiBjbGFzcz1cImltZy1mb29kXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHttZWFsWzBdLnN0ck1lYWx9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImxvdmVcIj4mIzEwMDg0OzwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJsaWtlc1wiPmNvdW50IGxpa2VzPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudHNcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIHZhbHVlPVwiUmVzZXJ2YXRpb25zXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYCkuam9pbignJyk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb29kczsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxzYW1pcStTYW5zOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4gIEpvc2gncyBDdXN0b20gQ1NTIFJlc2V0XFxyXFxuICBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvXFxyXFxuKi9cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgZm9udC1mYW1pbHk6ICdCYWxzYW1pcSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5zdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxucCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vdCxcXHJcXG4jX19uZXh0IHtcXHJcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBtYXJnaW4tdG9wOiAxdnc7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93biAuZHJvcGJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6ICNkYTcyOWY7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1jYXJldC1kb3duIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBtaW4td2lkdGg6IDE2MHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxyXFxuICBmbG9hdDogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgcGFkZGluZzogNXB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVjYmQ2ZjE7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNkYTcyOWY7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcyB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogN3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA1dnc7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW4tdG9wOiA1dnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWZvb2Qge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWF4LXdpZHRoOiAyNXZ3O1xcclxcbiAgbWluLXdpZHRoOiAyNXZ3O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtbmFtZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMC41dnc7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIG1heC13aWR0aDogMjV2dztcXHJcXG4gIG1pbi13aWR0aDogMjV2dztcXHJcXG59XFxyXFxuXFxyXFxuLmxvdmUge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNzV2dztcXHJcXG4gIG1hcmdpbi10b3A6IC0xdnc7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW4tdG9wOiAtMXZ3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAxcHggIzRjNGE0YjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RhNzI5ZjJhO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYTcyOWYyYTtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNzI5ZjJhO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRleHQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLW5hbWUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICMzNDNmZGI7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlLWNyZWF0ZWQge1xcclxcbiAgY29sb3I6IHJnYigyMjgsIDQwLCA0MCk7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7Q0FHQzs7QUFFRDs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBMkM7RUFDM0MsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWU7RUFDZixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbHNhbWlxK1NhbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qXFxyXFxuICBKb3NoJ3MgQ3VzdG9tIENTUyBSZXNldFxcclxcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcclxcbiovXFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmFsc2FtaXEgU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb3QsXFxyXFxuI19fbmV4dCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgbWFyZ2luLXRvcDogMXZ3O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9sb2dvLnBuZycpO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24ge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24gLmRyb3BidG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZGE3MjlmO1xcclxcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY2FyZXQtZG93biB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcclxcbiAgZmxvYXQ6IG5vbmU7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1Y2JkNmYxO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZGE3MjlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDd2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXZ3O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1mb29kIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1heC13aWR0aDogMjV2dztcXHJcXG4gIG1pbi13aWR0aDogMjV2dztcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLW5hbWUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBtYXgtd2lkdGg6IDI1dnc7XFxyXFxuICBtaW4td2lkdGg6IDI1dnc7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1dnc7XFxyXFxuICBtYXJnaW4tdG9wOiAtMXZ3O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luLXRvcDogLTF2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41dnc7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICM0YzRhNGI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYTcyOWYyYTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGE3MjlmMmE7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYTcyOWYyYTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10ZXh0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1uYW1lIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjMzQzZmRiO1xcclxcbn1cXHJcXG5cXHJcXG4ubG92ZS1jcmVhdGVkIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjI4LCA0MCwgNDApO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEZvb2RzIGZyb20gJy4uL21vZHVsZXMvcmFuZG9tLW1lYWxzLmpzJztcclxuaW1wb3J0IEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9hcmVhLmpzJztcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi4vbW9kdWxlcy9jYXRlZ29yaWVzLmpzJztcclxuaW1wb3J0IEluZ3JlZGllbnRzIGZyb20gJy4uL21vZHVsZXMvaW5ncmVkaWVudHMuanMnO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEZvb2RzLnJlbmRlckZvb2RzKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEFyZWEucmVuZGVyQXJlYSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBDYXRlZ29yaWVzLnJlbmRlckNhdGVnb3JpZXMpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgSW5ncmVkaWVudHMucmVuZGVySW5ncmVkaWVudHMpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEZvb2RzLnJlbmRlckZvb2RzKTtcclxuXHJcbi8vIGNvbnN0IHJhbmRvbU1lYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1tZWFscycpO1xyXG5cclxuLy8gcmFuZG9tTWVhbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbi8vICAgRm9vZHMucmVuZGVyRm9vZHMoKTtcclxuLy8gICByYW5kb21NZWFscy5pbm5lckhUTUwgPSAnUmFuZG9tIE1lYWxzICgxNSknO1xyXG4vLyB9KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==