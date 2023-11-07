const colorDisplay = document.getElementById('color');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', generateRandomColor);

function generateRandomColor() {
    const randomColor = getRandomColor();
    colorDisplay.style.backgroundColor = randomColor;
    colorDisplay.textContent = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateRandomColor(); 
