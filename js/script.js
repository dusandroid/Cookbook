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
            recipes: [],
            comments: [],
            grades: []
        }
    ]

    if(localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("loggedUser", "")
    }
    else {
        users = JSON.parse(localStorage.getItem("users"))
    }

    if (localStorage.getItem("loggedUser") != "" && localStorage.getItem("loggedUser") != null) {
        let username = JSON.parse(localStorage.getItem("loggedUser")).username
        $(".navbar-nav>li:nth-child(2)").after("<a href='user-profile.html' class='nav-item nav-link'>Moj nalog</a>")     
        $(".navbar-nav>li:nth-child(2)").after("<a href='add-recipe.html' class='nav-item nav-link'>Dodaj recept</a>")
        $(".navbar-nav>li:nth-child(6)").after("<button class='btn btn-outline-danger log-out-btn'>Odjavi se</button>")
        $(".register-login").hide()
        //$(".welcome").html(name+",<div id='welcome'></div>");
    } 

    let registerForm = $("#register-form")
    if (registerForm.length) {
        registerForm.validate({
            rules: {
                'register-username' : {
                    required : true
                },
                'register-email' : {

                },
                'register-pass' : {
                    required : true
                },
                'register-conf-pass' : {
                    required : true
                }
            },
            messages: {
                'register-username' : {
                    required : 'Korisničko ime mora biti popunjeno'
                },
                'register-email' : {
                    required : 'Email adresa mora biti popunjena'
                },
                'register-pass' : {
                    required : 'Lozinka mora biti popunjena'
                },
                'register-conf-pass' : {
                    required : 'Lozinka mora biti potvrđena'
                },
            }
        })
    }


    $("#login-submit").click(function() {
        
    })



    $("#register-submit").click(function() {
        $("#reg-username-error").text("")
        $("#reg-email-error").text("")
        $("#reg-conf-pass-error").text("")

        let username = $("#register-username").val()
        let email = $("#register-email").val()
        let password = $("#register-pass").val()
        let confPassword = $("#register-conf-pass").val()

        let users = JSON.parse(localStorage.getItem("users"))

        if (users.find(user=>user.username == username) != null) {
            $("#register-username").text("Korisničko ime već postoji")
            return
        }
        if (users.find(user=>user.email == email) != null) {
            $("#register-email").text("Email već postoji")
            return
        }
        if (password != confPassword) {
            $("#reg-conf-pass-error").text("Lozinke se ne poklapaju")
            return
        }

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
        localStorage.setItem("loggedUser", JSON.stringify(user))

        $("#register-login").hide()
        window.location.href="index.html";
    })

})