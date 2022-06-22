
const Url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
document.addEventListener("DOMContentLoaded", function(){
    fetch(Url)
    .then(resp => resp.json)
    .then(data => data)
})
    