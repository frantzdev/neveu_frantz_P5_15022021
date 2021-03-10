//recuperation du local storage
const storedBasket = JSON.parse(localStorage.getItem('Basket'));

//boucle du localStorage pour récuperer chaque article individuellement
for (let basketUnit of storedBasket) {
    basketUnit.quantite = parseInt(basketUnit.quantite);
    console.log(basketUnit.id)

    //requette serveur pour acceder aux informations
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);

            // mise en place de la structure HTML
            const mainBasket = document.getElementById("Basket");
            const rowBasket = document.createElement("div");
            const titreBasket = document.createElement("h1");
            const contenairBasket = document.createElement("div");
            const photoBasket = document.createElement("div");
            const imageBasket = document.createElement("img");
            const infoBasket = document.createElement("div");
            const nameBasket = document.createElement("div");
            const identifiantBasket = document.createElement("div");
            const prixUnitaireBasket = document.createElement("div");
            const prixVirgule = document.createElement("div");
            const quantiteBasket = document.createElement("div");
            const prixTotalBasket = document.createElement("div");

            const essai = document.getElementById("essai");

            mainBasket.appendChild(rowBasket);
            rowBasket.appendChild(titreBasket);
            mainBasket.appendChild(contenairBasket);
            contenairBasket.appendChild(photoBasket);
            photoBasket.appendChild(imageBasket);
            contenairBasket.appendChild(infoBasket);
            infoBasket.appendChild(nameBasket);
            infoBasket.appendChild(identifiantBasket);
            infoBasket.appendChild(prixUnitaireBasket);
            infoBasket.appendChild(prixVirgule);
            infoBasket.appendChild(quantiteBasket);
            infoBasket.appendChild(prixTotalBasket);
            mainBasket.appendChild(essai)


            titreBasket.setAttribute("class", "text-center text-uppercase font-weight-bold font-italic border-dark shadow-lg col mt-5");
            mainBasket.setAttribute("class", "container justify-content-center")
            contenairBasket.setAttribute("class", "row mt-5 border border-dark col");
            photoBasket.setAttribute("class", "col-md-6");
            imageBasket.setAttribute("src", response.imageUrl);
            imageBasket.setAttribute("class", "d-block w-75  border-dark rounded");
            infoBasket.setAttribute("class", "col mt-3");
            nameBasket.setAttribute("class", "font-weight-bolder col mt-3");
            identifiantBasket.setAttribute("class", "font-weight-bolder col mt-3");
            prixUnitaireBasket.setAttribute("class", "d-none");
            prixVirgule.setAttribute("class", 'font-weight-bolder col mt-3');
            quantiteBasket.setAttribute("class", "font-weight-bolder col mt-3");
            prixTotalBasket.setAttribute("class", "font-weight-bolder col text-right mt-3");

            //mise en place de la fonction calculer le prix total de chaque article dans le panier
            function itemTotalPrice(number1, number2) {
                return number1 * number2;
            };
            //affiche l'article unitaire du panier
            nameBasket.innerHTML = response.name;
            prixVirgule.innerHTML = response.price / 100 + ",00 €";
            identifiantBasket.innerHTML = response._id;
            quantiteBasket.innerHTML = basketUnit.quantite;
            prixUnitaireBasket.innerHTML = response.price;
            let result = itemTotalPrice(prixUnitaireBasket.innerHTML, basketUnit.quantite)
            prixTotalBasket.innerHTML = "Prix total TTC = " + result / 100 + ",00 €";


            essai.innerHTML = result


        };
    }
    request.open("GET", "http://localhost:3000/api/cameras/" + basketUnit.id);
    request.send();
};
//recuperation formulaire du Basket

const formulaireBasket = document.getElementById("formulaireBasket");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");

// -----------------------validation firstName----------------------------
function validFirstName(firstName) {
    let firstNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
    let testfirstNameRegex = firstNameRegex.test(firstName.value);
    console.log(testfirstNameRegex);
    let small = firstName.nextElementSibling;
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
//ecoute des modifications sur input firstName
firstName.addEventListener("change", () => {
    console.log(validFirstName(firstName));
});


// -----------------------validation LastName----------------------------
function validLastName(lastName) {
    let lastNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
    let testlastNameRegex = lastNameRegex.test(lastName.value);
    console.log(testlastNameRegex);
    let small = lastName.nextElementSibling;
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
//ecoute des modifications sur input LastName
lastName.addEventListener("change", () => {
    validLastName(lastName);
});



// -----------------------validation adress----------------------------
function validAddress(address) {
    let adressRegex = new RegExp('^[0-9 A-Za-z\é\è\ê\ -]+$');
    let testaddressRegex = adressRegex.test(address.value);
    console.log(testaddressRegex);
    let small = address.nextElementSibling;
    if (testaddressRegex) {
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
//ecoute des modifications sur input adress
address.addEventListener("change", () => {
    validAddress(address);
});


// -----------------------validation city----------------------------
function validCity(city) {
    let cityRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
    let testcityRegex = cityRegex.test(city.value);
    console.log(testcityRegex);
    let small = city.nextElementSibling;
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
//ecoute des modifications sur input city
city.addEventListener("change", () => {
    validCity(city);
});


// -----------------------validation email----------------------------
function validEmail(email) {
    let emailRegex = new RegExp('^[a-zA-Z0-9-._]+[@]{1}[a-zA-Z0-9-._]+[.]{1}[a-z]{2,10}$', 'g');
    let testemailRegex = emailRegex.test(email.value);
    let small = email.nextElementSibling;
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
//ecoute des modifications sur input Email
email.addEventListener("change", () => {
    validEmail(email);
});

// --------------------------------POST--------------------------

//créer un tableau dans une variable
    //créer un object contact dans une variable
// l'object contact doit etre complété par les données du formulaire
// le tableau doit être complété avec les ID de chaque article présent dans le panier
//ajouter les 2 variables dans une seule qui doit être envoyé sur le serveur

//ecouter la soumission du formulaire

formulaireBasket.addEventListener('submit', (event) => {
    event.preventDefault();

    if(validFirstName(firstName), validLastName(lastName), validAddress(address), validCity(city), validEmail(email)  == true) {
        
    } else {
        event.preventDefault();
        alert("Désolé un champ du formulaire n'est pas valide")
    }
    
    let products = [];
    console.log(products)
    for (let eachId of storedBasket) {
        products.push(eachId.id);
        
    }
    class contacts {
        constructor(firstName, lastName, address, city, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address;
            this.city = city;
            this.email = email;
        }
    }
    let contact = new contacts(firstName.value, lastName.value,address.value, city.value, email.value)
    console.log(contact)


    let essai = {
        contact,
        products
    };

    localStorage.setItem('essai', JSON.stringify(essai))
    console.log(essai)
     
    let request = new XMLHttpRequest();
request.open("POST", "http://localhost:3000/api/cameras/order");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(essai));

});
    


//format POSTMAN
// {
//     "contact": {
//         "firstName": "string",
//         "lastName": "string",
//         "address": "string",
//         "city": "string",
//         "email": "string"
//     },
//     "products": []
// }