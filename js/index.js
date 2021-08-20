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
        
        $("#log-error").text("")

        let currUser = users.find(user=>user.username == username)

        if (currUser == null || currUser.password != password) {
            $("#log-error").text(language == "serbian" ?  "Podaci nisu ispravno uneti" : "Data not entered correctly")
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

        $("#reg-username-error").text("")
        $("#reg-email-error").text("")
        $("#reg-pass-error").text("")
        $("#reg-conf-pass-error").text("")

        let ret = false

        if (username.length < 5) {
            $("#reg-username-error").text(language == "serbian" ? "Korisničko ime mora imati bar 5 karaktera" : "Username must be at least 5 characters long")
            ret = true
        }
        var regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(email) == false) {
            $("#reg-email-error").text(language == "serbian" ? "Email nije u ispravnom formatu" : "Email is not in the correct format")
            ret = true
        }
        if (password.length < 8) {
            $("#reg-pass-error").text(language == "serbian" ? "Lozinka mora imati bar 8 karaktera" : "The password must be at least 8 characters long")
            ret = true
        }
        if (users.find(user=>user.username == username) != null) {
            $("#reg-username-error").text(language == "serbian" ? "Korisničko ime već postoji" : "Username already exists")
            ret = true
        }
        if (users.find(user=>user.email == email) != null) {
            $("#reg-email-error").text(language == "serbian" ? "Email već postoji" : "Email already exists")
            ret = true
        }
        if (password != confPassword) {
            $("#reg-conf-pass-error").text(language == "serbian" ? "Lozinke se ne poklapaju" : "Passwords do not match")
            ret = true
        }
        if (username == "") {
            $("#reg-username-error").text(language == "serbian" ?  "Niste uneli korisničko ime" : "You have not entered a username")
            ret = true
        }
        if (email == "") {
            $("#reg-email-error").text(language == "serbian" ?  "Niste uneli email" : "You have not entered an email")
            ret = true
        }
        if (password == "") {
            $("#reg-pass-error").text(language == "serbian" ?  "Niste uneli lozinku" : "You have not entered a password")
            ret = true
        }
        if (confPassword == "") {
            $("#reg-conf-pass-error").text(language == "serbian" ? "Niste potvrdili lozinku" : "You have not confirmed the password")
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

})