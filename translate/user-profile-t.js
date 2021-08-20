$(document).ready(function() {
    let language = sessionStorage.getItem("language")
    if (language == null) {
        language = "serbian"
        sessionStorage.setItem("language", language)
    }

    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))

    $("#breadcrumbs-name").html(language == "serbian" ? "Moj profil" : "My account")
    $("#profile-name").text(loggedUser.username)
    $("#user-profile-recipes").text(language == "serbian" ? "Moji recepti" : "My recipes")
    $("#user-profile-comments").text(language == "serbian" ? "Moji komentari" : "My comments")
    $("#user-profile-ratings").text(language == "serbian" ? "Moje ocene" : "My ratings")
})