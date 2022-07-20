

// Create Object here
// =========================================
let episode={
    title : "Le retour de Ma Koko",
    duration : "57",
    hasBeenWatched : true
};



// =========================================

document.querySelector('#episode-info').innerText = `Épisode: ${episode.title}
Durée: ${episode.duration} min
${episode.hasBeenWatched ? 'Déjà regardé' : 'Pas encore regardé'}`