$(document).ready(function() {
    let recipes = JSON.parse(localStorage.getItem("recipes"))
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))

    let language = sessionStorage.getItem("language")
    if (language == null) {
        language = "serbian"
        sessionStorage.setItem("language", language)
    }

    function showRecipes() {
        let currRecipe = ""

        for (let i = 0; i < recipes.length; ++i) {
            if (recipes[i].author == JSON.parse(sessionStorage.getItem("loggedUser")).username) {
                currRecipe +=   "<div id='" + recipes[i].id + "' class='col-lg-4 col-md-6 special-grid recipes'>" + 
                                    "<a href='recipe.html'>" +
                                        "<img src='" + recipes[i].img1 + "' class='img-recipe' alt='Image'>" +
                                        "<p style='color: #719a0a;'>" + recipes[i].name + "</p>" +
                                    "</a>" +
                                "</div>"
            }            
        }
        
        if(currRecipe == "") {
            currRecipe =    "<div class='row' id='empty-div'>" + 
                                "<p>" + (language == "serbian" ? "Niste postavili nijedan recept" : "You have no recipes") + "</p>" +
                            "</div>"
        }

        $("#user-profile-pics").html(currRecipe) 
    }


    function showComments() {
        let allComments = "<ul class='user-comment-list'>"

        for (let i = 0; i < loggedUser.comments.length; ++i) {
            let recipeName = ""
            let recipeId =  loggedUser.comments[i].recipeId
            for(let j = 0; j < recipes.length; ++j){
                if(recipes[j].id == loggedUser.comments[i].recipeId){
                    recipeName = recipes[j].name
                    break;
                }
            }

            allComments +=  "<li class='user-comment-item'>" +
                                "<div class='user-comment-body'>" +
                                    "<div class='user-comment-img'>" +
                                        "<img src='img/user.jpg' />" +
                                    "</div>" +
                                    "<div class='user-comment-text'>" +
                                        "<h3>" + recipeName + "</h3>" +
                                        "<p><span>" + loggedUser.comments[i].date + "</span></p>" +
                                        "<p>" + loggedUser.comments[i].body + "</p>" +
                                    "</div>" + 
                                "</div>" +
                            "</li>"
        }
        
        if(allComments == "<ul class='user-comment-list'>") {
            allComments =   "<div class='row' id='empty-div'>" + 
                                "<p>" + (language == "serbian" ? "Niste napisali nijedan komentar" : "You have no comments") + "</p>" +
                            "</div>"
        }
        else {
            allComments += "</ul>"
        }

        $("#user-profile-pics").html(allComments) 
    }


    function showRatings() {
        let allRatings = "<ul class='user-comment-list'>"

        for (let i = 0; i < loggedUser.ratings.length; ++i) {
            let recipeName
            let recipeIdRatings =  loggedUser.ratings[i].recipe
            for(let j = 0; j < recipes.length; ++j){
                if(recipes[j].id == loggedUser.ratings[i].recipe){
                    recipeName = recipes[j].name
                    break;
                }
            }

            allRatings +=   "<li class='user-comment-item'>" +
                                "<div class='user-comment-body'>" +
                                    "<div class='user-comment-img'>" +
                                        "<img src='img/user.jpg' />" +
                                    "</div>" +
                                    "<div class='user-comment-text'>" +
                                        "<div id='" + recipes[i].id + "' class='recipes'>" + 
                                            "<h3>" + recipeName + "</h3>" +
                                            "<p>" + loggedUser.ratings[i].val + "</p>" +
                                        "</div>" + 
                                    "</div>" + 
                                "</div>" +
                            "</li>"
        }
        
        if(allRatings == "<ul class='user-comment-list'>") {
            allRatings =    "<div class='row' id='empty-div'>" + 
                                "<p>" + (language == "serbian" ? "Niste ocenili nijedan recept" : "You haven't rated any recipe") + "</p>" +
                            "</div>"
        }
        else {
            allRatings += "</ul>"
        }

        $("#user-profile-pics").html(allRatings) 
    }

    showRatings()
    showComments()
    showRecipes()
    
    $(".recipes").click(function() {
        let id = $(this).attr('id')
        let recipe = recipes.find(element=>element.id == id)
        localStorage.setItem("recipeSingle", JSON.stringify(recipe))
        window.location.href="recipe.html"
    })

    $("#user-profile-recipes").click(function() {
        showRecipes(recipes)
    })

    $("#user-profile-comments").click(function() {
        showComments(recipes)
    })

    $("#user-profile-ratings").click(function() {
        showRatings(recipes)
    })
})