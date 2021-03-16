//récupération de la promise
get("http://localhost:3000/api/cameras").then(response => {
    displayItems(response) 
});

//structure de la page HTML
function displayItems(response) {
    //boucle pour dupliquer la structure du code selon le nombre d'article présent dans l'api
    response.forEach(camera => {

        const article = document.getElementById("article");
        const col = document.createElement("div");
        const card = document.createElement("div");
        const imgCardTop = document.createElement("div");
        const image = document.createElement("img");
        const cardBody = document.createElement("div");
        const cardTitle = document.createElement('h4');
        const cardText = document.createElement("p");
        const lien = document.createElement('a');

        article.appendChild(col);
        col.appendChild(card);
        card.appendChild(imgCardTop);
        imgCardTop.appendChild(image);
        card.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(lien);
        
        col.setAttribute("class", "col-lg-6");
        card.setAttribute("class", "card border-dark shadow-lg my-3");
        imgCardTop.setAttribute("class", "img-card-top");
        image.setAttribute("width", "348");
        image.setAttribute("class", "d-block w-100");
        cardBody.setAttribute("class", "card-body");
        cardTitle.setAttribute("class", "card-title");
        cardText.setAttribute("class", "card-text");
        image.setAttribute("src", camera.imageUrl)
        lien.setAttribute('href', "produit.html?id=" + camera._id);
        lien.setAttribute("class", "btn btn-dark stretched-link");
        cardText.innerHTML = camera.description;
        cardTitle.innerHTML = camera.name;
        lien.innerHTML = camera.price / 100 + ",00 €";
    });
};

