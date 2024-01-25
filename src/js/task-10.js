function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}


function createBox(size) {
  const box = document.createElement('div');
  box.classList.add('box'); // Add box class
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}


function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear existing boxes
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = createBox(size);
    boxesContainer.appendChild(box);
  }
}
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}


const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', function () {
  const amount = parseInt(input.value);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);
