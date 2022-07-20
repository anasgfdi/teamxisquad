let x = Number(prompt(`Selectionnez un 1er nombre`));
let operateur = prompt(`Selectionnez un operateur en + - * /`);
let y = Number(prompt(`Selectionnez le 2eme nombre`));

let a = x+y;
let s = x-y;
let m = x*y;
let d = x/y;


switch(true){
    case operateur === "+":
    alert(`${a}`);
    break;
    case operateur === "-":
    alert(`${s}`);
    break;
    case operateur === "*":
    alert(`${m}`);
    break;
    case operateur === "/":
    alert(`${d}`);
    break;
default:
    alert(`Erreur veuillez utiliser des chiffres`);
}