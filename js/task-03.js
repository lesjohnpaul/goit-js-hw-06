const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const galleryList = document.querySelector('.gallery');


images.forEach(image => {

  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');


  const imageElement = document.createElement('img');
  imageElement.src = image.url; // Set the src attribute
  imageElement.alt = image.alt; // Set the alt attribute
  imageElement.classList.add('gallery-image');

  listItem.appendChild(imageElement);


  galleryList.appendChild(listItem);
});
