const textInput = document.getElementById('text-input');
const clearButton = document.getElementById('clear-button');
const charCountSpan = document.getElementById('char-count');
const charCountNoSpaceSpan = document.getElementById('char-count-no-space');
const wordCountSpan = document.getElementById('word-count');
const lineCountSpan = document.getElementById('line-count');

function updateCounts() {
    const text = textInput.value;
    charCountSpan.textContent = text.length;
    const noSpaceText = text.replace(/\s/g, '');
    charCountNoSpaceSpan.textContent = noSpaceText.length;
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    wordCountSpan.textContent = text.trim() === '' ? 0 : words.length;
    const lines = text.split('\n');
    lineCountSpan.textContent = text === '' ? 0 : lines.length;
}

textInput.addEventListener('input', updateCounts);

clearButton.addEventListener('click', () => {
    textInput.value = '';
    updateCounts();
});

updateCounts();
