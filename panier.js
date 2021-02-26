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
    prixUnitairePanier.innerHTML = "Prix unitaire : " + prixStorage / 100 + ",00 €";
    let nameStorage = localStorage.getItem("titre");
    namePanier.innerHTML = nameStorage;
    let idStorage = localStorage.getItem("identifiant");
    identifiantPanier.innerHTML = "Numero d'article : " + idStorage;
    let prixBrutStorage = localStorage.getItem("prixBrut");
    prixTotalPanier.innerHTML = prixBrutStorage;
    // let imageStorage = localStorage.getItem("images");
    // imagePanier.innerHTML = imageStorage;

    //fonction de multiplication pour le panier =  prix * quantite
    function addition(tarif, nombre) {
        return tarif * nombre;
    };
    let prixTotal = (addition(prixBrutStorage, quantiteStorage));
    console.log(prixTotal)
    prixTotalPanier.innerHTML = "Prix total TTC : " + prixTotal / 100 + ",00 €";

};

afficherNom()



//recuperation formulaire du Panier
const formulairePanier = document.getElementById("formulairePanier");
mainPanier.appendChild(formulairePanier);
//Nous testons le fait que l'on retrouve bien l'input firstName dans le formulaire
console.log(formulairePanier.firstName);

//ecoute des modifications sur input firstName
formulairePanier.firstName.addEventListener("change", ()=> {
    validFirstName(formulairePanier.firstName);
});
// -----------------------validation firstName----------------------------
const validFirstName = function(firstName) {
    let firstNameRegex = new RegExp('^[A-Za-z\é\è\ê\-]+$');
    let testfirstNameRegex = firstNameRegex.test(firstName.value);
    console.log(testfirstNameRegex);
    let small = formulairePanier.firstName.nextElementSibling;
    controleValidation(small, testfirstNameRegex);
};


//ecoute des modifications sur input LastName
formulairePanier.lastName.addEventListener("change", ()=> {
    validLastName(formulairePanier.lastName);
});
// -----------------------validation LastName----------------------------
const validLastName = function(inputlastName) {
    let lastNameRegex = new RegExp('^[A-Za-z\é\è\ê\-]+$');
    let testlastNameRegex = lastNameRegex.test(inputlastName.value);
    console.log(testlastNameRegex);
    let small = formulairePanier.lastName.nextElementSibling;
    controleValidation(small, testlastNameRegex);
};


//ecoute des modifications sur input adress
formulairePanier.adress.addEventListener("change", ()=> {
    validadress(formulairePanier.adress);
});
// -----------------------validation adress----------------------------
const validadress = function(inputadress) {
    let adressRegex = new RegExp('^[0-9 A-Za-z\é\è\ê\-]+$');
    let testadressRegex = adressRegex.test(inputadress.value);
    console.log(testadressRegex);
    let small = formulairePanier.adress.nextElementSibling;
    controleValidation(small, testadressRegex);
};


//ecoute des modifications sur input city
formulairePanier.city.addEventListener("change", ()=> {
    validcity(formulairePanier.city);
});
// -----------------------validation city----------------------------
const validcity = function(inputcity) {
    let cityRegex = new RegExp('^[A-Za-z\é\è\ê\-]+$');
    let testcityRegex = cityRegex.test(inputcity.value);
    console.log(testcityRegex);
    let small = formulairePanier.city.nextElementSibling;
    controleValidation(small, testcityRegex);
};


//ecoute des modifications sur input Email
formulairePanier.email.addEventListener("change", ()=> {
    validEmail(formulairePanier.email);
});
// -----------------------validation email----------------------------
const validEmail = function(email) {
    let emailRegex = new RegExp('^[a-zA-Z0-9-._]+[@]{1}[a-zA-Z0-9-._]+[.]{1}[a-z]{2,10}$','g');
    let testemailRegex = emailRegex.test(email.value);
    console.log(testemailRegex);
    let small = formulairePanier.email.nextElementSibling;
    controleValidation(small, testemailRegex);
};


// création d'une fonction pour tester la validation de chaque input
function controleValidation(element, test) {
    if (test) {
        element.innerHTML = "Format Valide";
        element.style.color = "green";
    } else {
        element.innerHTML = "Format non Valide";
        element.style.color = "red";
    }
};






