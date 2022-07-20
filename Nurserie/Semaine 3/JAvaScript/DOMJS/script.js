// const nom = document.querySelector(`#nom`);
// const prenom = document.querySelector(`#prenom`);
// const show = document.querySelector(`#show`);

// function affichage(){
//     show.innertext=nom.value;
// }

const show = document.querySelector("show");
let result = "";

function affichage(id){
    result += document.getElementById(id).value;
    show.innerHTML = <h1>${result}</h1>;

}