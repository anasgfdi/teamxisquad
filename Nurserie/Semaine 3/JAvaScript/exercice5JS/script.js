let note = Number(prompt(`Entrez votre note`));

if(note>=0 && note<=20){
    switch(true){
        case note >=0 && note <5:
            alert(`Catastrophique, il faut tout revoit`);
            break;
        case note >=5 && note <11:
            alert(`Insuffisant`);
            break;
        case note >=11 && note < 15:
            alert(`Peut mieux faire`);
            break;
        case note >= 15 && note <18:
            alert(`Bien`);
            break;
        case note >=18 && note <=20:
            alert(`Excellent travail`);
            break;
        default:
            alert(`Erreur`);     
    }
}

else{
    alert(`Erreur! Veuillez entrer une note comprise entre 0 et 20`)
}

