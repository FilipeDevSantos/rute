let count = 0;
let modal = document.querySelector("#myModal");

function sim() {
    modal.style.display = "block";
}

function aceitou() {
    let container = document.querySelector(".container");
    let aceitou = document.querySelector(".aceitou");

    modal.style.display = "none";
    container.style.display = "none";
    aceitou.style.display = "flex";
}

function apertouNaoModal() {
    let btnNao = document.getElementById("btnNao");
    let titulo = document.getElementById("tituloModal");

    count++;

    if (count === 1) {
        titulo.innerText = "Botão errado Raquel? 🤨";
    } else if (count === 2) {
        titulo.innerText = "Rute? 🤨🤨";
    } else {
        titulo.innerText = "Aperte no sim 💀";
        btnNao.style.display = "none";
    }
}

function naoButton() {
    let nao = document.querySelector("#nao");

    nao.style.position = "absolute";
    nao.style.left = Math.floor(Math.random() * 650) + "px";
    nao.style.top = Math.floor(Math.random() * 600) + "px";
}
