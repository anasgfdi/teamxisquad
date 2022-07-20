const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(position) {
    let crd = position.coords;

    document.write(`Votre position actuelle est de latitude : ${crd.latitude} et de longitude ${crd.longitude}, la précision est de ${crd.accuracy} métres`);

    // switch(true){
    //     case crd.latitude >= 50.61 && crd.latitude <= 50.65  && crd.longitude >=  2.97 && crd.longitude <= 3.11 :
    //         document.write(`Vous vous trouvez à Lille`);
    //         break;
    //     case crd.latitude == 48.86 && crd.longitude == 2.33:
    //         document.write(`Vous n'etes pas à Lille`);
    //         break;
    
    //     default:
    //         document.write(`Vous n'etes pas à lille`);
    // }

    if (crd.latitude >= 50.61 && crd.latitude <= 50.65  && crd.longitude >=  2.97 && crd.longitude <= 3.11){
        alert(`vous etes à lille`)
    }
    else{alert(`Vous etes ailleurs`)};

}

function error(err) {
    console.warn(`Erreur (${err.code}) : ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options)


