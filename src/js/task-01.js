// Select the ul#categories element
const categoriesList = document.getElementById('categories');

// Get all li.item elements within ul#categories
const categories = categoriesList.querySelectorAll('li.item');

// Display the number of categories
console.log(`Number of categories: ${categories.length}\n`);

// Loop through each category and display header text and the number of elements
categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}\n`);
});
