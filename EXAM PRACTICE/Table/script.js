// Form elements
const btn = document.getElementById('btnSubmit');
const name = document.getElementById('fullName');
const email = document.getElementById('email');
const number = document.getElementById('contactNumber');
const arrv = document.getElementById('arrivDate');
const depart = document.getElementById('departDate');
const numAdu = document.getElementById('numAdult');
const numChil = document.getElementById('numChildren');

// Data storage
var formData = {};
var customerDetails = [];

// Save data when button is clicked
btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    saveRecord();
    clearTable(); // Clear table before adding new rows
    showData();
});

// Function to save form data
function saveRecord() {
    formData['name'] = name.value;
    formData['email'] = email.value;
    formData['number'] = number.value;
    formData['arrvDate'] = arrv.value;
    formData['departDate'] = depart.value;
    formData['numAdult'] = numAdu.value;
    formData['numChildren'] = numChil.value;

    customerDetails.push(formData);
    localStorage.setItem('customerDetails', JSON.stringify(customerDetails));
}

// Add record to the table
function addRecordToTable(formData) {
    const table = document.querySelector('table tbody');
    const row = table.insertRow();

    Object.values(formData).forEach(val => {
        let cell = row.insertCell();
        cell.textContent = val;
    });
}

// Show data from localStorage
function showData() {
    if (localStorage.getItem('customerDetails')) {
        customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
        customerDetails.forEach(customer => {
            addRecordToTable(customer);
        });
    }
}

// Clear table before adding new rows
function clearTable() {
    const table = document.querySelector('table tbody');
    table.innerHTML = '';  // Clears all rows
}

// Load data on page load
window.onload = function() {
    if (localStorage.getItem('customerDetails')) {
        clearTable(); // Clear table before loading
        showData();
    }
};


