var darkMode = document.querySelector("#dark");
var body = document.querySelector("body")
var allText = document.querySelectorAll(".text");
var backBtn = document.querySelector("#back")
var texts = document.querySelectorAll(".texts")
darkMode.addEventListener("click",function () {
    if(body.classList.contains("darkBody")){
        body.classList.remove("darkBody")
        darkMode.textContent = "Dark mode";
        darkMode.style.color = "black";
        backBtn.style.backgroundColor = "white";
        backBtn.style.color = "black";
        for (let i = 0; i < allText.length; i++) {
            allText[i].style.color = "black";
        }
    }
    else{
        body.classList.add("darkBody");
        darkMode.textContent = "Light mode";
        darkMode.style.color = "white";
        backBtn.style.backgroundColor = "#2C3844";
        backBtn.style.color = "white";
        for (let i = 0; i < allText.length; i++) {
            allText[i].style.color = "white";
        }
    }
})
let countryName = new URLSearchParams(location.search).get("name")
console.log(countryName);
let API_URL_DETAIL = `https://restcountries.com/v3.1/name/${countryName}`

// fetch(API_URL_DETAIL)
// .then(response => response.json())
// .then(data => console.log(data))
