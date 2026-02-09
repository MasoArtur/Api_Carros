let Pesquisa = document.getElementById('Pesquisar_lupa');

let section_Cards = document.getElementById('main_section');

let Input_Pesquisar = document.getElementById('Iput_Pesquisar').value;

function BuscarCarros(){

     if(!Input_Pesquisar.value){
    alert("Por favor, busque o nome de um carro");
    return;
    };

    document.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            BuscarCarros();
        } else{
            alert("");
        }
    })
};

Input_Pesquisar = Input_Pesquisar.toLowerCase();

let fotos = document.getElementsByClassName('photo_car_img');

  for(let i = 0; i < fotos.length; i++){
    fotos[i].src = dados[0].fotos[i];
  };

let titulo = "";
let descrisao = "";
let tags = "";
 
let resultados = "";
let resultados2 = "";


let boxPhotos = document.querySelector('#main_section');

let divInfo = document.querySelector('#box_car_description');

boxPhotos.innerHTML = "";
divInfo.innerHTML = "";


for(dado of dados){
    titulo = dado.titulo.toLowerCase();
    descrisao = dado.descrisao.toLowerCase();
    tags = dado.tags.toLowerCase();
    
   if( titulo.includes(Input_Pesquisar) || 
    descrisao.includes(Input_Pesquisar) ||
    tags.includes(Input_Pesquisar)){

    resultados2.innerHTML += `<div class = "card"> </div>`
    resultados2.innerHTML += `<img src ="${dado.fotos[0]}">`

    resultados.innerHTML += `<div class = "card"> </div>`
    resultados.innerHTML += `<h2>${dado.titulo}</h2>`
    resultados.innerHTML += `<p>${dado.descrisao}</p>`

    resultados.innerHTML += `<p>${dado.tags}</p>`

    }

    if(!resultados){
        alert("Nenhum carro encontrado");
        return;
    }

    boxPhotos.innerHTML = resultados2;
    divInfo.innerHTML = resultados;

};









// function trocarCarro(index){

//    let carro = dados[index];

//    let imgs = document.getElementsByClassName('photo_car_img');

//    for(let i = 0; i < imgs.length; i++){
//        imgs[i].src = carro.fotos[i];
//    }

//    document.getElementById("car_name").innerText = carro.titulo;
//    document.getElementById("car_description").innerText = carro.descrisao;
// }



// let Pesquisa = document.getElementById('Pesquisar_lupa');

// let section_Cards = document.getElementById('main_section');

// function BuscarCarros(){

//     let Input_Pesquisar = document.getElementById('Iput_Pesquisar').value;

//     if(!Input_Pesquisar){
//         section_Cards.innerHTML = "<p>Digite algo para pesquisar</p>";
//         return;
//     }

//     Input_Pesquisar = Input_Pesquisar.toLowerCase();

//     let resultados = "";

//     for(let carro of dados){   // dados = sua lista de carros

//         let titulo = carro.titulo.toLowerCase();
//         let descricao = carro.descricao.toLowerCase();

//         if(titulo.includes(Input_Pesquisar) || descricao.includes(Input_Pesquisar)){

//             resultados += `
//                 <div class="card">
//                     <h2>${carro.titulo}</h2>
//                     <p>${carro.descricao}</p>
//                 </div>
//             `;
//         }
//     }

//     if(!resultados){
//         resultados = "<p>Nenhum carro encontrado</p>";
//     }

//     section_Cards.innerHTML = resultados;
// }



// input.addEventListener("input", () => {
//    // pega valor atual
//    // filtra
//    // mostra sugestões
// });

// function BuscarCarros() {
//    // pega valor atual
//    // procura nos dados
//    // mostra resultado
// }