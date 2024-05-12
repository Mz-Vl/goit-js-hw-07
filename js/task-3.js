const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimedValue = nameInput.value.trim();
    nameOutput.textContent = trimedValue || 'Anonymous';
});