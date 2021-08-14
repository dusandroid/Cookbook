$(document).ready(function() {
    let users = [
        {
            username: 'aleks',
            email: 'aleksandra.milovic@gmail.com',
            password: 'aleks',
            recipes: [],
            comments: [],
            grades: []
        },
        {
            username: 'dusan',
            email: 'dusan.gradojevic@gmail.com',
            password: 'dusan',
            recipes: [
                {                    
                    id : 5,                    
                    name : "Pita sa spanaćem",                    
                    group : "1",                    
                    difficulty : "2",                    
                    hours : "1",                    
                    minutes : "0",                    
                    img : "img/recipes/pita-sa-spanacem.jpg",                    
                    videoURL : "https://www.youtube.com/watch?v=_K5SwE3BEQo&ab_channel=Recepti.com",                    
                    instructions: "U šerpu stavimo ulje da se zagreje. U zagrejano ulje dodajemo iseckan praziluk koji posolimo i ostavimo da se dinsta par minuta. Zatim dodajemo sitno iseckan beli luk i nastavimo sa dinstanjem.\nKada smo luk prodinsatli dodajemo opran spanać, nalijemo sa vodom i disnatamo spanać dok se spanać lepo ne ukrčka 10-15 minuta. Sklonimo sa ringle i ostavimo da se smesa prohladi.\nU činiju za mućenje pripremimo smesu za fil. Dodamo jaja, so, biber i umutimo mutilicom. Zatim dodajemo sitan sir i prohlađen spanać. Sve lepo sjedinimo.\nU fil na kraju dodajemo pavlaku za kuvanje i sve lepo promešamo da se napravi kompaktan fil.\nU posebnu činiju pripremimo smesu za premazivanje kora. Pomešamo ulje i kiselu vodu.\nPleh obložimo papirom za pečenje. Uzimamo prvu koru i stavljamo je na dno pleha, a krajeve prabacujemo preko ivica pleha. Premazujemo je smesom ulja i kisele vode. Tako ređamo polovinu kora. U zavisnosti od debljine to je 5-6 kora.\nZatim dodajemo fil od spanaća i prebacujemo jedan po jedan kraj kora koje su bile prako ivica pleha za pečenje. Svaku koru premazujemo smesom ulja i kisele vode.\nPreko dodajemo preostale kore koje isto premazujemo smesom ulja i kisele vode. Poslednjom korom lepo obavijemo pitu koju isto premažemo smesom za premazivanje kora.\nPečemo u već zagrejanoj rerni 35-45 minuta dok nam pita ne bude lepo pečena."                
                },
                {                    
                    id : 6,                    
                    name : "Špagete sa tikvicama i slaninom",                    
                    group : "2",                    
                    difficulty : "2",                    
                    hours : "0",                    
                    minutes : "45",                    
                    img : "img/recipes/spagete-sa-tikvicama-i-slaninom.jpg",                    
                    videoURL : "https://www.youtube.com/watch?v=ugV5w7gNP9Y&ab_channel=Recepti.com",                    
                    instructions: "U šerpu stavimo vodu i kašičicu soli. Kada voda prokuva dodajemo špagete. Kuvamo prema uputstvu sa pakovanja.\nDok se špageti kuvaju pripremamo sos sa tikvicama i slaninom.\nU tiganj stavimo malo putera i pustimo da se otopi. Dodajemo slaninicu iseckanu na trakice i pržimo. Kada je slaninica ispržena izvadimo je u činiju. Višak masnoće ocedimo.\nU istom tiganju stavimo sitno iseckan beli luk da se proprži par minuta. Zatim dodajemo iseckane tikvice i dostamo ih 10-15 minuta.\nTikvicama dadajemo već proprženu slaninicu i dodajemo malo bibera i origana. Sve promešamo i dodajemo pavlaku za kuvanje. Ostavimo da se sve prokrčka 5-10 minuta.\nKada je sos spreman dodajemo skuvane špagete i sve promešamo.\nServiramo sa origanom i parmezanom."                
                },
                {                    
                    id : 7,                    
                    name : "Watermelon Ice Pops",                    
                    group : "4",                    
                    difficulty : "1",                    
                    hours : "2",                    
                    minutes : "10",                    
                    img : "img/recipes/watermelon-ice-pops.jpg",                    
                    videoURL : "https://www.youtube.com/watch?v=hL2fNXE5pTM&ab_channel=Something%27sCookingWithAlpa",                    
                    instructions: "Blend watermelon, water, honey, lemon juice, and sugar together in a blender until smooth. Pour mixture into ice pop molds and freeze until solid, about 2 hours.\nRun hot water over ice pop molds for a few seconds to unmold."                
                }
            ],
            comments: [],
            grades: []
        }
    ]

    if(localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", "")
    }
    else {
        users = JSON.parse(localStorage.getItem("users"))
    }

    if (sessionStorage.getItem("loggedUser") != "" && sessionStorage.getItem("loggedUser") != null) {
        $(".register-login").hide()

        $(".navbar-nav").html("<a href='index.html' class='nav-item nav-link active'>Početna</a>"+"<a href='menu.html' class='nav-item nav-link'>Recepti</a>"+"<a href='add-recipe.html' class='nav-item nav-link'>Dodaj recept</a>"+"<a href='user-profile.html' class='nav-item nav-link'>Moj nalog</a>"+"<div class='nav-item dropdown'><a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>Jezik</a><div class='dropdown-menu'><a href='blog.html' class='dropdown-item'>Srpski</a><a href='single.html' class='dropdown-item'>Engleski</a></div></div>"+"<a href='about.html' class='nav-item nav-link'>O nama</a>"+"<button class='btn btn-outline-danger log-out-btn'>Odjavi se</button>")
    } 
    else {
        $(".register-login").show()
        $(".navbar-nav").html("<a href='index.html' class='nav-item nav-link active'>Početna</a>"+"<a href='menu.html' class='nav-item nav-link'>Recepti</a>"+"<div class='nav-item dropdown'><a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>Jezik</a><div class='dropdown-menu'><a href='blog.html' class='dropdown-item'>Srpski</a><a href='single.html' class='dropdown-item'>Engleski</a></div></div>"+"<a href='about.html' class='nav-item nav-link'>O nama</a>")
    }


    $("#login-submit").click(function() {
        let username = $("#login-username").val()
        let password = $("#login-pass").val()

        let currUser = users.find(user=>user.username == username)

        if (currUser == null || currUser.password != password) {
            $("#log-error").text("Podaci nisu ispravno uneti")
            return false
        }
        sessionStorage.setItem("loggedUser", JSON.stringify(currUser))

        $("#register-login").hide()
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

        $("#register-login").hide()
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

$("#add-recipe").click(function(){
    let name = $("#add-recipe-name").val()
    let group = $("#add-recipe-group").val()
    let difficulty = $("#add-recipe-difficulty").val()
    let hours = $("#add-recipe-hours").val()
    let minutes = $("#add-recipe-minutes").val()
    let img = $("#choose-file").val()
    let videoUrl = $("#add-recipe-url").val()
    let instructions = $("#add-recipe-instructions").val()

    let currUser = sessionStorage.getItem("loggedUser")
})