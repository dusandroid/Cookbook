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


    function showComments() {
        if (recipe.comments.length != 0) {
            let commentSection = ""
            for (let i = 0; i < recipe.comments.length; ++i) {
                commentSection +=   "<li class='comment-item'>" +
                                        "<div class='comment-body'>" +
                                            "<div class='comment-img'>" +
                                                "<img src='img/user.jpg' />" +
                                            "</div>" +
                                            "<div class='comment-text'>" +
                                                "<h3>" + recipe.comments[i].author + "</h3>" +
                                                "<p><span>" + recipe.comments[i].date + "</span></p>" +
                                                "<p>" + recipe.comments[i].body + "</p>" +
                                            "</div>" + 
                                        "</div>" +
                                    "</li>"        
            }
            $(".comment-list").html(commentSection)
        }
    }


    let currUser = JSON.parse(sessionStorage.getItem("loggedUser"))
    if (currUser != null) {
        let myRecipe = false
        for(let i = 0; i < currUser.recipes.length; ++i) {
            if(recipe.author == currUser.recipes[i].author) {
                myRecipe = true
                break
            }
        }
        if (myRecipe) {
            $("#delete-recipe-button").show()
        }
        else {
            $("#delete-recipe-button").hide()
        }    
    }
    else {
        $("#delete-recipe-button").hide()
        $(".comment-form").hide()
    }   

    

    showComments()



    $("#comment-submit").click(function() {
        $("#msg-empty-error").text("")

        let msg = $("#message").val()

        if (msg == "") {
            $("#msg-empty-error").text(language == "serbian" ? "Niste uneli tekst komentara" : "No comment body")
            return false
        }
        else {
            let user = JSON.parse(sessionStorage.getItem("loggedUser"))
            let username = user.username
            let currComment = JSON.parse(localStorage.getItem("currCommentId"))

            let today = new Date()
            let dd = String(today.getDate()).padStart(2, '0')
            let mm = String(today.getMonth() + 1).padStart(2, '0')
            let yyyy = today.getFullYear()
            let hours = today.getHours() 
            hours = hours < 10 ? '0' + hours : '' + hours; 
            let minutes = today.getMinutes()
            minutes = minutes < 10 ? '0' + minutes : '' + minutes; 
            var time = hours + ":" + minutes
            today = dd + '/' + mm + '/' + yyyy + '  ' + time

            let comment = {
                id : currComment.id,
                body : msg,
                date : today,
                author : username,
                recipeId : recipe.id
            }

            ++currComment.id
            localStorage.setItem("currCommentId", JSON.stringify(currComment))

            let users = JSON.parse(localStorage.getItem("users"))
            let recipes = JSON.parse(localStorage.getItem("recipes"))

            recipe.comments.push(comment)
            user.comments.push(comment)
            localStorage.setItem("recipeSingle", JSON.stringify(recipe))
            sessionStorage.setItem("loggedUser", JSON.stringify(user))
            
            for (let i = 0; i < recipes.length; ++i) {
                if (recipes[i].id == recipe.id) {
                    recipes[i] = recipe
                    localStorage.setItem("recipes", JSON.stringify(recipes))
                    break
                }
            }
            for (let i = 0; i < users.length; ++i) {
                if (users[i].username == username) {
                    users[i].comments.push(comment)
                    localStorage.setItem("users", JSON.stringify(users))
                    break
                }
            }
            showComments()
        }
        $("#message").val('')
        recipe.comments.length == 1 ?   $("#recipe-comments").text(language == "serbian" ? "1 komentar" : "1 comment") : 
                                        $("#recipe-comments").text(recipe.comments.length + (language == "serbian" ? " komentara" : " comments"))
    })





    $("input[name=rate]").click(function() {
        let user = JSON.parse(sessionStorage.getItem("loggedUser"))

        let rtg = {
            val : parseInt($('input[name="rate"]:checked').val()),
            recipe : recipe.id,
            author : user.username
        }

        let prevVal = 0
        for (let i = 0; i < user.ratings.length; ++i) {
            if (user.ratings[i].recipe == recipe.id) {
                prevVal = user.ratings[i].val
                user.ratings[i] = rtg
                break
            }
        }
        
        if (prevVal == 0) {
            user.ratings.push(rtg)
            recipe.ratingSum += rtg.val
            ++recipe.ratingNum
        }
        else {
            recipe.ratingSum += (rtg.val - prevVal)
        }

        sessionStorage.setItem("loggedUser", JSON.stringify(user))
        localStorage.setItem("recipeSingle", JSON.stringify(recipe))

        let users = JSON.parse(localStorage.getItem("users"))

        for (let i = 0; i < users.length; ++i) {
            if (users[i].username == user.username) {
                users[i] = user
                localStorage.setItem("users", JSON.stringify(users))
                break
            }
        }

        let recipes = JSON.parse(localStorage.getItem("recipes"))
        for (let i = 0; i < recipes.length; ++i) {
            if (recipes[i].id == recipe.id) {
                recipes[i] = recipe
                localStorage.setItem("recipes", JSON.stringify(recipes))
                break
            }
        }

        $(".recipe-mark").html((language == "serbian" ? "Ocena: " : "Rating: ") + (recipe.ratingSum / recipe.ratingNum).toFixed(1))
    })


    $("#delete-recipe-button").click(function(){
        let currUser = JSON.parse(sessionStorage.getItem("loggedUser"))
        let recipes = JSON.parse(localStorage.getItem("recipes"))
        let i

        let indexOf;
        for(i = 0; i < recipes.length; ++i){
            if(recipe.id == recipes[i].id){
                indexOf = i
                break
            }
        }
        recipes.splice(indexOf, 1)


        for(i = 0; i < currUser.recipes.length; ++i){
            if(recipe.id == currUser.recipes[i].id){
                indexOf = i
                break
            }
        }
        currUser.recipes.splice(indexOf, 1)

        i = currUser.comments.length;
        while (i--) {
            if(recipe.id == currUser.comments[i].recipeId){ 
                currUser.comments.splice(i, 1)
            }
        }

        i = currUser.ratings.length;
        while (i--) {
            if(recipe.id == currUser.ratings[i].recipe){ 
                currUser.ratings.splice(i, 1)
            }
        }

        sessionStorage.setItem("loggedUser", JSON.stringify(currUser))
        localStorage.setItem("recipes", JSON.stringify(recipes))

        let users = JSON.parse(localStorage.getItem("users"))
        for(i = 0; i < users.length; i++){
            if(users[i].username == currUser.username){
                users[i] = currUser
                break;
            }
        }
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("recipeSingle", null)

        window.location.href = "menu.html"
    })
    

})

function addChar(word, char) {
    if (char == 'č'|| char == 'ć') {
        word += 'c';
    }
    else if (char == 'Č'|| char == 'Ć') {
        word += 'C';
    }
    else if (char == 'đ') {
        word += "dj"
    }
    else if (char == 'Đ') {
        word += 'Dj';
    }
    else if (char == 'š') {
        word += 's'
    }
    else if (char == 'Š') {
        word += 'S'
    }
    else if (char == 'ž') {
        word += 'z'
    }
    else if (char == 'Ž') {
        word += 'Z'
    }
    else  {
        word += char
    }

    return word
}


function generatePDF(){
    var doc = new jsPDF()
    let text = ""
    let allPages = []
    let recipe = JSON.parse(localStorage.getItem("recipeSingle"))
    let language = sessionStorage.getItem("language")

    let rtg = recipe.ratingNum == 0 ? 0 : (recipe.ratingSum / recipe.ratingNum).toFixed(1)

    let lineCnt = 1
    let pageCnt = 1

    let recipeName = ""
    for (let i = 0; i < recipe.name.length; ++i) {
        recipeName = addChar(recipeName, recipe.name[i])
    }

    for (let i = 0; i < recipe.instructions.length; ++i) {
        if (i > 70 * lineCnt && i < 90 * lineCnt && recipe.instructions[i] == ' ') {
            text = text + '\n'
            ++lineCnt
            if ((i > 1950 * pageCnt && i < 2050 * pageCnt && pageCnt == 1) || ((i > 2350 * pageCnt && i < 2450 * pageCnt && pageCnt !=1))) {
                allPages.push(text)
                text = ""
                ++pageCnt
            }
        }
        else {
            text = addChar(text, recipe.instructions[i])
        }
    }
    
    doc.text(recipeName, 80, 10);
    doc.text((language == "serbian" ? 'Autor: ' : "Author: ") + recipe.author, 5, 20);
    doc.text((language == "serbian" ? 'Vreme: ' : "Time: ") + recipe.hours + ":" + recipe.minutes, 5, 30);
    doc.text((language == "serbian" ? 'Ocena: ' : "Rating: ") + rtg, 5, 40);
    allPages.push(text);
    for (let i = 0; i < allPages.length; ++i){
        if (i == 0) {
            doc.text(allPages[i], 5, 50)
        }
        else {
            doc.addPage().text(allPages[i], 5, 25)
        }
    }
    doc.save(recipe.name)
}