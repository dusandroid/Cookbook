$(document).ready(function() {
    let recipe = JSON.parse(localStorage.getItem("recipeSingle"))

    if(recipe == null) {
        window.location.href = "menu.html"
    }

    let language = sessionStorage.getItem("language")
    if (language == null) {
        language = "serbian"
        sessionStorage.setItem("language", language)
    }

    $(".recipe-name").text(recipe.name)
    $("#recipe-instructions").text(recipe.instructions)

    
    $("#leave-comment").text(language == "serbian" ? "Ostavite komentar:" : "Leave a comment:")
    $("#comment-submit").text(language == "serbian" ? "Postavi" : "Submit")
    $("#pdf").text(language == "serbian" ? "Skini kao PDF" : "Save as PDF")


    $(".recipe-author").text((language == "serbian" ? "Autor: " : "Author: ") + recipe.author)
    $("#recipe-video").attr("src", recipe.videoURL);
    $("#recipe-img1").attr("src", recipe.img1);
    if (recipe.img2 != null) {
        $("#recipe-img2").attr("src", recipe.img2);
    }
    if(recipe.img3 != null) {
        $("#recipe-img3").attr("src", recipe.img3);
    }
    $(".recipe-difficulty").text((language == "serbian" ? "Težina: " : "Difficulty: ") + recipe.difficulty)
    $(".recipe-time").text((language == "serbian" ? "Vreme: " : "Time: ") + recipe.hours + "h " + recipe.minutes + "min")
    recipe.ratingNum == 0 ? $(".recipe-mark").text((language == "serbian" ? "Ocena: Nije ocenjen" : "Rating: No rating")) : 
                            $(".recipe-mark").text((language == "serbian" ? "Ocena: " : "Rating: ") + (recipe.ratingSum / recipe.ratingNum).toFixed(1))


    if (recipe.comments.length == 0) {  
        $("#recipe-comments").text(language == "serbian" ? "0 komentara" : "0 comments")
    }
    else {
        recipe.comments.length == 1 ?   $("#recipe-comments").text(language == "serbian" ? "1 komentar" : "1 comment") : 
                                        $("#recipe-comments").text(recipe.comments.length + (language == "serbian" ? " komentara" : " comments"))
    }
})