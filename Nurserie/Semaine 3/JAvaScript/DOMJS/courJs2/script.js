// function somme(a, b) {
//     return a + b;
// }

// function divise(c,d) {
//     return c / d;
// }
// let nbr1 = Number(prompt("Saisir nombre 1 : "));

// let nbr2 = Number(prompt("Saisir nombre 2 : "));
// alert(somme(nbr1, nbr2));
// alert(divise(nbr1,nbr2));
const show = document.querySelector("#show");
let result = "";

function affichage(id) {
    result += document.getElementById(id).value;
    show.innerHTML = `<h1>${result}</h1>`;
}
