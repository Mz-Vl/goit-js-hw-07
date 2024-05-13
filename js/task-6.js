const controls = document.querySelector('#controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = controls.querySelector('input');

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const parsedAmount = Number(amount);
  if (parsedAmount < 1 || parsedAmount > 100) {
    return;
  }

  destroyBoxes();

  const boxSize = 30;
  const boxesMarkup = [];

  for (let i = 0; i < parsedAmount; i += 1) {
    const box = `<div style="width: ${boxSize + i * 10}px; height: ${
      boxSize + i * 10}px; background-color: ${getRandomHexColor()};"></div>`;
    boxesMarkup.push(box);
  }

  boxesContainer.innerHTML = boxesMarkup.join('');
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
