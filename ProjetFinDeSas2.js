let prompt = require('prompt-sync')();

let candidats = [
    { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Independant", age: 40, electeurs: [] },
    { cin: "CB276354", nom: "Doukaali", prenom: "Ihab", partiPolitique: "PAM", age: 33, electeurs: ["ZX328694", "AS675849", "NB764539"] },

    { cin: "HG645328", nom: "Manssouri", prenom: "Ahmed", partiPolitique: "PJD", age: 67, electeurs: ["JH241679",] },

    { cin: "JH241679", nom: "Elfatmi", prenom: "Houssam", partiPolitique: "Independant", age: 45, electeurs: [] },

    { cin: "AS675849", nom: "El khalifi", prenom: "Achraf", partiPolitique: "Independant", age: 55, electeurs: [] },

    { cin: "KJ985028", nom: "El Asri", prenom: "Rayan", partiPolitique: "Independant", age: 56, electeurs: [] },

    { cin: "NB764539", nom: "El Moussaoui", prenom: "Mohammed", partiPolitique: "Istiqlal", age: 43, electeurs: [] },

    { cin: "MK786483", nom: "Shaba", prenom: "Ranya", partiPolitique: "Independant", age: 50, electeurs: [] },

    { cin: "LJ764382", nom: "Rachidi", prenom: "Hayat", partiPolitique: "Independant", age: 58, electeurs: [] },

    { cin: "SD321576", nom: "Souiri", prenom: "Souad", partiPolitique: "RNI", age: 65, electeurs: ["KL275946"] },

    { cin: "ZX328694", nom: "Torrabi", prenom: "Said", partiPolitique: "Independant", age: 33, electeurs: [] },

    { cin: "XC218794", nom: "Samaoui", prenom: "Yahya", partiPolitique: "PAM", age: 57, electeurs: [] },

    { cin: "KL275946", nom: "Chaydmi", prenom: "Hamid", partiPolitique: "PJD", age: 61, electeurs: [] }
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
            modifier();

            break;
        case 6:
            supprime();

            break;
        case 7:
            recherche();

            break;
        case 8:
            Statistiques()

            break;
        default:
            menu();


    }
}

function ajouter() {
    let cin = prompt("Veuillez entrer votre cin : ");
    console.log("______________________________________________")
    let nom = prompt("Veuillez entrer votre nom : ");
    console.log("______________________________________________")
    let prenom = prompt("Veuillez entrer votre prenom : ");
    console.log("______________________________________________")
    let partiPolitique = prompt("Veuillez entrer votre partiPolitique : ");
    console.log("______________________________________________")
    let age = +prompt("Veuillez entrer votre age : ");
    console.log("______________________________________________")
    let objt = { cin: cin, nom: nom, prenom: prenom, partiPolitique: partiPolitique, age: age, electeurs: [] }
    console.log("______________________________________________")
    candidats.push(objt);
    console.log("========================================================")
    console.log("Votre opperation est reussie ..")
    console.log("========================================================")

} menu();


function ajouterPlusieur() {
    let num = +prompt("Veuillez entrer le nombre de condidat que vous voullez ajouter :");

    for (let i = 0; i < num; i++) {
        let cin = prompt("Veuillez entrer le cin : ");
        console.log("______________________________________________")
        let nom = prompt("Veuillez entrer le nom : ");
        console.log("______________________________________________")
        let prenom = prompt("Veuillez entrer le prenom : ");
        console.log("______________________________________________")
        let partiPolitique = prompt("Veuillez entrer le partiPolitique : ");
        console.log("______________________________________________")
        let age = +prompt("Veuillez entrer votre age : ");
        console.log("______________________________________________")
        let objt = { cin: cin, nom: nom, prenom: prenom, partiPolitique: partiPolitique, age: age, electeurs: [] }
        candidats.push(objt);
        console.log("______________________________________________")
    }
    console.log("========================================================")
    console.log("Votre opperation est reussie .. ")
    console.log("========================================================")


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
            console.log("______________________________________________")


            console.log("Candidat " + i + ":");
            console.log("CIN : " + candidats[i].cin);
            console.log("Nom : " + candidats[i].nom);
            console.log("Prenom : " + candidats[i].prenom);
            console.log("Age : " + candidats[i].age);
            console.log("partiPolitique : " + candidats[i].partiPolitique);
            console.log("electeurs : " + candidats[i].electeurs);

            console.log("______________________________________________")
        }


    }
} menu();


function voter() {
    let cin1 = prompt("Veuillez entrer votre CIN ");
    console.log("______________________________________________")
    let age222 = +prompt("Veuillez entrer ton age : ")
    console.log("______________________________________________")
    let i;
    let dejaVote = false;

    for (i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (candidats[i].electeurs[j] === cin1 || age222 < 18) {
                dejaVote = true;
                break;
            }

        }
        if (dejaVote == true) {

            break;
        }

    }




    if (dejaVote == true) {

        console.log("Vous n'avez pas le droit pour voter.. ");

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
    let num;
    console.log("1- Modifier le parti politique d'un candidat ")
    console.log("__________________________________________________")

    console.log("2- Modifier l'age d'un candidat  ")
    console.log("__________________________________________________")

    num = + prompt("Veuillez choose votre choix : ");
    if (num === 1) {
       
        console.log("_______________________________________________")
       
        let cin4 = prompt("Veuillez entrer le CIN de candidat : ");
        let result = false;
        for (let i = 0; i < candidats.length; i++) {
            if (cin4 === candidats[i].cin) {
                result = true

                let partiP = prompt("Veuillez modifier le parti politique de cette candidat : ");

                console.log("_______________________________________________")

                candidats[i].partiPolitique = partiP;
            }

        }

        if (result === true) {


            console.log("Operation reussie ... ");
        }
        else
            console.log("n'est pas de candidat pour cette CIN");
    }


    else if (num === 2) {
        let cin4 = prompt("Veuillez entrer le CIN de candidat : ");
      console.log("_______________________________________________")
        let ageF = false;
        for (let j = 0; j < candidats.length; j++) {
            if (cin4 === candidats[j].cin) {
                ageF = true;
              
                let age1 = +prompt("Veuillez modifier l'age de cette candidat : ");
            
            console.log("_______________________________________________")
            
                candidats[j].age = age1;

            }

        }
        if (ageF === true) {

            console.log("Operation reussie ... Votre age est modifier . ");
        }
        else
            console.log("n'est pas de candidat pour cette CIN");
    }
}







function supprime() {
    let tab = []
    let cin5 = prompt("Veuillez entrer le CIN de candidat : ");
    let result1 = false;

    for (let i = 0; i < candidats.length; i++) {
        if (cin5 === candidats[i].cin) {
            result1 = true;

        }
        else
            tab.push(candidats[i]);



    }
    candidats = tab;

    if (result1 === true) {
        console.log("Voila candidat est supprimer ")
        console.log("__________________________________________________")


        for (let k = 0; k < candidats.length; k++) {
            let tab2 = [];
            for (let j = 0; j < candidats[k].electeurs.length; j++) {
                if (cin5 !== candidats[k].electeurs[j]) {
                    tab2.push(candidats[k].electeurs[j])
                }
            }
            candidats[k].electeurs = tab2
        }

    }
    else
        console.log("__________________________________________________")

    console.log("N'est pas des candidat a cette CIN ");
    console.log("__________________________________________________")


}
menu();



function recherche() {
    let index4;
    let result = false;

    let name = prompt("Entrer le Nom de candidat : ");

    for (let i = 0; i < candidats.length; i++) {
        if (name === candidats[i].nom) {
            result = true;
            index4 = i;
        }

    }
    if (result === true) {
        console.log("========================================================")
        console.log("========================================================")
        console.log("Candidat " + index4 + ":");
        console.log("CIN : " + candidats[index4].cin);
        console.log("Nom : " + candidats[index4].nom);
        console.log("Prenom : " + candidats[index4].prenom);
        console.log("Age : " + candidats[index4].age);
        console.log("partiPolitique : " + candidats[index4].partiPolitique);
        console.log("electeurs : " + candidats[index4].electeurs);
        console.log("========================================================")
        console.log("========================================================")
    }
    else
        console.log("Non candidat par cette nom");



}

function Statistiques() {
    console.log("1- Afficher le nombre total de candidats.");
    console.log("2- Afficher le nombre total de votes exprimes dans toute l'election.");
    console.log("3- Afficher le Top 3 des candidats ayant le plus de votes.");
    console.log("4- Afficher le nombre de candidats par parti politiques .");
    let num = + prompt("Veuillez choose une choix : ")

    switch (num) {
        case 1:
            AfficherTotal22();
            break;
        case 2:
            AfficherNmbr22();
            break;
        case 3:
            AfficherTop();
            break;
        case 4:
            AfficherNmbrParti();
            break;
        default:
            console.log("Ressayer... s'il vous plait ")
    };
    function AfficherTotal22() {
        console.log("========================================================")
        console.log("Le nombre total de candidats est :" + candidats.length)
        console.log("========================================================")
    }

    function AfficherNmbr22() {
        let count = 0;

        for (let i = 0; i < candidats.length; i++) {

            count = count + candidats[i].electeurs.length
        }

        console.log("========================================================")
        console.log("Le nombre total  de votes exprimes dans toute l'election : " + count)
        console.log("========================================================")
    }


    function AfficherTop() {

        let swp2;

        for (let i = 0; i < candidats.length - 1; i++) {
            for (let j = i + 1; j < candidats.length; j++) {
                if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
                    swp2 = candidats[j]
                    candidats[j] = candidats[i]
                    candidats[i] = swp2
                }
            }
        }

        for (let j = 0; j <= 2; j++) {

            console.log("========================================================")

            console.log("Candidat " + j + ":");
            console.log("CIN : " + candidats[j].cin);
            console.log("Nom : " + candidats[j].nom);
            console.log("Prenom : " + candidats[j].prenom);
            console.log("Age : " + candidats[j].age);
            console.log("partiPolitique : " + candidats[j].partiPolitique);
            console.log("electeurs : " + candidats[j].electeurs);


            console.log("========================================================")
        }
    }

    function AfficherNmbrParti() {

        let nmbr = 0;
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].partiPolitique !== "Independant") {

                nmbr = nmbr + 1;
            }
        }
        console.log("========================================================")
        console.log(" Le nombre de candidats par parti politiques est : " + nmbr);
        console.log("========================================================")
    }
}