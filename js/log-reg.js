$(document).ready(function() {
    let users = JSON.parse(localStorage.getItem("users"))

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