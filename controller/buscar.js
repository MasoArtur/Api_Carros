
import { dados } from "../model/dados/dados.js";

export function BuscarCarros() {
    let inputField = document.getElementById('Iput_Pesquisar');
    let termoPesquisa = inputField.value.toLowerCase().trim();
    
    let sectionDescricao = document.getElementById('box_car_description');
    let fotos = document.getElementsByClassName('photo_car_img');

    if (!termoPesquisa) {
        alert("Por favor, busque o nome de um carro");
        return;
    }

    let resultadoEncontrado = null;

    for (let carro of dados) {
        let titulo = carro.titulo.toLowerCase();
        let tags = carro.tags.toLowerCase();
        let descricao = carro.descrisao.toLowerCase();

        if (titulo.includes(termoPesquisa) || tags.includes(termoPesquisa) || descricao.includes(termoPesquisa)) {
            resultadoEncontrado = carro;
            break;
        }
    }

    if (resultadoEncontrado) {
        sectionDescricao.innerHTML = `
            <h1 id="car_name">${resultadoEncontrado.titulo}</h1>
            <p id="car_description">${resultadoEncontrado.descrisao}</p>
            <a id="wikipedia" href="${resultadoEncontrado.link}" target="_blank">Saiba mais no Wikipedia</a>
        `;

        for (let i = 0; i < fotos.length; i++) {
            if (resultadoEncontrado.fotos[i]) {
                fotos[i].src = resultadoEncontrado.fotos[i];
                fotos[i].style.display = "block";
            } else {
                fotos[i].src = "caminho/para/imagem-padrao.jpg";
            }
        }
    } else {
        alert("Nenhum carro encontrado para: " + termoPesquisa);
    }
}