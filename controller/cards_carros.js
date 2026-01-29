let Pesquisa = document.getElementById('Pesquisar_lupa');

let section_Cards = document.getElementById('main_section');

let Input_Pesquisar = document.getElementById('Iput_Pesquisar').value;

function BuscarCarros(){

     if(!Input_Pesquisar.value){
        section_Cards.innerHTML = "<p>Escreva algo</p>";
    alert("Por favor, busque o nome de um carro");
    return;
    };

    document.getElementById("keydown", function(event){
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


for(dado of dados){


    if(!resultados){
        alert("Nenhum carro encontrado");
        return;
    }
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
