$(document).ready(function() {
    let recipes = JSON.parse(localStorage.getItem("recipes"))

    function sortRecipes() {
        for (let i = 0; i < recipes.length - 1; ++i) {
            for (let ii = i + 1; ii < recipes.length; ++ii) {
                let rating1 = recipes[i].ratingNum == 0 ? 0 : recipes[i].ratingSum / recipes[i].ratingNum
                let rating2 = recipes[ii].ratingNum == 0 ? 0 : recipes[ii].ratingSum / recipes[ii].ratingNum
                
                if (rating1 < rating2) {
                    let tmp = recipes[i]
                    recipes[i] = recipes[ii]
                    recipes[ii] = tmp
                }
            }
        }
    }

    function showRecipes() {
        sortRecipes()

        let currRecipe = ""
        for (let i = 0; i < 3; ++i) {
            let rtg = recipes[i].ratingNum == 0 ? 0 : (recipes[i].ratingSum / recipes[i].ratingNum).toFixed(1)

            currRecipe += "<div id='" + recipes[i].id + "' class='col-lg-4 col-md-6 special-grid recipes " + recipes[i].group + "'>" + 
                                "<a href='#'>" +
                                    "<img src='" + recipes[i].img + "' class='img-recipe' alt='Image'>" +
                                    "<p style='color: #719a0a;'>" + recipes[i].name + " | Težina: " + recipes[i].difficulty + " | Ocena: " + rtg + "</p>" +
                                "</a>" +
                            "</div>"
        }
        $("#pics").html(currRecipe)
    }

    showRecipes()


    // Show recipe
    $(document).on("click", ".recipes", function() {
        let recipe = recipes.find(element=>element.id == $(this).attr('id'))
        localStorage.setItem("recipeSingle", JSON.stringify(recipe))
        window.location.href = "recipe.html"
    });
})