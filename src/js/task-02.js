const ingredientsList = document.getElementById('ingredients');

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');// a new li element
  listItem.textContent = ingredient; // Adding the ingredient name as text content
  listItem.classList.add('item');// Adding the 'item' class to the li element
  ingredientsList.appendChild(listItem);  // Append  li to ul#ingredients element

});
