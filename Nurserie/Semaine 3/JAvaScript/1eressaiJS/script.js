let adresse =`Hello world how are you ` ;
let age = 35;
let nom = "Anas Ganfoudi";

console.log(adresse);
console.log(age);
console.log(nom);

console.log(`Bonjour mon age est de ${age} ans!`);

age = 41;
adresse = "Bonjour l'equipe";

console.log("bonjour mon age est de " + age + " ans!");
console.log(adresse);

let moyenne = 19;
console.log(`Ma moyenne en JavaScript est de ${moyenne}`);

console.log(`Mon nom est composé de ${nom.length} caractères`);

console.log(nom.split('a'));

const number = new Array(1,2,3,4,5,6,7,8,9,10);
const fruits = ["mangue","pastèque","poire","orange","ananas","melon","pomme"];


console.log(fruits[3]);
fruits.push("hindi");

console.log(fruits[3]);
console.log(fruits[7]);

fruits.pop()
console.log(fruits.indexOf("poire")),
console.table(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray(age));
console.log(typeof(nom));

const personne = {
    prenom: "Mounir",
    nom: "Maadour",
    age: 23,
    passions:["foot", "nourriture", "jeux videos"],
    adresse: {
        numero: 48,
        rue: "rue de Wazemmes",
        code_postal: 59000,
        ville: "Lille",
        pays: "France"
    },
    driving_licence: true
};

   console.log(personne.passions);

   console.log(typeof(personne.adresse.code_postal));

   personne.prenom = "Julie";
   console.log(personne);

   personne.email = "julie.maardour@gmail.com";

   console.log(personne);


   const todos = [
    {
    id: 1,
    text: "Faire les courses",
    isCompleted: true,
    },
    {
    id: 2,
    text: "Balade au vieux Lille",
    isCompleted: true,
    },
    {
    id: 3,
    text: "Préparer le diner",
    isCompleted: false,
    },
    {
    id: 4,
    text: "Regarder la TV",
    isCompleted: false,
    },
       ];

// console.log(todos);
// // console.log(todos[3].text);

// // prompt('saisir un nombre')

// let x = Number(prompt(`saisir un chiffre entre 0 et 3`))
// // alert()

// if (todos[x].isCompleted==true){
//     alert(`Julie a effectue la tache`);
// }
// else{
//     alert(`Julie n'a pas effectue la tache`);
// }

// let age = Number(prompt(`Saisir votre age`))

// switch (true){
//     case age 
// }

for(let i=0; i<todos.length;i++){
    if (todos[i].isCompleted == true){
        document.write(todos[i].text+ "FAIT" + "<br>");}

        else{
            document.write(todos[i].text + "A FAIRE" +"<br>");
        }
    }


// boucle while

let i = 0;
while(i<3){
    document.write(`${todos[i].text} <br>`);
    i++;
}
todos.forEach(function(todo){
    document.write(todo.text+ "<br>");
}

)

function somme(a,b){
    document.write(a+b);
}

somme(12,14);

function affichageDate(){
    const date = new Date();
    document.write(`Aujourd'hui nous sommes le ${date.getDate()}/ ${date.getMonth()+1}/ ${date.getFullYear()}`)
}
affichageDate();

