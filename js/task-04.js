let counterValue = 0;

const updateCounter = () => {
    document.getElementById('value').textContent = counterValue;
};

document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

document.querySelector('[data-action="increment"]').addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

updateCounter();
