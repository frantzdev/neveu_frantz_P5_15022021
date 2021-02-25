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
const containerFormulaire = document.createElement("div");
const formulaireTitre = document.createElement("h2");
const formulairePanier = document.createElement("form");
const formGroupPanier = document.createElement("div");
const labelFirstName = document.createElement("label");
const firstName = document.createElement("input");
const labellastName = document.createElement("label");
const lastName = document.createElement("input");
const labelAdress = document.createElement("label");
const adress = document.createElement("input");
const labelCity = document.createElement("label");
const city = document.createElement("input");
const labelEmail = document.createElement("label");
const email = document.createElement("input");
const containerBouton = document.createElement("div");
const boutonValidationPanier = document.createElement("input");

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
mainPanier.appendChild(containerFormulaire);
containerFormulaire.appendChild(formulaireTitre);
containerFormulaire.appendChild(formulairePanier);
formulairePanier.appendChild(formGroupPanier);
formGroupPanier.appendChild(labelFirstName);
formGroupPanier.appendChild(firstName);
formGroupPanier.appendChild(labellastName);
formGroupPanier.appendChild(lastName);
formGroupPanier.appendChild(labelAdress);
formGroupPanier.appendChild(adress);
formGroupPanier.appendChild(labelCity);
formGroupPanier.appendChild(city);
formGroupPanier.appendChild(labelEmail);
formGroupPanier.appendChild(email);
formGroupPanier.appendChild(containerBouton);
containerBouton.appendChild(boutonValidationPanier);


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
containerFormulaire.setAttribute("class", "row justify-content-center mt-5")
formulaireTitre.setAttribute("class", "text-center text-uppercase font-weight-bold font-italic border-dark shadow-lg col-8 mt-5");
formulairePanier.setAttribute("class", " col-8 my-5");
formGroupPanier.setAttribute("class", " ");
labelFirstName.setAttribute("for", "prenom");
labelFirstName.setAttribute("class", "mt-3");
firstName.setAttribute("name", "prenom");
firstName.setAttribute("class", "form-control shadow-lg");
firstName.setAttribute("value", " ");
labellastName.setAttribute("for", "nom");
labellastName.setAttribute("class", "mt-3");
lastName.setAttribute("name", "prenom");
lastName.setAttribute("class", "form-control shadow-lg");
lastName.setAttribute("value", " ");
labelAdress.setAttribute("for", "adress")
labelAdress.setAttribute("class", "mt-3");
adress.setAttribute("name", "adress");
adress.setAttribute("class", "form-control shadow-lg");
adress.setAttribute("value", " ");
labelCity.setAttribute("for", "city")
labelCity.setAttribute("class", "mt-3");
city.setAttribute("name", "city");
city.setAttribute("class", "form-control shadow-lg");
city.setAttribute("value", " ");
labelEmail.setAttribute("for", "email")
labelEmail.setAttribute("class", "mt-3");
email.setAttribute("name", "email");
email.setAttribute("class", "form-control shadow-lg");
email.setAttribute("value", " ");
containerBouton.setAttribute("class", "text-center");
boutonValidationPanier.setAttribute("class", "btn btn-dark mt-5");
boutonValidationPanier.setAttribute("type", "submit");
boutonValidationPanier.setAttribute("value", "valider votre commande");


titrePanier.innerHTML = "PANIER"
prixTotalPanier.innerHTML = prixUnitairePanier * quantitePanier
formulaireTitre.innerHTML = "Formulaire de commande"
labelFirstName.innerHTML = "Prenom"
firstName.value = "jean";
labellastName.innerHTML = "Nom"
labelAdress.innerHTML = "adresse";
labelCity.innerHTML = "ville";
labelEmail.innerHTML = "email"
lastName.value = "edouard"
adress.value = "dole";
city.value = "ville";
email.value = "gsgsgsg"

//recuperation du local storage
const afficherNom = () => {
    let quantiteStorage = localStorage.getItem("quantite");
    quantitePanier.innerHTML = "Quantité : " + quantiteStorage;
    let prixStorage = localStorage.getItem("prix");
    prixUnitairePanier.innerHTML = "Prix unitaire : " + prixStorage;
    let nameStorage = localStorage.getItem("titre");
    namePanier.innerHTML = nameStorage;
    let idStorage = localStorage.getItem("identifiant");
    identifiantPanier.innerHTML = "Numero d'article : " + idStorage;
    let imageStorage = localStorage.getItem("images");
    imagePanier.innerHTML = imageStorage;
};

afficherNom()