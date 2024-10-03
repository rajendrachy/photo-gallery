document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');

    // Function to update the color display and code
    const updateColor = (color) => {
        colorDisplay.style.backgroundColor = color;
        colorCode.textContent = color;
    };

    // Set default color
    updateColor(colorPicker.value);

    // Add event listener to the color picker
    colorPicker.addEventListener('input', (event) => {
        updateColor(event.target.value);
    });
});
