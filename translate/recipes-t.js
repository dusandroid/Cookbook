$(document).ready(function() {
    let language = sessionStorage.getItem("language")
    if (language == null) {
        language = "serbian"
        sessionStorage.setItem("language", language)
    }

    $("#h2-recipes").text(language == "serbian" ? "Recepti" : "Recipes")
    $("#h2-recipes-header").text(language == "serbian" ? "Recepti" : "Recipes")
    $("#search-query-input").attr("placeholder", language == "serbian" ? "Pretražite recepte..." : "Search...")
    $("#sort-recipes").text(language == "serbian" ? "Sortiraj" : "Sort by")
    $("#diff").attr("label", language == "serbian" ? "Težina" : "Difficulty")
    $("#rtg").attr("label", language == "serbian" ? "Ocena" : "Rating")
    $('option[value="sort-diff-asc"]').text(language == "serbian" ? "Težina Rastuće" : "Difficulty Ascending")
    $('option[value="sort-diff-desc"]').text(language == "serbian" ? "Težina Opadajuće" : "Difficulty Descending")
    $('option[value="sort-rtg-asc"]').text(language == "serbian" ? "Ocena Rastuće" : "Rating Ascending")
    $('option[value="sort-rtg-desc"]').text(language == "serbian" ? "Ocena Opadajuće" : "Rating Descending")
    $("#all").text(language == "serbian" ? "Svi" : "All")
    $("#appetizer").text(language == "serbian" ? "Predjelo" : "Appetizer")
    $("#main-course").text(language == "serbian" ? "Glavno jelo" : "Main course")
    $("#dessert").text(language == "serbian" ? "Dezert" : "Dessert")
    $("#snack").text(language == "serbian" ? "Užina" : "Snack")
})