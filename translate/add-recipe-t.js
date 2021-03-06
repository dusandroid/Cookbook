$(document).ready(function() {
    let language = sessionStorage.getItem("language")
    if (language == null) {
        language = "serbian"
        sessionStorage.setItem("language", language)
    }
    $("#add-recipe-h2").html(language == "serbian" ?  "Dodaj recept" : "Add recipe")
    $("#add-recipe-a1").html(language == "serbian" ?  "Početna" : "Home")
    $("#add-recipe-a2").html(language == "serbian" ?  "Dodaj recept" : "Add recipe")

    $("#reg-modal").html(language == "serbian" ?  "Dodaj recept:" : "Add recipe:")
    $("#add-recipe-name").attr("placeholder", language == "serbian" ? "Naziv jela" : "Recipe name")
    $("#add-recipe-difficulty").attr("placeholder", language == "serbian" ? "Težina pripreme" : "Difficulty")
    $("#add-recipe-group-label").html(language == "serbian" ? "Grupa recepata:" : "Recipe group:")
    $('option[value="appetizer"]').text(language == "serbian" ? "Predjelo" : "Appetizer")
    $('option[value="main-course"]').text(language == "serbian" ? "Glavno jelo" : "Main Course")
    $('option[value="dessert"]').text(language == "serbian" ? "Dezert" : "Dessert")
    $('option[value="snack"]').text(language == "serbian" ? "Užina" : "Snack")
    $("#add-recipe-duration-label").html(language == "serbian" ? "Trajanje:" : "Preparation time:")
    $("#add-recipe-hours").attr("placeholder", language == "serbian" ? "Sati" : "Hours")
    $("#add-recipe-minutes").attr("placeholder", language == "serbian" ? "Minuti" : "Minutes")
    $("#add-recipe-url").attr("placeholder", language == "serbian" ? "URL ka videu" : "Video URL")
    $("#add-recipe-img-label").html(language == "serbian" ? "Izaberite sliku:" : "Choose photo:")
    $("#add-recipe-instructions-label").html(language == "serbian" ? "Uputstvo za pripremu:" : "Instructions:")
    $("#add-recipe").html(language == "serbian" ? "Potvrdi" : "Confirm")
})
