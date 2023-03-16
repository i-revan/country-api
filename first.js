var darkMode = document.querySelector("#dark");
var body = document.querySelector("body")
var allText = document.querySelectorAll(".text");
var row = document.querySelector(".row")
var input = document.querySelector("input");
darkMode.addEventListener("click",function () {
    if(body.classList.contains("darkBody")){
        body.classList.remove("darkBody")
        darkMode.textContent = "Dark mode";
        darkMode.style.color = "black";
        input.style.backgroundColor = "white";
        for (let i = 0; i < allText.length; i++) {
            allText[i].style.color = "black";
        }
    }
    else{
        body.classList.add("darkBody");
        darkMode.textContent = "Light mode";
        darkMode.style.color = "white";
        input.style.backgroundColor = "#2B3743";
        for (let i = 0; i < allText.length; i++) {
            allText[i].style.color = "white";
        }
    }
})

var API_URL = "https://restcountries.com/v3.1/all"
//get all countries
fetch(API_URL)
.then(response => response.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {
        row.innerHTML += `<div class="col-3 my-2">
            <a href="detail.html?name=${data[i].name.official}" style="text-decoration: none;color: black;">
            <div class="card" style="width: 18rem; height:100%">
            <img class="card-img-top" height="175px" src="${data[i].flags.png}" alt="Card image cap">
            <div class="card-body">
            <h5 class="d-flex justify-content-left align-items-center" style="height: 96px">${data[i].name.official}</h5>
            <p><b>Population</b>: ${data[i].population}</p>
            <p><b>Region</b>: ${data[i].region}</p>
            <p><b>Capital</b>: ${data[i].capital}</p>
            </div>
            </div>
            </a>
            </div>`
    }
})


//input search
input.addEventListener("keyup", function () {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        row.innerHTML = "";
        for (let index = 0; index < data.length; index++) {
            if(data[index].name.official.toLowerCase().includes(input.value.toLowerCase())){
                row.innerHTML += `<div class="col-3 my-2">
            <a href="detail.html?name=${data[index].name.official}" style="text-decoration: none;color: black;">
            <div class="card" style="width: 18rem; height:100%">
            <img class="card-img-top" height="175px" src="${data[index].flags.png}" alt="Card image cap">
            <div class="card-body">
            <h5 class="d-flex justify-content-left align-items-center" style="height: 96px">${data[index].name.official}</h5>
            <p><b>Population</b>: ${data[index].population}</p>
            <p><b>Region</b>: ${data[index].region}</p>
            <p><b>Capital</b>: ${data[index].capital}</p>
            </div>
            </div>
            </a>
            </div>`
            }
        }
    })
})
