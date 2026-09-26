let prompt = require('prompt-sync')();

let candidats = [
    { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Independant", age: 40, electeurs: [] },
    { cin: "CB276354", nom: "Doukaali", prenom: "Ihab", partiPolitique: "PAM", age: 33, electeurs: ["ZX328694", "AS675849"] },

    { cin: "HG645328", nom: "Manssouri", prenom: "Ahmed", partiPolitique: "PJD", age: 67, electeurs: [] },

    { cin: "JH241679", nom: "Elfatmi", prenom: "Houssam", partiPolitique: "Independant", age: 45, electeurs: [] },

    { cin: "AS675849", nom: "El khalifi", prenom: "Achraf", partiPolitique: "Independant", age: 55, electeurs: [] },

    { cin: "KJ985028", nom: "El Asri", prenom: "Rayan", partiPolitique: "Independant", age: 56, electeurs: [] },

    { cin: "NB764539", nom: "El Moussaoui", prenom: "Mohammed", partiPolitique: "Istiqlal", age: 43, electeurs: [] },

    { cin: "MK786483", nom: "Shaba", prenom: "Ranya", partiPolitique: "Independant", age: 50, electeurs: [] },

    { cin: "LJ764382", nom: "Rachidi", prenom: "Hayat", partiPolitique: "Independant", age: 58, electeurs: [] },

    { cin: "SD321576", nom: "Souiri", prenom: "Souad", partiPolitique: "RNI", age: 65, electeurs: ["KL275946"] },

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
            ajouter();

            break;
        case 2:
            ajouterPlusieur();

            break;
        case 3:
            Afficher();

            break;
        case 4:
            voter();

            break;
        case 5:
            modifier()

            break;
        case 6:
            supprime()

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

} menu();


function ajouterPlusieur() {
    let num = +prompt("Veuillez entrer le nombre de condidat que vous voullez ajouter :");
    let i = 0;
    while (i <= num) {
        let cin = prompt("Veuillez entrer le cin : ");
        let nom = prompt("Veuillez entrer le nom : ");
        let prenom = prompt("Veuillez entrer le prenom : ");
        let partiPolitique = prompt("Veuillez entrer le partiPolitique : ");
        let age = +prompt("Veuillez entrer votre age : ");
        let objt = { cin: cin, nom: nom, prenom: prenom, partiPolitique: partiPolitique, age: age, electeurs: [] }
        candidats.push(objt);

        i++
    }

} menu();


function Afficher() {
    let swp;

    for (let i = 0; i < candidats.length - 1; i++) {

        for (let j = i + 1; j < candidats.length; j++) {
            if (candidats[i] < candidats[j]) {
                swp = candidats[j]
                candidats[j] = candidats[i]
                candidats[i] = swp
            }
        }
    }





    for (let i = 0; i !== candidats.length; i++) {



        if (candidats[i].partiPolitique !== "Independant") {

            console.log("Candidat " + i + ":");
            console.log("CIN : " + candidats[i].cin);
            console.log("Nom : " + candidats[i].nom);
            console.log("Prenom : " + candidats[i].prenom);
            console.log("partiPolitique : " + candidats[i].partiPolitique);
            console.log("electeurs : " + candidats[i].electeurs);
        }
    }
} menu();


function voter() {
    let cin1 = prompt("Veuillez entrer votre CIN ");
    let i;
    let dejaVote = false;

    for (i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (candidats[i].electeurs[j] === cin1) {
                dejaVote = true;
                break;
            }

        }
        if (dejaVote == true) {

            break;
        }

    }




    if (dejaVote == true) {

        console.log("Vous avez deja vote ");

    }
    else {

        console.log("vous avez le droit pour voter :");
        let cinC = prompt("Veuillez entrer le CIN de candidat : ");



        let trouveCIN = true;

        for (let k = 0; k < candidats.length; k++) {
            if (cinC === candidats[k].cin) {
                trouveCIN = true;
                candidats[k].electeurs.push(cin1);
                break;
            }
            else
                trouveCIN = false;

        }

        if (trouveCIN === true) {


            console.log("Votre vote est reussie ..")
        }
        else
            console.log("N'est pas de candidat ..")



    }

} menu();

function modifier() {
    console.log("1- Modifier le parti politique d'un candidat ")
    console.log("2- Modifier l'age d'un candidat  ")
    let num = prompt("Veuillez choose votre choix : ");
    if (num === 1) {

        let cin4 = prompt("Veuillez entrer le CIN de candidat");
        let result = true;
        for (let i = 0; i < candidats.length; i++) {
            if (cin4 === candidats[i].cin) {
                let partiP = prompt("Veuillez modifier le parti politique de cette candidat .");
                candidats[i].partiPolitique.push(partiP);
                result = true
            }

        }

        if (result === true) {

            console.log("Operation reussie ... ");
        }
        else
            console.log("n'est pas de candidat pour cette CIN");
    }


    else if (num === 2) {
        let cin4 = prompt("Veuillez entrer le CIN de candidat");
        let ageF = true;
        for (let j = 0; j < candidats.length; j++) {
            if (cin4 === candidats[j].cin) {
                let age1 = prompt("Veuillez modifier l'age de cette candidat .");
                candidats[j].age.push(age1);

            }
            else
                break;
        }
        if (ageF === true) {

            console.log("Operation reussie ... Votre age est modifier . ");
        }
        else
            console.log("n'est pas de candidat pour cette CIN");
    }
}






let a;
function supprime() {
    let tab = [];
    let cin5 = prompt("Veuillez entrer le CIN de candidat : ");

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin5) {
            a = i;
        }
    }
    for (let j = 0; j < candidats.length; j++) {
        if (candidats[j] === candidats[a]) {
            continue;
        }
        else
            tab[tab.length] = candidats[j];
    }

    let tab1 = [];

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].electeurs === cin5) {
            for (let j = 0; j < candidats.length; j++) {
                if (candidats[i].electeurs === candidats[j].electeurs) {
                    continue
                }
                else
                    tab1[tab1.length] = candidats[i].electeurs;
            }
        }
    }
}
menu();