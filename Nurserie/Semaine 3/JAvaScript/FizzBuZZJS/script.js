let N = Number(prompt(`Choisissez un nombre N`));

for ( let i =0; i <=N; i++){ 
  
if(i % 3 == 0){
            console.log(`${i} = FIZZ`);}

else if(i % 5== 0){
            console.log(`${i} = BUZZ`);}

else if(i % 5==0 && i%3 == 0){
            console.log(`${i} = FIZZBUZZ`);}

else{
    console.log(`${i}`)
}
    }

