let age= Number(prompt(`Saisir l'age du gosse`));

switch (true){
    case age <0:
        alert("impossible");
        break;
    case age >=0 && age <= 3:
        alert("beaucoup trop jeune");
        break;
    case age >3 && age<=5:
        alert("baby");
        break;
    case age >5 && age <= 7:
        alert("poussin");
        break;
    case age >7 && age <=10:
        alert("benjamin");
        break;
    case age >10 && age <=12:
        alert("pupille");
        break;
    case age >12 && age <=15:
        alert("cadet");
        break;
    case age >15 && age <=18:
        alert("confirme");
        break;
    case age >18 && age <=100:
        alert("senior");
        break;
    case age >100:
        alert("probablement plus de ce monde");
        break;
    default:
        alert("erreur de saisie");                         

}
