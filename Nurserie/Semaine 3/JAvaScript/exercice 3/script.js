let x = Number(prompt(`Saisissez votre prix de fabrication`));
let y = Number(prompt(`Saisissez votre prix de vente`))
let z = x-y

switch(true){ 
    case x>y: 
        alert(`il y a perte de ${z}`);
        break;
    case x<y :
        alert(`Il y a profit de ${z}`);
        break;

    case x==y :
        alert(`Il y a ni perte ni profit`);
        break;

default:
    alert(`Erreur de saisie`);
}