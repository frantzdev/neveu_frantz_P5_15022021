//recuperation du local storage
const storedBasket = JSON.parse(localStorage.getItem('Basket'));
//déclaration d'un tableau pour le calcul de la somme totale du panier
let arrayTotalPriceItem = [];


//boucle du localStorage pour récuperer chaque article individuellement
for (let basketUnit of storedBasket) {
    basketUnit.quantite = parseInt(basketUnit.quantite);
    //console.log(basketUnit.quantite)

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
            const containerFinalPrice = document.getElementById("containerFinalPrice")
            const finalPrice = document.getElementById("finalPrice");

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
            mainBasket.appendChild(containerFinalPrice);
            containerFinalPrice.appendChild(finalPrice)


            titreBasket.setAttribute("class", "text-center text-uppercase font-weight-bold font-italic border-dark shadow-lg col mt-5");
            mainBasket.setAttribute("class", "container justify-content-center")
            contenairBasket.setAttribute("class", "row mt-5 col");
            photoBasket.setAttribute("class", "col-6 col-md-4");
            imageBasket.setAttribute("src", response.imageUrl);
            imageBasket.setAttribute("class", "d-block w-100 rounded shadow-lg");
            infoBasket.setAttribute("class", "col-md-8 col bg-light rounded shadow-lg");
            nameBasket.setAttribute("class", "font-weight-bolder col mt-3");
            identifiantBasket.setAttribute("class", "font-weight-bolder col mt-3");
            prixUnitaireBasket.setAttribute("class", "d-none");
            prixVirgule.setAttribute("class", 'font-weight-bolder col mt-3');
            quantiteBasket.setAttribute("class", "font-weight-bolder col mt-3");
            prixTotalBasket.setAttribute("class", "font-weight-bolder col text-right mt-3");

            //affiche l'article unitaire du panier
            nameBasket.innerHTML = response.name;
            prixVirgule.innerHTML = response.price / 100 + ",00 €";
            identifiantBasket.innerHTML = response._id;
            quantiteBasket.innerHTML = basketUnit.quantite;
            prixUnitaireBasket.innerHTML = response.price;

            //mise en place de la fonction calculer le prix total de chaque article dans le panier
            function itemTotalPrice(number1, number2) {
                return number1 * number2;
            };
            let totalPriceItem = itemTotalPrice(prixUnitaireBasket.innerHTML, basketUnit.quantite)
            prixTotalBasket.innerHTML = "Prix TTC = " + totalPriceItem / 100 + ",00 €";

            //calcul pour la somme totale du panier 
            //push le prix total de chaque article dans un tableau déclaré tout en haut de la page
            arrayTotalPriceItem.push(totalPriceItem)
            let totalPriceAllItems = arrayTotalPriceItem.reduce(function (total, totalPriceItem) {
                return total + totalPriceItem;
            }, 0);
            //affiche le resultat du prix total du panier
            finalPrice.innerHTML = "Montant total TTC =  " + totalPriceAllItems / 100 + " ,00 €";
            //envoi des données en local storage pour récupération sur la page confirmation
            sessionStorage.setItem("prixTotal", JSON.stringify(finalPrice.innerHTML));

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
    let firstNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]{2,30}$', 'g');
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
    let lastNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]{2,30}$', 'g');
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
    let adressRegex = new RegExp('^[0-9 A-Za-z\é\è\ê\ -]{2,30}$', 'g');
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
    let cityRegex = new RegExp('^[A-Za-z\é\è\ê\ -]{2,30}$', 'g');
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

// --------------------------------POST--------------------------

//ecouter la soumission du formulaire

formulaireBasket.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validFirstName(firstName), validLastName(lastName), validAddress(address), validCity(city)!= true) {
        event.preventDefault();
        alert("Désolé un champ du formulaire n'est pas valide");
    }

    //création du tableau products qui recevra les ID 
    let products = [];
    console.log(products);
    for (let eachId of storedBasket) {
        products.push(eachId.id);
    };

    //création d'un constructor pour l'object contact attendu sur le serveur
    class contacts {
        constructor(firstName, lastName, address, city, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.address = address;
            this.city = city;
            this.email = email;
        }
    };

    let contact = new contacts(firstName.value, lastName.value, address.value, city.value, email.value);

    //object qui contient l'object contact et le tableau products attendu sur le serveur
    let data = {
        contact,
        products
    };
    console.log(data);
    //vide le panier
    localStorage.clear();


    // Créer une requête de type "POST"
    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/cameras/order');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));

    // Lorsque la requête à bien été envoyée, récupérer le résultat renvoyé par le service web.
    //status à 201
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
            let response = JSON.parse(this.responseText);
            //stocker les informations de l'object contact en sessionStorage
            sessionStorage.setItem("orderId", JSON.stringify(response.orderId));
            sessionStorage.setItem("contact", JSON.stringify(response.contact));
            sessionStorage.setItem("products", JSON.stringify(response.products));
            window.location.href = 'confirmation.html';
        }
    };

});