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

};

