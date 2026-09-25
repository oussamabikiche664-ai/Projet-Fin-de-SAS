let prompt = require('prompt-sync')();

let candidats = [
    { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Independant", age: 40, electeurs: [] },
    { cin: "CB276354", nom: "Doukaali", prenom: "Ihab", partiPolitique: "PAM", age: 33, electeurs: [] },

    { cin: "HG645328", nom: "Manssouri", prenom: "Ahmed", partiPolitique: "PJD", age: 67, electeurs: [] },

    { cin: "JH241679", nom: "Elfatmi", prenom: "Houssam", partiPolitique: "Independant", age: 45, electeurs: [] },

    { cin: "AS675849", nom: "El khalifi", prenom: "Achraf", partiPolitique: "Independant", age: 55, electeurs: [] },

    { cin: "KJ985028", nom: "El Asri", prenom: "Rayan", partiPolitique: "Independant", age: 56, electeurs: [] },

    { cin: "NB764539", nom: "El Moussaoui", prenom: "Mohammed", partiPolitique: "Istiqlal", age: 43, electeurs: [] },

    { cin: "MK786483", nom: "Shaba", prenom: "Ranya", partiPolitique: "Independant", age: 50, electeurs: [] },

    { cin: "LJ764382", nom: "Rachidi", prenom: "Hayat", partiPolitique: "Independant", age: 58, electeurs: [] },

    { cin: "SD321576", nom: "Souiri", prenom: "Souad", partiPolitique: "RNI", age: 65, electeurs: [] },

    { cin: "ZX328694", nom: "Torrabi", prenom: "Said", partiPolitique: "Independant", age: 33, electeurs: [] },

    { cin: "XC218794", nom: "Samaoui", prenom: "Yahya", partiPolitique: "PAM", age: 57, electeurs: [] },

    { cin: "KL275946", nom: "Chaydmi", prenom: "Hamid", partiPolitique: "Independant", age: 61, electeurs: [] }
];

function menu() {
    console.log("1- Ajouter un nouveau candidat  ");
    console.log("2- Ajouter plusieurs candidats a la fois ");
    console.log("3- Afficher la liste des candidats ");
    console.log("4- Voter pour un candidat ");
    console.log("5- Modifier les information d'un candidat ");
    console.log("6- Supprimer un candidat ");
    console.log("7- Recherche des candidats ");
    console.log("8- Statistiques de l'election ");
    console.log("9- Retour a la menu peincipale");

    let choix = +prompt("Veuillez choose une choix : ");

    switch (choix) {

        case 1:
            ajouter()

            break;
        case 2:
            ajouterPlusieur()

            break;
        case 3:
            Afficher()

            break;
        case 4:


            break;
        case 5:


            break;
        case 6:


            break;
        case 7:


            break;
        case 8:


            break;
        default:
menu();

        
    }
}

function ajouter() {
    let cin = prompt("Veuillez entrer votre cin : ");
    let nom = prompt("Veuillez entrer votre nom : ");
    let prenom = prompt("Veuillez entrer votre prenom : ");
    let partiPolitique = prompt("Veuillez entrer votre partiPolitique : ");
    let age = +prompt("Veuillez entrer votre age : ");
    let objt = { cin: cin, nom: nom, prenom: prenom, partiPolitique: partiPolitique, age: age, electeurs: [] }
    candidats.push(objt);
    menu();
}


function ajouterPlusieur() {
    let num = +prompt("Veuillez entrer le nombre de condidat que vous voullez ajouter :");
    while (i <= num) {
        let cin = prompt("Veuillez entrer votre cin : ");
        let nom = prompt("Veuillez entrer votre nom : ");
        let prenom = prompt("Veuillez entrer votre prenom : ");
        let partiPolitique = prompt("Veuillez entrer votre partiPolitique : ");
        let age = +prompt("Veuillez entrer votre age : ");
        let objt = { cin: cin, nom: nom, prenom: prenom, partiPolitique: partiPolitique, age: age, electeurs: [] }
        candidats.push(objt);

        i++
    }
    menu();
}


function Afficher() {

    for (let i = 0; i !== candidats.length; i++) {
        console.log("Candidat " + i + ":");
        console.log("CIN : " + candidats[i].cin);
        console.log("Nom : " + candidats[i].nom);
        console.log("Prenom : " + candidats[i].prenom);
        console.log("partiPolitique : " + candidats[i].partiPolitique);
        console.log("electeurs : " + candidats[i].electeurs);
    }
}


