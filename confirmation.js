        //récuperation des infos
        let orderId = JSON.parse(sessionStorage.getItem("orderId"));
        console.log(orderId)
        let contact = JSON.parse(sessionStorage.getItem("contact"));
        console.log(contact)
        let products = JSON.parse(sessionStorage.getItem("products"));
        console.log(products)
        let totalPrice = JSON.parse(localStorage.getItem("prixTotal"));

        for (let product of products) {
            console.log(product)

            // mise en place de la structure HTML
            const displayConfirm = document.getElementById("displayConfirm");
            const productsConfirm = document.createElement("div");
            const photoConfirm = document.createElement("div");
            const imageConfirm = document.createElement("img");
            const infoConfirm = document.createElement("div");
            const nameConfirm = document.createElement("div");
            const identifiantConfirm = document.createElement("div");
            const prixUnitaireConfirm = document.createElement("div");
            const prixVirgule = document.createElement("div");
            const quantiteConfirm = document.createElement("div");
            const prixTotalConfirm = document.createElement("div");

            displayConfirm.appendChild(productsConfirm);
            productsConfirm.appendChild(photoConfirm);
            photoConfirm.appendChild(imageConfirm);
            productsConfirm.appendChild(infoConfirm);
            infoConfirm.appendChild(nameConfirm);
            infoConfirm.appendChild(identifiantConfirm);
            infoConfirm.appendChild(prixUnitaireConfirm);
            infoConfirm.appendChild(prixVirgule);
            infoConfirm.appendChild(quantiteConfirm);
            infoConfirm.appendChild(prixTotalConfirm);

            displayConfirm.setAttribute("class", "container")
            productsConfirm.setAttribute("class", "row mt-5  justify-content-center");
            photoConfirm.setAttribute("class", "col-6 col-md-4");
            imageConfirm.setAttribute("src", product.imageUrl);
            imageConfirm.setAttribute("class", "d-block w-100 rounded shadow-lg");
            infoConfirm.setAttribute("class", "col-md-8 col bg-light rounded shadow-lg");
            nameConfirm.setAttribute("class", "font-weight-bolder col mt-3");
            identifiantConfirm.setAttribute("class", "font-weight-bolder col mt-3");
            prixUnitaireConfirm.setAttribute("class", "d-none");
            prixVirgule.setAttribute("class", 'font-weight-bolder col mt-3');
            quantiteConfirm.setAttribute("class", "font-weight-bolder col mt-3");
            prixTotalConfirm.setAttribute("class", "font-weight-bolder col text-right mt-3");


            //affiche l'article unitaire du panier  
            nameConfirm.innerHTML = product.name;
            prixVirgule.innerHTML = product.price / 100 + ",00 €";
        };

        const formConfirm = document.getElementById("formConfirm");
        const formName = document.createElement("div");
        const formCommand = document.createElement("div");
        const formLocation = document.createElement("div");
        const formContact = document.createElement("div");
        formConfirm.appendChild(formName);
        formConfirm.appendChild(formCommand);
        formConfirm.appendChild(formLocation);
        formConfirm.appendChild(formContact);
        formConfirm.setAttribute("class", "container mt-5 bg-light");
        formName.setAttribute("class", "row justify-content-center font-weight-bold  my-3");
        formCommand.setAttribute("class", "row justify-content-center font-weight-bold  my-3");
        formLocation.setAttribute("class", "row justify-content-center font-weight-bold  my-3");
        formContact.setAttribute("class", "row justify-content-center font-weight-bold  my-3");

        formName.innerHTML = "Merci " + contact.firstName + " " + contact.lastName + ".";
        formCommand.innerHTML = "Votre commande n° : " + orderId + " est bien validée. " + totalPrice;
        formLocation.innerHTML = "La livraison se fera au " + contact.address + " à " + contact.city + ".";
        formContact.innerHTML = "Un mail de confirmation vous a été envoyé à cette adresse : " + contact.email + ".";