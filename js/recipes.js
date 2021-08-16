$(document).ready(function() {
    let recipes = JSON.parse(localStorage.getItem("recipes"))

    function showRecipes(recipes, type) {
        let currRecipe = ""

        for (let i = 0; i < recipes.length; ++i) {
            if (recipes[i].group == type || type == "0") {
                let group
                if (recipes[i].type == 1) group = "appetizer"
                else if (recipes[i].type == 2) group = "main-course"
                else if (recipes[i].type == 3) group = "dessert"
                else if (recipes[i].type == 4) group = "snack"
                currRecipe += "<div id='" + recipes[i].id + "' class='col-lg-4 col-md-6 special-grid recipes " + group + "'>" + 
                                    "<a href='#'>" +
                                        "<img src='" + recipes[i].img + "' class='img-recipe' alt='Image'>" +
                                        "<p style='color: #719a0a;'>" + recipes[i].name + "</p>" +
                                    "</a>" +
                                "</div>"
            }            
        }
        
        $("#pics").html(currRecipe) 
    }

    showRecipes(recipes, "0")

    $(document).on("click", ".recipes", function() {
        let id = $(this).attr('id')
        let recipe = recipes.find(element=>element.id == id)
        localStorage.setItem("recipeSingle", JSON.stringify(recipe))
        window.location.href="recipe.html"
    });

    $(".nav-link").click(function() {
        let group = $(this).attr('id')

        let type = "0"
        if (group == "appetizer") type = "1"
        else if (group == "main-course") type = "2"
        else if (group == "dessert") type = "3"
        else if (group == "snack") type = "4"
        
        showRecipes(recipes, type)
    }) 



    // function showRecipes(recipes, type) {
    //     for (let i = 0; i < recipes.length; ++i) {
    //         let group
    //         if (recipes[i].type == 1) {
    //             group = "appetizer"
    //         }
    //         else if (recipes[i].type == 2) {
    //             group = "main-course" 
    //         }
    //         else if (recipes[i].type == 3) {
    //             group = "dessert" 
    //         }
    //         else if (recipes[i].type == 4) {
    //             group = "snack"
    //         }
    //         let currRecipe = $("<div id='" + recipes[i].id + "' class='col-lg-4 col-md-6 special-grid recipes " + group + "'>" + 
    //                                 "<a href='#'>" +
    //                                     "<img src='" + recipes[i].img + "' class='img-recipe' alt='Image'>" +
    //                                     "<p style='color: #719a0a;'>" + recipes[i].name + "</p>" +
    //                                 "</a>" +
    //                             "</div>")
            
    //         $("#pics").append(currRecipe)
    //     }
    // }
})