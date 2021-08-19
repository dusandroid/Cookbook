$(document).ready(function() {
    let recipes = JSON.parse(localStorage.getItem("recipes"))
    let sortPrev = null

    let language = JSON.parse(sessionStorage.getItem("language"))
    if(language == null){
        language = "english"
        sessionStorage.setItem("language", JSON.stringify(language))
    }

    $('a[id="serbian"]').click(function(){
        language = "serbian"
        sessionStorage.setItem("language", JSON.stringify(language))
        window.location.href = "#"
    })
    
    $('a[id="english"]').click(function(){
        language = "english"
        sessionStorage.setItem("language", JSON.stringify(language))
        window.location.href = "#"
    })


    $("#h2-recipes").text(language == "serbian" ? "Recepti" : "Recipes")
    $("#a-start-page").text(language == "serbian" ? "Početna" : "Home page")
    $("#a-recipes").text(language == "serbian" ? "Recepti" : "Recipes")
    $("#h2-recipes-header").text(language == "serbian" ? "Recepti" : "Recipes")
    $("#search-query-input").attr("placeholder", language == "serbian" ? "Pretražite recepte..." : "Search...")
    $("#sort-recipes").text(language == "serbian" ? "Sortiraj" : "Sort by")
    $("#diff").attr("label", language == "serbian" ? "Tezina" : "Difficulty")
    $("#rtg").attr("label", language == "serbian" ? "Ocena" : "Rating")
    $('option[value="sort-diff-asc"]').text(language == "serbian" ? "Tezina Rastuće" : "Difficulty Ascending")
    $('option[value="sort-diff-desc"]').text(language == "serbian" ? "Tezina Opadajuće" : "Difficulty Ascending")
    $('option[value="sort-rtg-asc"]').text(language == "serbian" ? "Ocena Rastuće" : "Rating Ascending")
    $('option[value="sort-rtg-desc"]').text(language == "serbian" ? "Ocena Opadajuće" : "Rating Ascending")
    $("#all").text(language == "serbian" ? "Svi" : "All")
    $("#appetizer").text(language == "serbian" ? "Predjelo" : "Appetizer")
    $("#main-course").text(language == "serbian" ? "Glavno jelo" : "Main course")
    $("#dessert").text(language == "serbian" ? "Dezert" : "Dessert")
    $("#snack").text(language == "serbian" ? "Užina" : "Snack")



    function sortRecipes() {
        let sort = $("select").val()
        if (sort != null && (sort == sortPrev) == false) {
            for (let i = 0; i < recipes.length - 1; ++i) {
                for (let ii = i + 1; ii < recipes.length; ++ii) {
                    let rating1 = recipes[i].ratingNum == 0 ? 0 : recipes[i].ratingSum / recipes[i].ratingNum
                    let rating2 = recipes[ii].ratingNum == 0 ? 0 : recipes[ii].ratingSum / recipes[ii].ratingNum
                    
                    let condition
                    switch (sort) {
                        case "sort-diff-asc":   condition = recipes[i].difficulty > recipes[ii].difficulty
                            break
                        case "sort-diff-desc":  condition = recipes[i].difficulty < recipes[ii].difficulty
                            break 
                        case "sort-rtg-asc":    condition = rating1 > rating2
                            break
                        case "sort-rtg-desc":    condition = rating1 < rating2
                            break
                    }

                    if (condition == true) {
                        let tmp = recipes[i]
                        recipes[i] = recipes[ii]
                        recipes[ii] = tmp
                    }
                }
            }
            sortPrev = sort
        }
    }

    function showRecipes(group) {
        sortRecipes()

        let regex = $("#search-query-input").val() == "" ? null : new RegExp("[...]*" + $("#search-query-input").val() + "[...]*", "i")

        let currRecipe = ""
        for (let i = 0; i < recipes.length; ++i) {
            if ((recipes[i].group == group || group == "all") && (regex == null || regex.test(recipes[i].name))) {
                let rtg = recipes[i].ratingNum == 0 ? 0 : (recipes[i].ratingSum / recipes[i].ratingNum).toFixed(1)

                currRecipe += "<div id='" + recipes[i].id + "' class='col-lg-4 col-md-6 special-grid recipes " + recipes[i].group + "'>" + 
                                    "<a href='#'>" +
                                        "<img src='" + recipes[i].img1 + "' class='img-recipe' alt='Image'>" +
                                        "<p style='color: #719a0a;'>" + recipes[i].name + " | " + ((language=="serbian")?"Težina: ":"Difficulty: ") + recipes[i].difficulty + " | " + ((language=="serbian")?"Ocena: ":"Rating: ") + rtg + "</p>" +
                                    "</a>" +
                                "</div>"
            }
        }
        $("#pics").html(currRecipe)
    }

    showRecipes("all")


    // Search
    $("#search-query-submit").click(function() {
        showRecipes($(".menu-tab ul li a.active").attr("id"))
    })



    // Show recipe
    $(document).on("click", ".recipes", function() {
        let recipe = recipes.find(element=>element.id == $(this).attr('id'))
        localStorage.setItem("recipeSingle", JSON.stringify(recipe))
        window.location.href = "recipe.html"
    });


    // Show certain food group
    $(".nav-link").click(function() {
        showRecipes($(this).attr("id"))
    })


    //Sort type change
    $("select").change(function() {
        showRecipes($(".menu-tab ul li a.active").attr("id"))
    })
})