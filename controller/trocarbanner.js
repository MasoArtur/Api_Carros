const banners = document.querySelectorAll('.banner');
let indiceAtual = 0;

function trocarBanner(indice) {
    if (indice >= banners.length) {
        indiceAtual = 0;
    } else if (indice < 0) {
        indiceAtual = banners.length - 1;
    } else {
        indiceAtual = indice;
    }

    banners.forEach((banner) => {
        // Mudei para % para garantir que o cálculo seja sobre o container
        banner.style.transform = `translateX(-${indiceAtual * 100}%)`;
    });
}

export function moverBanner(direcao) {
    console.log("Movendo banner para:", direcao);
    trocarBanner(indiceAtual + direcao);
}

// ESTA É A CHAVE: Torna a função visível para o HTML (onclick)
window.moverBanner = moverBanner;