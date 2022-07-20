let x = Number(prompt(`Saisissez le 1er nombre`));
let y = Number(prompt(`Saisissez le 2eme nombre`));
let z = Number(prompt(`Saisissez le 3eme nombre`));

switch(true){
    case x-y>0 && x-z>0:
        alert(`${x} est le plus grand`);
        break;
    case y-x>0 && y-z>0:
        alert(`${y} est le plus grand`);
        break;
    case z-x>0 && z-y>0:
        alert(`${z} est le plus grand`);
        break; 
    default:
        alert(`Erreur`);       
}