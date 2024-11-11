let table = document.querySelector('tbody');

let submit = document.querySelector('#form1');
let first = document.querySelector('#first');
let second = document.querySelector('#second');

submit.addEventListener("submit", (e) => {
    e.preventDefault();

    let row = document.createElement('tr');

    row.innerHTML = `
    <td> ${first.value}</td>
    <td> ${second.value}</td>

    `;
    table.appendChild(row);


    first.value = " ";
    second.value = " ";
    
})