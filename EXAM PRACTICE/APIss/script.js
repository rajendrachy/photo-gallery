// //AJAX Asynchronous JavaScript and XML
// /*
// XMLHTTP Request(XHR) is a browser API that allows us to make HTTP requests
// fetch
// axios is used in nodejs
// */
// let request=new XMLHttpRequest() //created a request object 
// //can request and send limited amount of data with the help of  this request object
// console.log(request)


// request.open("GET","https://feecq.github.io/api/users.json") //get to fetch the data from the server post to send the data to the server
// request.send() //asking to send the response  

// //at the moment in the response properties of the request object there is any value appearing then load event occurs

// request.addEventListener("load",()=>{
//   console.log(request.response)
//   let data=JSON.parse(request.response)
//   data.forEach(value=>{
//     let para=document.createElement("p")
//     para.innerText=value.name
//     document.body.appendChild(para)
//   })
// })






// ____________API FETCH_______________

// let request = new XMLHttpRequest;
// console.log(request);

// request.open("GET", "https://feecq.github.io/api/users.json");
// request.send();

// request.addEventListener("load", () => {
//   console.log(request.response);

//   let data = JSON.parse(request.response);
//   data.forEach(value => {
//     let para = document.createElement('p');
//     // para.innerText = value.name + " " + value.id;
//     for(let key in value) {
//         para.innerText += `${key}: ${value[key]}`;
//     }

//     document.body.appendChild(para);
//   })
// })



// ++++++++++++++++++ ______API___+++++++++++++++ FETCH ________Practicing________
let request = new XMLHttpRequest;
request.open("GET", "https://feecq.github.io/api/users.json");
request.send();

request.addEventListener("load", () => {
  console.log(request.response);
  let data = JSON.parse(request.response);
  data.forEach(value => {
    let para = document.createElement('p');
    for(let key in value) {
      para.innerText += `${key} : ${value[key]}`;
    }

    document.body.appendChild(para);
  });
});





