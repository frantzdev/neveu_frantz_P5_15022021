get("http://localhost:3000/api/cameras").then(response => {
    displayPanier(response) 
});
function displayPanier(response) {
    response.forEach(element => {
      
        
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
const prixVirgule =  document.createElement("div");
const quantitePanier = document.createElement("div");
const plusPanier = document.getElementById("plusPanier");
const moinPanier = document.getElementById("moinPanier");
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
infoPanier.appendChild(prixVirgule);
infoPanier.appendChild(quantitePanier);
infoPanier.appendChild(plusPanier);
infoPanier.appendChild(moinPanier);
infoPanier.appendChild(prixTotalPanier);
mainPanier.appendChild(titreFormulaire);

titrePanier.setAttribute("class", "text-center text-uppercase font-weight-bold font-italic border-dark shadow-lg col mt-5");
contenairPanier.setAttribute("class", "row mt-5 border border-dark");
photoPanier.setAttribute("class", "col-md-6");
imagePanier.setAttribute("src", element.imageUrl);
imagePanier.setAttribute("class", "d-block w-100 border-dark rounded");
infoPanier.setAttribute("class", "col mt-3");
namePanier.setAttribute("class", "font-weight-bolder col mt-3");
identifiantPanier.setAttribute("class", "font-weight-bolder col mt-3");
prixUnitairePanier.setAttribute("class", "d-none");
prixVirgule.setAttribute("class", 'font-weight-bolder col mt-3');
quantitePanier.setAttribute("class", "font-weight-bolder col mt-3");
prixTotalPanier.setAttribute("class", "font-weight-bolder col text-right mt-3")

namePanier.innerHTML = element.name;
identifiantPanier.innerHTML = element._id;
prixUnitairePanier.innerHTML = element.price;

   
//recuperation du local storage
const afficherNom = () => {
    const panierStorage = JSON.parse(localStorage.getItem('panier'));  
    for(panier of panierStorage) {
        console.log(panier)
    }
    quantitePanier.innerHTML = panier.quantite;   
    
    //fonction de multiplication pour le panier =  prix * quantite
    function multiplication(tarif, nombre) {
        return tarif * nombre;
    };
    let prixTotal = (multiplication(prixUnitairePanier.innerHTML, quantitePanier.innerHTML));
    prixTotalPanier.innerHTML = "Prix total TTC : " + prixTotal / 100 + ",00 €";
};

afficherNom()


//recuperation formulaire du Panier
const formulairePanier = document.getElementById("formulairePanier");
mainPanier.appendChild(formulairePanier);
});
};

//ecoute des modifications sur input firstName
formulairePanier.firstName.addEventListener("change", ()=> {
    validFirstName(formulairePanier.firstName);
});
// -----------------------validation firstName----------------------------
const validFirstName = function(firstName) {
    let firstNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
    let testfirstNameRegex = firstNameRegex.test(firstName.value);
    console.log(testfirstNameRegex);
    let small = formulairePanier.firstName.nextElementSibling;
    if (testfirstNameRegex) {
        small.innerHTML = "Prénom valide";
        small.style.color = "green";
        console.log("valide")
        return true;
    } else {
        small.innerHTML = "Veuillez entrer un prénom valide";
        small.style.color = "red";
        console.log("non valide")
        return false;
    }
};


//ecoute des modifications sur input LastName
formulairePanier.lastName.addEventListener("change", ()=> {
    validLastName(formulairePanier.lastName);
});
// -----------------------validation LastName----------------------------
const validLastName = function(inputlastName) {
    let lastNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
    let testlastNameRegex = lastNameRegex.test(inputlastName.value);
    console.log(testlastNameRegex);
    let small = formulairePanier.lastName.nextElementSibling;
    if (testlastNameRegex) {
        small.innerHTML = "Nom de famille valide";
        small.style.color = "green";
        console.log("valide")
        return true;
    } else {
        small.innerHTML = "Veuillez entrer un nom de famille valide";
        small.style.color = "red";
        console.log("non valide")
        return false;
    };
};


//ecoute des modifications sur input adress
formulairePanier.adress.addEventListener("change", ()=> {
    validadress(formulairePanier.adress);
});
// -----------------------validation adress----------------------------
const validadress = function(inputadress) {
    let adressRegex = new RegExp('^[0-9 A-Za-z\é\è\ê\ -]+$');
    let testadressRegex = adressRegex.test(inputadress.value);
    console.log(testadressRegex);
    let small = formulairePanier.adress.nextElementSibling;
    if (testadressRegex) {
        small.innerHTML = "Votre adresse est valide";
        small.style.color = "green";
        console.log("valide")
        return true;
    } else {
        small.innerHTML = "Veuillez entrer une adresse valide";
        small.style.color = "red";
        console.log("non valide")
        return false;
    }
};


//ecoute des modifications sur input city
formulairePanier.city.addEventListener("change", ()=> {
    validcity(formulairePanier.city);
});
// -----------------------validation city----------------------------
const validcity = function(inputcity) {
    let cityRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
    let testcityRegex = cityRegex.test(inputcity.value);
    console.log(testcityRegex);
    let small = formulairePanier.city.nextElementSibling;
    if (testcityRegex) {
        small.innerHTML = "Ville valide";
        small.style.color = "green";
        console.log("valide")
        return true;
    } else {
        small.innerHTML = "Veuillez un nom de ville correct";
        small.style.color = "red";
        console.log("non valide")
        return false;
    }
};


//ecoute des modifications sur input Email
formulairePanier.email.addEventListener("change", ()=> {
    validEmail(formulairePanier.email);
});
// -----------------------validation email----------------------------
const validEmail = function(email) {
    let emailRegex = new RegExp('^[a-zA-Z0-9-._]+[@]{1}[a-zA-Z0-9-._]+[.]{1}[a-z]{2,10}$','g');
    let testemailRegex = emailRegex.test(email.value);
    let small = formulairePanier.email.nextElementSibling;
    if (testemailRegex) {
        small.innerHTML = "Email valide";
        small.style.color = "green";
        console.log("valide")
        return true;
    } else {
        small.innerHTML = "Veuillez entrer un email valide";
        small.style.color = "red";
        console.log("non valide")
        return false;
    }
};

//ecouter la soumission du formulaire

formulairePanier.addEventListener('submit', (event)=> {
    event.preventDefault();  
});






