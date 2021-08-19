$(document).ready(function() {
    let recipes = JSON.parse(localStorage.getItem("recipes"))
    let users = JSON.parse(localStorage.getItem("users"))
    let language = sessionStorage.getItem("language")


    $("#log-btn").html(language == "serbian" ?  "Prijavi se" : "Login")
    $("#reg-btn").html(language == "serbian" ?  "Registruj se" : "Register")

    $("#header1").html(language == "serbian" ?  "Istražite <span>nove</span> recepte" :
                                                "Search for <span>new</span> recipes" )
    $("#text1").html(language == "serbian" ?    "Pretražite jela po kategorijama i odmah započnite sa pripremom ovih ukusnih recepata!" :
                                                "Search meals by category and start preparing these delicous recipes right now!")
    $("#header2").html(language == "serbian" ?  "Podelite <span>svoje</span> recepte sa <span>celim</span> svetom" : 
                                                "Share <span>your</span> recipes with the <span>whole</span> world")
    $("#text2").html(language == "serbian" ?    "Registrujte se i okačite svoje recepte već danas!" : "Register and share your recipes today!")
    $("#header3").html(language == "serbian" ?  "Recepti za <span>svaku</span> priliku" : "Recipes for <span>every</span> occasion")
    $("#text3").html(language == "serbian" ?    "Kada vas napusti kreativnost u kuhinji, na Receptijani možete pronaći inspiraciju!" : 
                                                "When creativity in the kitchen leaves, you can find inspiration on Receptijana!")

    $("#blog-text").html(language == "serbian" ?  "Najnovije sa našeg bloga" : "Newest from our blog")

    $("#recommended-courses").html(language == "serbian" ?  "Preporučeni kursevi" : "Recommended courses")
    $("#recommended-courses-header1").html(language == "serbian" ?  "Kurs azijske kuhinje" : "Asian kitchen course")
    $("#recommended-courses-text1").html(language == "serbian" ?    "Istražite razne tehnike spremanja Orijentalne hrane kroz interaktivan online kurs." : 
                                                                    "Find out about different techinques of preparing Oriental food throuth interactive online course.")
    $("#recommended-courses-header2").html(language == "serbian" ?  "Il Primo kursevi" : "Il Primo courses")
    $("#recommended-courses-text2").html(language == "serbian" ?    "U opuštenoj atmosferi i prijatnom ambijentu škole bavićete se tajnama mediteranske regije kao i najboljom hranom Balkana i Srbije." : 
                                                                    "In a relaxed atmosphere and comfortable ambient of the school you will learn about secrets of mediteranean region as well as the best food on Balkan and Serbia.")
    $("#recommended-courses-header3").html(language == "serbian" ?  "Kuvaj sa Gordonom" : "Cook with Gordon")
    $("#recommended-courses-text3").html(language == "serbian" ?    "Unapredite Vaše kulinarske veštine na sledeći nivo sa šef Remzijevim najpopularnijim kursem." : 
                                                                    "Get your cooking skills to the next level with Chef Ramsay's most popular course.")
    $("#recommended-courses-btn").html(language == "serbian" ?  "Pogledaj kurseve" : "Look for courses")

    $("#top-recipes").html(language == "serbian" ?  "Najbolji recepti" : "Top recipes")

    $("#contact-us").html(language == "serbian" ?  "Kontaktiraj nas" : "Contact us")
    $("#contact-info").html(language == "serbian" ?  "Kontakt informacije" : "Contact info")
    $("#contact-address").html(language == "serbian" ?  "Adresa" : "Address")
    $("#contact-address-val").html(language == "serbian" ?  "Bulevar Kralja Aleksandra 73, Beograd, Srbija" : "Bulevar Kralja Aleksandra 73, Belgrade, Serbia")
    $("#contact-phone").html(language == "serbian" ?  "Kontakt telefon" : "Contact number")
    $("#contact-follow").html(language == "serbian" ?  "Zaprati nas" : "Follow us")
    
    
    $("#log-modal").html(language == "serbian" ?  "Prijava" : "Login")
    $("#login-username").attr("placeholder", language == "serbian" ?  "Korisničko ime" : "Username")
    $("#login-pass").attr("placeholder", language == "serbian" ?  "Lozinka" : "Password")
    $("#reg-modal").html(language == "serbian" ?  "Registracija" : "Registration")
    $("#register-username").attr("placeholder", language == "serbian" ?  "Korisničko ime" : "Username")
    $("#register-pass").attr("placeholder", language == "serbian" ?  "Lozinka" : "Password")
    $("#register-conf-pass").attr("placeholder", language == "serbian" ?  "Potvrdite lozinku" : "Confirm password")
    $(".confirm-btn").html(language == "serbian" ?  "Potvrdi" : "Confirm")

    

    

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