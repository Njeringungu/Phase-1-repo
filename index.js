

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')

    .then(response => response.json())
    .then(data => {

      let theCocktails = data["drinks"].slice(0,8)
      theCocktails.forEach(cocktail => {
        const id = cocktail.idDrink
        const name = cocktail.strDrink
        const imageUrl = cocktail.strDrinkThumb

        let div = document.createElement("div")
        div.className = "cards"
        let image = document.createElement("img")
        image.src = imageUrl
        image.className = "images"
        let h3 = document.createElement("h3")
        h3.textContent= name

        let button = document.createElement("button")
        button.textContent = "Add Cart"


        button.addEventListener('click',()=>{
        alert('buttton clicked')
        });
        button.id = id
        
        div.appendChild(image)
        div.appendChild(h3)
        div.appendChild(button)
       
        document.querySelector(".cocktail-details").appendChild(div)
       
        })
      cart = document.querySelector(".cart-item")
      cart.addEventListener('click',()=>{
          alert('cart clicked')
          
      })

    });
   
   

