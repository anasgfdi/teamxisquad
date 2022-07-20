// version prompt / alert
// let saisi = prompt("Veuillez saisir votre nom : ");
// alert(`Bonjour ${saisi}, bienvenue`);


// Déclaration variables

// const nom = document.querySelector("#nom");
// const response = document.querySelector("#response");
// const message = document.querySelector("#message");
// let show = "";

// fonction avec affichage
// response.addEventListener('click', () => {
//     show = nom.value;
//     message.innerText = `Bonjour ${show}, bienvenue!`;
// })

// let nbr1 = prompt("Saisir un nombre");
// let nbr2 = Number(prompt("Saisir un 2e nombre"));
// let result = Number(nbr1) + nbr2;

// alert(`${nbr1} + ${nbr2} = ${result}`);

// let done = "12";

// if (done == 12) {
//     alert("Oui c'est fait");
// }
// else {
//     alert("Non ce n'est pas fait");
// }

// let x = Number(prompt("Saisir x : "));
// let y = Number(prompt("Saisir y : "));

// if (x === y) {
//     alert(` ${x} et ${y} sont égaux`);
// }
// else if ( x > y ) {
//     alert(` ${x} est pas supérieur à ${y}`);
// }
// else {
//     alert(`${x} est inférieur à ${y}`);
// }

const fabrication = document.querySelector("#fabrication");
const vente = document.querySelector("#vente");
const calcul = document.querySelector("#calcul");
const message = document.querySelector("#message");
let show = "";

calcul.addEventListener('click', () => {
    let venteInput = vente.value;
    let fabricationInput = fabrication.value;
    console.log(venteInput, fabricationInput)
    let result = Number(venteInput) - Number(fabricationInput);
    
    if ( venteInput === fabricationInput) {
        show = `Ni perte ni profit! Bénef ${Number(result)} €`;
    }
    else if ( venteInput > fabricationInput ) {
        result = venteInput - fabricationInput;
        show = `Profit de ${result} €`;
    }
    else {
        result = fabricationInput - venteInput;
        show = `Perte de ${Number(result)} €`
    }

    message.innerText = show;
})






let nbr = Number(prompt("Saisir un nombre entre 1 et 4 : "));

switch(true) {
    case nbr == 1:
        alert("La variable est égale à 1");
        break;

    case nbr == 2:
        alert("La variable est égale à 2");
        break;

    case nbr== 3:
        alert("La variable est égale à 3");
        break;

    case nbr == 4:
        alert("La variable est égale à 4");
        break;

    default:
        alert("nbr est inférieur à 1 ou supérieur à 4");
}