$(document).ready(function() {

    if(sessionStorage.getItem("loggedUser") == "" || sessionStorage.getItem("loggedUser") == null){
        window.location.href = "index.html"
        return
    }

    let currId
    if(localStorage.getItem("currId") == null) {
        currId = 13
        localStorage.setItem("currId", JSON.stringify(currId))
    }
    else {
        currId = JSON.parse(localStorage.getItem("currId"))
    }



    $("#add-recipe").click(function(){
        let name = $("#add-recipe-name").val()
        let group = $("#add-recipe-group").val()
        let difficulty = $("#add-recipe-difficulty").val()
        let hours = $("#add-recipe-hours").val()
        let minutes = $("#add-recipe-minutes").val()
        let videoUrl = $("#add-recipe-url").val()
        let instructions = $("#add-recipe-instructions").val()

        $("#add-recipe-error-name").text("")
        $("#add-recipe-error-group").text("")
        $("#add-recipe-error-difficulty").text("")
        $("#add-recipe-error-time").text("")
        $("#add-recipe-error-url").text("")
        $("#add-recipe-error-instructions").text("")


        let ret = false

        if (name == "") {
            $("#add-recipe-error-name").text(language == "serbian" ? "Niste uneli korisničko ime" : "You have not entered a username")
            ret = true
        }
        if (group == "" ){
            $("#add-recipe-error-group").text(language == "serbian" ? "Niste uneli grupu" : "You have not entered a group")
            ret = true
        }
        if (difficulty == ""){
            $("#add-recipe-error-difficulty").text(language == "serbian" ? "Niste uneli tezinu" : "You have not entered difficulty")
            ret = true
        }
        else if(difficulty < 0 || difficulty > 5){
            $("#add-recipe-error-difficulty").text(language == "serbian" ? "Niste ispravno uneli tezinu" : "You have not enter the weight correctly")
            ret = true
        }
        if (hours == "" || minutes == "" || hours < 0 || minutes < 0 || minutes > 59){
            $("#add-recipe-error-time").text(language == "serbian" ? "Niste ispravno uneli vreme" : "You have not enter the time correctly")
            ret = true
        }
        if (videoUrl == ""){
            $("#add-recipe-error-url").text(language == "serbian" ? "Niste uneli video URL" : "You have not enter a video URL")
            ret = true
        }
        if (instructions == ""){
            $("#add-recipe-error-instructions").text(language == "serbian" ? "Niste uneli instrukcije" : "You have not enter instructions")
            ret = true
        }

        if (ret == true) return false

        let img = "img/recipes/default.jpg"



        if (!videoUrl.includes("embed")){
            let str = videoUrl;
            let first = str.split("=");
            let second = first[1].split("&");
            let embeddedUrl = "https://www.youtube.com/embed/" + second[0];
            videoUrl = embeddedUrl;
        }

        let currUser = JSON.parse(sessionStorage.getItem("loggedUser"))
        let recipe = {
            author: currUser.username,
            comments: [],
            id : currId,
            name : name,
            group : group,
            difficulty : difficulty,
            hours : hours,
            minutes : minutes,
            img1 : img,
            img2 : null,
            img3 : null,
            videoURL : videoUrl,
            instructions: instructions,
            ratingNum: 0,
            ratingSum: 0
        }

        currId++;
        localStorage.setItem("currId", JSON.stringify(currId))

        currUser["recipes"].push(recipe)
        sessionStorage.setItem("loggedUser", JSON.stringify(currUser))

        let users = JSON.parse(localStorage.getItem("users"))
        for(let i = 0; i < users.length; i++){
            if(users[i].username == currUser.username){
                users[i] = currUser
                break;
            }
        }
        localStorage.setItem("users", JSON.stringify(users))
        let recipes = JSON.parse(localStorage.getItem("recipes"))
        recipes.push(recipe)
        localStorage.setItem("recipes", JSON.stringify(recipes))
        alert(language == "serbian" ? "Recept uspešno dodat!" : "Recipe successfully added!")
    })
})

