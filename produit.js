//recuperation de l'element ID dans l'adresse
var url_string = window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);


let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        displayProducts(response)
    }
};
request.open("GET", "http://localhost:3000/api/cameras/" + id);
request.send();

// structure de la page Produit
function displayProducts(response) {
    const article = document.getElementById("article");
    const titre = document.createElement("h1");
    const contenue = document.createElement("div");
    const photo = document.createElement("div");
    const images = document.createElement("img");
    const info = document.createElement("div");
    const identifiant = document.createElement("p");
    const description = document.createElement("div");
    const form = document.createElement("form");
    const formGroupOption = document.createElement("div");
    const label = document.createElement("label");
    const select = document.createElement('select');
    const formGroupQuantite = document.createElement("div");
    const labelQuantite = document.createElement("label");
    const quantite = document.createElement("input");
    const prix = document.createElement("div");
    const prixBrut = document.createElement("div");
    const BlockButon = document.createElement("div");
    const ajoutPanier = document.createElement("a");

    titre.setAttribute("class", "text-center text-uppercase font-weight-bold font-italic border-dark shadow-lg col mt-3")
    titre.setAttribute("id", "nomProduit");
    contenue.setAttribute("class", "row justify-content-center my-5");
    photo.setAttribute("class", "col-md-8");
    images.setAttribute("src", response.imageUrl);
    images.setAttribute("class", "d-block w-100 border-dark rounded shadow-lg");
    images.setAttribute("id", "imageProduit")
    identifiant.setAttribute("class", "text-center mt-3 mt-md-0 font-weight-bold");
    identifiant.setAttribute("id", "idProduit");
    info.setAttribute("class", "col  mt-3 ml-1");
    description.setAttribute("class", "text-left my-5");
    form.setAttribute("id", "formulaire")
    label.setAttribute("for", "option");
    select.setAttribute("class", "form-control");
    labelQuantite.setAttribute("for", "quantite");
    labelQuantite.setAttribute("class", "mt-3");
    quantite.setAttribute("class", "form-control");
    quantite.setAttribute("name", "quantite");
    quantite.setAttribute("type", "text");
    quantite.setAttribute("id", "quantiteProduit");
    prix.setAttribute("class", "font-weight-bold mt-3");
    prix.setAttribute("id", "prixProduit");
    prixBrut.setAttribute("id", "prixBrut");
    prixBrut.setAttribute("class", "d-none");
    BlockButon.setAttribute("class", "text-center");
    ajoutPanier.setAttribute("class", "btn btn-dark mt-5");
    ajoutPanier.setAttribute("href", "panier.html");
    ajoutPanier.setAttribute("id", "ajoutPanier");

    article.appendChild(titre);
    article.appendChild(contenue);
    contenue.appendChild(photo);
    photo.appendChild(images);
    contenue.appendChild(info);
    info.appendChild(identifiant);
    info.appendChild(description);
    info.appendChild(form);
    form.appendChild(formGroupOption);
    formGroupOption.appendChild(label);
    label.appendChild(select);
    formGroupOption.appendChild(select);
    form.appendChild(formGroupQuantite);
    formGroupQuantite.appendChild(labelQuantite);
    formGroupQuantite.appendChild(quantite);
    form.appendChild(prix);
    form.appendChild(prixBrut);
    form.appendChild(BlockButon)
    BlockButon.appendChild(ajoutPanier);

    titre.innerHTML = response.name;
    identifiant.innerHTML = response._id;
    description.innerHTML = response.description;
    label.innerHTML = "Choix des options";
    labelQuantite.innerHTML = "Quantité";
    prix.innerHTML = response.price / 100 + ",00 €";
    prixBrut.innerHTML = response.price;
    ajoutPanier.innerHTML = "Ajouter au panier"

    // selection des options avec le constructeur option()
    let options = response.lenses;
    options.forEach(function (element, key) {
        select[key] = new Option(element, key);
    });


    // recuperation du formulaire
    const formulaire = document.getElementById("formulaire");


    //ecoute de l'input quantite dans le formulaire
    quantite.addEventListener("change", () => {
        saisiQuantite(quantite);
    });

    // mise en place de la regex pour l'input du formulaire
    function saisiQuantite(quantite) {
        let quantiteRegex = new RegExp('[1-9]');
        // test de la regex
        let testQuantiteRegex = quantiteRegex.test(quantite.value);
        if (testQuantiteRegex) {
            quantite.classList.remove("bg-danger");
            quantite.classList.add("bg-success");
        } else {
            quantite.classList.remove("bg-success");
            quantite.classList.add("bg-danger");
        }
    };



    ajoutPanier.addEventListener("click", (event) => {
        //event.preventDefault();
        // déclarer l'object
        let object = {
            id: response._id,
            quantite: parseInt(quantite.value)
        };
        //création d'une variable contenant un tableau vide
        let tab = []
        //recuperation de la chaine dans une variable 
        let BasketStore = JSON.parse(localStorage.getItem('Basket'));
        console.log(BasketStore)
        //si le localStorage contient quelque chose 
        if (BasketStore !== null) {
            tab = BasketStore;
        }
        let itemExist = false;
        tab.forEach(item => {
            if (item.id === object.id) {
                itemExist = true;
                item.quantite += parseInt(object.quantite);
                console.log(item, object.quantite)
            }
        });
        if (!itemExist) {
            tab.push(object)
        }

        //local storage sauvegarde le tableau sous forme de chaine
        localStorage.setItem('Basket', JSON.stringify(tab))


    });

};