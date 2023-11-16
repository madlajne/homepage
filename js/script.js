console.log("Cześć!😊");

let przycisk = document.querySelector(".przycisk");
let img = document.querySelector("img");

przycisk.addEventListener("click", () => {
    img.remove();
});

let naglowek = document.querySelector(".naglowek");
let innyprzycisk = document.querySelector(".innyprzycisk");

innyprzycisk.addEventListener("click", () => {
    naglowek.innerText = "WZMIANKA O MNIE"
});

let tlo = document.querySelector(".tlo");
let zmiana = document.querySelector(".zmiana");

zmiana.addEventListener("click", () => {
    tlo.classList.toggle("dark");
});
