// Create variables here
// =========================================
let episodeTitle = " La rencontre avec Ma Koko ";
let episodeDuration = "57";
let hasBeenWatched = prompt(`Avez-vous regardez l'episode: La rencontre avec Ma Koko?`)

if(hasBeenWatched==="oui"){
    document.querySelector('#episode-info').innerText = `Vous avez regardez le retour de Ma Koko`}

else{
    document.querySelector('#episode-info').innerText = `Vous avez ratez l'inratable`;
}
   



// =========================================

// document.querySelector('#episode-info').innerText = `Épisode: ${episodeTitle}
// Durée: ${episodeDuration} min
// ${hasBeenWatched ? 'Déjà regardé' : 'Pas encore regardé'}`