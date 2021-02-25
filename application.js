get("http://localhost:3000/api/cameras").then(response => {
    displayItems(response) 
});

function displayItems(response) {
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
}




// essai animation sur titre
const monTitre = document.getElementById("monTitre");

monTitre.addEventListener("click", (event) => {
    monTitre.animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }
      ], {
        // timing options
        duration: 1000,
        iterations: 2,
      });
      
      if(event.altKey) {
        changeCouleur("green", monTitre);
      } else 
      changeCouleur('red', monTitre);    
});

function changeCouleur(couleur, element) {
    element.style.color = couleur;
};

function changeTaille(taille, element) {
    element.style.fontSize = taille;
};

