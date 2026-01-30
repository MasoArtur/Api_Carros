import { moverBanner } from "./trocarbanner.js";
import { BuscarCarros } from "./buscar.js";

window.moverBanner = moverBanner;
window.BuscarCarros = BuscarCarros;

document.addEventListener("DOMContentLoaded", function () {
    // Adicionar o evento de "Enter" no teclado
    const input = document.getElementById('Iput_Pesquisar');
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            BuscarCarros();
        }
    });
});