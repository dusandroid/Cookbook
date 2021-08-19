$(document).ready(function() {
    let recipes = JSON.parse(localStorage.getItem("recipes"))
    let users = JSON.parse(localStorage.getItem("users"))
    let language = sessionStorage.getItem("language")

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
                                    "<img src='" + recipes[i].img1 + "' class='img-recipe' alt='Image'>" +
                                    "<p style='color: #719a0a;'>" + recipes[i].name + " | " + ((language=="serbian")?"Težina: ":"Difficulty: ") + recipes[i].difficulty + " | " + ((language=="serbian")?"Ocena: ":"Rating: ") + rtg + "</p>" +
                                "</a>" +
                            "</div>"
        }
        $("#pics").html(currRecipe)
    }

    showRecipes()


    // Show recipe
    $(".recipes").click(function() {
        let recipe = recipes.find(element=>element.id == $(this).attr('id'))
        localStorage.setItem("recipeSingle", JSON.stringify(recipe))
        window.location.href = "recipe.html"
    })



    $("#login-submit").click(function() {
        let username = $("#login-username").val()
        let password = $("#login-pass").val()

        let currUser = users.find(user=>user.username == username)

        if (currUser == null || currUser.password != password) {
            $("#log-error").text("Podaci nisu ispravno uneti")
            return false
        }
        sessionStorage.setItem("loggedUser", JSON.stringify(currUser))

        $(".register-login").hide()
        window.location.href = "index.html"
    })



    $("#register-submit").click(function() {
        let username = $("#register-username").val()
        let email = $("#register-email").val()
        let password = $("#register-pass").val()
        let confPassword = $("#register-conf-pass").val()

        let ret = false

        if (username.length < 5) {
            $("#reg-username-error").text("Korisničko ime mora imati bar 5 karaktera")
            ret = true
        }
        var regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(email) == false) {
            $("#reg-email-error").text("Email nije u ispravnom formatu")
            ret = true
        }
        if (password.length < 8) {
            $("#reg-pass-error").text("Lozinka mora imati bar 8 karaktera")
            ret = true
        }
        if (users.find(user=>user.username == username) != null) {
            $("#reg-username-error").text("Korisničko ime već postoji")
            ret = true
        }
        if (users.find(user=>user.email == email) != null) {
            $("#reg-email-error").text("Email već postoji")
            ret = true
        }
        if (password != confPassword) {
            $("#reg-conf-pass-error").text("Lozinke se ne poklapaju")
            ret = true
        }
        if (username == "") {
            $("#reg-username-error").text("Niste uneli korisničko ime")
            ret = true
        }
        if (email == "") {
            $("#reg-email-error").text("Niste uneli email")
            ret = true
        }
        if (password == "") {
            $("#reg-pass-error").text("Niste uneli lozinku")
            ret = true
        }
        if (confPassword == "") {
            $("#reg-conf-pass-error").text("Niste potvrdili lozinku")
            ret = true
        }

        if (ret == true) return false

        let user = {
            username : username,
            email : email,
            password : password,
            recipes: [],
            comments: [],
            grades: []
        }

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", JSON.stringify(user))

        $(".register-login").hide()
        window.location.href = "index.html"
    })

    $(".reg-log-btn").click(function() {
        $("#log-error").text("")
        $("#reg-username-error").text("")
        $("#reg-email-error").text("")
        $("#reg-pass-error").text("")
        $("#reg-conf-pass-error").text("")
    })
})