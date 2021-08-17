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

        let ret = false

        if (name == "") {
            $("#add-recipe-error-name").text("Niste uneli korisničko ime")
            ret = true
        }
        if (group == "" ){
            $("#add-recipe-error-group").text("Niste uneli grupu")
            ret = true
        }
        if (difficulty == ""){
            $("#add-recipe-error-difficulty").text("Niste uneli tezinu")
            ret = true
        }
        else if(difficulty < 0 || difficulty > 5){
            $("#add-recipe-error-difficulty").text("Niste ispravno uneli tezinu")
            ret = true
        }
        if (hours == "" || minutes == "" || hours < 0 || minutes < 0 || minutes > 59){
            $("#add-recipe-error-time").text("Niste ispravno uneli vreme")
            ret = true
        }
        if (videoUrl == ""){
            $("#add-recipe-error-url").text("Niste uneli video URL")
            ret = true
        }
        if (instructions == ""){
            $("#add-recipe-error-instructions").text("Niste uneli instrukcije")
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

        let recipe = {
            id : currId,
            name : name,
            group : group,
            difficulty : difficulty,
            hours : hours,
            minutes : minutes,
            img : img,
            videoURL : videoUrl,
            instructions: instructions
        }

        currId++;
        localStorage.setItem("currId", JSON.stringify(currId))

        let currUser = JSON.parse(sessionStorage.getItem("loggedUser"))
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
    })
})

