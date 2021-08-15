$(document).ready(function() {
    let recipes = JSON.parse(localStorage.getItem("recipes"))

    function showRecipes(recipes) {
        for (let i = 0; i < recipes.length; ++i) {
            let pic = recipes[i].img
            let group
            if (recipes[i].type == 1) {
                group = "appetizer"
            }
            else if (recipes[i].type == 2) {
                group = "main-course" 
            }
            else if (recipes[i].type == 3) {
                group = "dessert" 
            }
            else if (recipes[i].type == 4) {
                group = "snack"
            }
            let currRecipe = $("<div id='" + recipes[i].id + "' class='col-lg-4 col-md-6 special-grid recipes " + group + "'>" + 
                                    "<a href='#'>" +
                                        "<img src='" + pic + "' class='img-recipe' alt='Image'>" +
                                        "<p style='color: #719a0a;'>" + recipes[i].name + "</p>" +
                                    "</a>" +
                                "</div>")
            
            $("#pics").append(currRecipe)
        }
    }

    showRecipes(recipes)

    $(document).on("click", ".recipes", function() {
        let id = $(this).attr('id')
        let recipe = recipes.find(element=>element.id == id)
        localStorage.setItem("recipeSingle", JSON.stringify(recipe))
        // localStorage.setItem("history", 1)
        window.location.href="recipe.html"
    });
})