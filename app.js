const formElement = document.querySelector("#mtg-form");
const formQueryElement = document.querySelector("#mtg-form-query");

formElement.addEventListener("submit", function(event){

    event.preventDefault();

    

fetch(`https://api.magicthegathering.io/v1/cards`)
  .then(response => response.json())
  .then(json =>
     {  
        const mtgElement = document.querySelector("#mtg-result");
        const imageElement = document.createElement("img");
        
        imageElement.src = json.cards[formQueryElement.value].imageUrl;
        
        mtgElement.appendChild(imageElement);
    
    
    });


});