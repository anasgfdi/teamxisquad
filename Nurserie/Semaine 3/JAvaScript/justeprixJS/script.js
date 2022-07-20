let x = prompt(`Saisissez le nombre de tentatives pour réussir`);


function random (min,max){
    return Math.round(Math.random()*(max-min)+min);
}

let N= random(1,101);
console.log(N);


for(let i=0; i<=x; i++){

    let E = prompt(`Quel est votre estimation `);

if(E<N){
    alert(`C'est plus, il vous reste ${x - i} chances`);
}
else if(E>N){
    alert(`C'est moins, il vous reste ${x - i} chances`);
}
else if (E==N){
    alert(`Bingo!!!`);
}
else if ((x-i)==0){
    alert(`Vous avez perdu`);
}

}


// alert(`You lose, try again!`);
