        //récuperation des infos
        let orderId = JSON.parse(sessionStorage.getItem("orderId"));
        console.log(orderId)
        let contact = JSON.parse(sessionStorage.getItem("contact"));
        console.log(contact)
        let products = JSON.parse(sessionStorage.getItem("products"));
        console.log(products)
        let totalPrice = JSON.parse(sessionStorage.getItem("prixTotal"));

        //structure HTML de la page
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
        formName.setAttribute("class", "row justify-content-center font-weight-bold my-3");
        formCommand.setAttribute("class", "row justify-content-center font-weight-bold  my-3");
        formLocation.setAttribute("class", "row justify-content-center font-weight-bold  my-3");
        formContact.setAttribute("class", "row justify-content-center font-weight-bold  my-3");


        //message de remerciement 
        formName.innerHTML = "Merci " + contact.firstName + " " + contact.lastName + ".";
        formCommand.innerHTML = "Votre commande n° : " + orderId + " est bien validée. " + totalPrice;
        formLocation.innerHTML = "La livraison se fera au " + contact.address + " à " + contact.city + ".";
        formContact.innerHTML = "Un mail de confirmation vous a été envoyé à cette adresse : " + contact.email;