const box = document.querySelector('.box');
const fill = document.querySelector('.fill');

function updatePercentage(percentage) {
    fill.style.width = `${percentage}%`;
}

// Example usage:
updatePercentage(68); // Fill the box 75%