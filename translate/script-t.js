$(document).ready(function() {
    let language = sessionStorage.getItem("language")
    if (language == null) {
        language = "serbian"
        sessionStorage.setItem("language", language)
    }

    $("#footer-text").html(language == "serbian" ?  "Copyright &copy; 2021, Aleksandra Milović, Dušan Gradojević, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu." :
                                                    "Copyright &copy; 2021, Aleksandra Milovic, Dusan Gradojevic, Software Engineering Department, School of Electrical Engineering, University of Belgrade.")

    $("#breadcrumbs-home").html(language == "serbian" ? "Početna" : "Home")
    $("#breadcrumbs-recipes").html(language == "serbian" ? "Recepti" : "Recipes")
    
})