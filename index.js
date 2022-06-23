

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')

    .then(response => response.json())
    .then(data => {

      let theCocktails = data["drinks"].slice(0,8)
      theCocktails.forEach(cocktail => {
        const id = cocktail.idDrink
        const name = cocktail.strDrink
        const imageUrl = cocktail.strDrinkThumb


})

 });
   
    

