// mise en place de la structure HTML
const mainPanier = document.getElementById("panier");
const rowPanier = document.createElement("div");
const titrePanier = document.createElement("h1");
const contenairPanier = document.createElement("div");
const photoPanier = document.createElement("div");
const imagePanier = document.createElement("img");
const infoPanier = document.createElement("div");
const namePanier = document.createElement("div");
const identifiantPanier = document.createElement("div");
const prixUnitairePanier = document.createElement("div");
const quantitePanier = document.createElement("div");
const prixTotalPanier = document.createElement("div");
const titreFormulaire = document.getElementById("titreFormulaire");
const formulairePanier = document.getElementById("formulairePanier");

mainPanier.appendChild(rowPanier);
rowPanier.appendChild(titrePanier);
mainPanier.appendChild(contenairPanier);
contenairPanier.appendChild(photoPanier);
photoPanier.appendChild(imagePanier);
contenairPanier.appendChild(infoPanier);
infoPanier.appendChild(namePanier);
infoPanier.appendChild(identifiantPanier);
infoPanier.appendChild(prixUnitairePanier);
infoPanier.appendChild(quantitePanier);
infoPanier.appendChild(prixTotalPanier);
mainPanier.appendChild(titreFormulaire);
mainPanier.appendChild(formulairePanier);

titrePanier.setAttribute("class", "text-center text-uppercase font-weight-bold font-italic border-dark shadow-lg col mt-5");
contenairPanier.setAttribute("class", "row mt-5 border border-dark");
photoPanier.setAttribute("class", "col-md-6");
imagePanier.setAttribute("src", "logo/logo.png");
imagePanier.setAttribute("class", "d-block w-100 border-dark rounded");
infoPanier.setAttribute("class", "col mt-3");
namePanier.setAttribute("class", "font-weight-bolder col mt-3");
identifiantPanier.setAttribute("class", "font-weight-bolder col mt-3");
prixUnitairePanier.setAttribute("class", "font-weight-bolder col mt-3");
quantitePanier.setAttribute("class", "font-weight-bolder col mt-3");
prixTotalPanier.setAttribute("class", "font-weight-bolder col text-right mt-3")


//recuperation du local storage
const afficherNom = () => {
    let quantiteStorage = localStorage.getItem("quantite");
    quantitePanier.innerHTML = "Quantité : " + quantiteStorage;
    let prixStorage = localStorage.getItem("prix");
    prixUnitairePanier.innerHTML = "Prix unitaire : " + prixStorage /100 + ",00 €";
    let nameStorage = localStorage.getItem("titre");
    namePanier.innerHTML = nameStorage;
    let idStorage = localStorage.getItem("identifiant");
    identifiantPanier.innerHTML = "Numero d'article : " + idStorage;
    let prixBrutStorage = localStorage.getItem("prixBrut");
    prixTotalPanier.innerHTML = prixBrutStorage;
    // let imageStorage = localStorage.getItem("images");
    // imagePanier.innerHTML = imageStorage;

    //fonction de multiplication pour le panier =  prix * quantite
    function addition(tarif, nombre){
        return tarif * nombre;
    };
    let prixTotal = (addition(prixBrutStorage, quantiteStorage ));
    console.log(prixTotal)
    prixTotalPanier.innerHTML = "Prix total TTC : " +  prixTotal /100 + ",00 €";

};

afficherNom()


//déclenchement evenement sur les input
formulairePanier.addEventListener('change', () => {
    saisiFirstName(firstName);
    saisiLastName(lastName);
    saisiAdress(adress);
    saisiCity(city);
    saisiEmail(email);
});

// mise en place de la regex pour l'input du formulaire
function saisiFirstName(firstName) {
    let firstNameRegex = new RegExp('[a-z A-Z]');
    // test de la regex
    let testfirstNameRegex = firstNameRegex.test(firstName.value);
    console.log(testfirstNameRegex)
    if (testfirstNameRegex) {
        firstName.classList.remove("bg-danger");
        firstName.classList.add("bg-success");
    } else {
        firstName.classList.remove("bg-success");
        firstName.classList.add("bg-danger");
    }
};

function saisiLastName(lastName) {
    let lastNameRegex = new RegExp('[a-z A-Z]');
    //test de la regex
    let testlastNameRegex = lastNameRegex.test(lastName.value);
    if (testlastNameRegex) {
        lastName.classList.remove("bg-danger");
        lastName.classList.add("bg-success");
    } else {
        lastName.classList.remove("bg-success");
        lastName.classList.add("bg-danger");
    }
};

function saisiAdress(adress) {
    let adressRegex = new RegExp('[a-z A-Z]');
    //test de la regex
    let testadressRegex = adressRegex.test(adress.value);
    if (testadressRegex) {
        adress.classList.remove("bg-danger");
        adress.classList.add("bg-success");
    } else {
        adress.classList.remove("bg-success");
        adress.classList.add("bg-danger");
    }
};

function saisiCity(city) {
    let cityRegex = new RegExp('[a-z A-Z]');
    //test de la regex
    let testcityRegex = cityRegex.test(city.value);
    if (testcityRegex) {
        city.classList.remove("bg-danger");
        city.classList.add("bg-success");
    } else {
        city.classList.remove("bg-success");
        city.classList.add("bg-danger");
    }
};

function saisiEmail(email) {
    let emailRegex = new RegExp('[a-z A-Z]');
    //test de la regex
    let testemailRegex = emailRegex.test(email.value);
    if (testemailRegex) {
        email.classList.remove("bg-danger");
        email.classList.add("bg-success");
    } else {
        email.classList.remove("bg-success");
        email.classList.add("bg-danger");
    }
};


