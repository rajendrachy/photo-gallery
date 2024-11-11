// // write your JS code here

// var numberArray = [5, 8, 6, 7, 4, 2, 6, 2, 4, 8, 1];
// const inpId = document.getElementById('inputArea');

// // creating input
// const input = document.createElement('input');
// input.setAttribute('id', 'elementTxt');
// inpId.append(input);

// // button
// const btn = document.createElement('button');
// btn.textContent = 'Delete Element';
// btn.setAttribute('id', 'btnDelete');
// inpId.append(btn);

// // function
// function deleteArray() {
//   const userVal = parseInt(document.getElementById('elementTxt').value); // Get the value and convert it to a number
//   const ans = []; // Reset ans array
//   for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] !== userVal) {
//       ans.push(numberArray[i]); // Use push to add elements to the array
//     }
//   }

//   numberArray = ans; // Update numberArray
//   const headi = document.getElementById('he');
//   headi.textContent = numberArray; // Update text content
// }


// btn.addEventListener("click", deleteArray);



//_____________DELETE ELEMENT______________Practice-2__________-

// var numArray = [5, 8, 6, 7, 4, 2, 6, 2, 4, 8, 1];
// const inputId = document.getElementById('inputArea');

// const input = document.createElement('input');
// input.setAttribute('id', 'elementTxt');
// inputId.append(input);


// const btn = document.createElement('button');
// btn.setAttribute('id', 'btnDelete');
// btn.textContent = 'Delete Text';
// inputId.append(btn);


// //Function create
// function deleteArray() {
//    const userValue = parseInt(document.getElementById('elementTxt').value);
//    const ans = [];

//    for(let i=0; i<numArray.length; i++) {
//       if(numArray[i] !== userValue) {
//         ans.push(numArray[i]);
//       }
//    }
//    numArray = ans;

//    const he = document.querySelector('#he');
//    he.textContent = numArray;

// }

// btn.addEventListener('click', deleteArray);





//__________________DELETE ELEMENT___________________Practice - 3______________

var numarray = [5, 8, 6, 7, 4, 2, 6, 2, 4, 8, 1];
const inputId = document.querySelector('#inputArea');

//Task 1
const input = document.createElement('input');
input.setAttribute('id', 'elementTxt');
inputId.append(input);

// Task 2
const btn = document.createElement('button');
btn.setAttribute('id', 'btnDelete');
btn.textContent = 'Delete element';
inputId.append(btn);



//Task 3
function deleteArray() {
  const userVal = parseInt(document.querySelector('#elementTxt').value);
  const ans = [];

  for(let i=0; i<numarray.length; i++) {
       if(numarray[i] !== userVal) {
        ans.push(numarray[i]);
       }
  }

  numarray = ans;

  const h = document.querySelector("#he");
  h.textContent = numarray;
}

btn.addEventListener('click', deleteArray);


