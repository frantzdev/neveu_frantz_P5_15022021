
           //recuperation du local storage
           const storedBasket = JSON.parse(localStorage.getItem('Basket'));
           //boucle du localStorage pour récuperer chaque article individuellement
           for (let basketUnit of storedBasket) {
               basketUnit.quantite = parseInt(basketUnit.quantite);

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
                       const titreFormulaire = document.getElementById("titreFormulaire");
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
                       mainBasket.appendChild(titreFormulaire);


                       titreBasket.setAttribute("class", "text-center text-uppercase font-weight-bold font-italic border-dark shadow-lg col mt-5");
                       contenairBasket.setAttribute("class", "row mt-5 border border-dark");
                       photoBasket.setAttribute("class", "col-md-6");
                       imageBasket.setAttribute("src", response.imageUrl);
                       imageBasket.setAttribute("class", "d-block w-100 border-dark rounded");
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

                       //recuperation formulaire du Basket
                       const formulaireBasket = document.getElementById("formulaireBasket");
                       mainBasket.appendChild(formulaireBasket);

                   };
               }
               request.open("GET", "http://localhost:3000/api/cameras/" + basketUnit.id);
               request.send();
           };


           //ecoute des modifications sur input firstName
           formulaireBasket.firstName.addEventListener("change", () => {
               validFirstName(formulaireBasket.firstName);
           });
           // -----------------------validation firstName----------------------------
           const validFirstName = function (firstName) {
               let firstNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
               let testfirstNameRegex = firstNameRegex.test(firstName.value);
               console.log(testfirstNameRegex);
               let small = formulaireBasket.firstName.nextElementSibling;
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
           formulaireBasket.lastName.addEventListener("change", () => {
               validLastName(formulaireBasket.lastName);
           });
           // -----------------------validation LastName----------------------------
           const validLastName = function (inputlastName) {
               let lastNameRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
               let testlastNameRegex = lastNameRegex.test(inputlastName.value);
               console.log(testlastNameRegex);
               let small = formulaireBasket.lastName.nextElementSibling;
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
           formulaireBasket.adress.addEventListener("change", () => {
               validadress(formulaireBasket.adress);
           });
           // -----------------------validation adress----------------------------
           const validadress = function (inputadress) {
               let adressRegex = new RegExp('^[0-9 A-Za-z\é\è\ê\ -]+$');
               let testadressRegex = adressRegex.test(inputadress.value);
               console.log(testadressRegex);
               let small = formulaireBasket.adress.nextElementSibling;
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
           formulaireBasket.city.addEventListener("change", () => {
               validcity(formulaireBasket.city);
           });
           // -----------------------validation city----------------------------
           const validcity = function (inputcity) {
               let cityRegex = new RegExp('^[A-Za-z\é\è\ê\ -]+$');
               let testcityRegex = cityRegex.test(inputcity.value);
               console.log(testcityRegex);
               let small = formulaireBasket.city.nextElementSibling;
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
           formulaireBasket.email.addEventListener("change", () => {
               validEmail(formulaireBasket.email);
           });
           // -----------------------validation email----------------------------
           const validEmail = function (email) {
               let emailRegex = new RegExp('^[a-zA-Z0-9-._]+[@]{1}[a-zA-Z0-9-._]+[.]{1}[a-z]{2,10}$', 'g');
               let testemailRegex = emailRegex.test(email.value);
               let small = formulaireBasket.email.nextElementSibling;
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

           formulaireBasket.addEventListener('submit', (event) => {
               event.preventDefault();
           });