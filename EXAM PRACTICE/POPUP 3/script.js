let div = document.querySelector('.main-container');

window.addEventListener("load", () => {
    div.style.display = "block";
});


let btn = document.querySelector('.btn');
btn.addEventListener("click" , () => {
    div.style.display = "none";
});



