$(document).ready(function() {
    let recipe = JSON.parse(localStorage.getItem("recipeSingle"))

    if(recipe == null) {
        recipe = recipes.find(element=>element.id == 1)
    }

    $(".recipe-name").text(recipe.name)
    $("#recipe-instructions").text(recipe.instructions)


    $(".recipe-author").text("Autor: " + recipe.author)
    $("#recipe-video").attr("src", recipe.videoURL);
    $("#recipe-img").attr("src", recipe.img);
    $(".recipe-difficulty").text("Težina: " + recipe.difficulty)
    $(".recipe-time").text("Vreme: " + recipe.hours + "h " + recipe.minutes + "min")
    recipe.ratingNum == 0 ? $(".recipe-mark").text("Ocena: Nije ocenjen") : $(".recipe-mark").text("Ocena: " + (recipe.ratingSum / recipe.ratingNum).toFixed(1))

    let commentSection = ""
    if (recipe.comments.length == 0) {  
        $("#recipe-comments").text("0 komentara")
    }
    else {
        recipe.comments.length == 1 ? $("#recipe-comments").text("1 komentar") : $("#recipe-comments").text(recipe.comments.length + " komentara")

        
        for (let i = 0; i < recipe.comments.length; ++i) {
            commentSection += "<li class='comment-item'>" +
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



    $("#comment-submit").click(function() {
        $("#msg-empty-error").text("")

        let msg = $("#message").val()

        if (msg == "") {
            $("#msg-empty-error").text("Niste uneli tekst komentara")
            return false
        }
        else {
            let username = JSON.parse(sessionStorage.getItem("loggedUser")).username
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
            localStorage.setItem("recipeSingle", JSON.stringify(recipe))
            
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
            commentSection += "<li class='comment-item'>" +
                            "<div class='comment-body'>" +
                                "<div class='comment-img'>" +
                                    "<img src='img/user.jpg' />" +
                                "</div>" +
                                "<div class='comment-text'>" +
                                    "<h3>" + comment.author + "</h3>" +
                                    "<p><span>" + comment.date + "</span></p>" +
                                    "<p>" + comment.body + "</p>" +
                                "</div>" + 
                            "</div>" +
                        "</li>"
            $(".comment-list").html(commentSection)
        }
        $("#message").val('')
        recipe.comments.length == 1 ? $("#recipe-comments").text("1 komentar") : $("#recipe-comments").text(recipe.comments.length + " komentara")
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

        $(".recipe-mark").html("Ocena: " + (recipe.ratingSum / recipe.ratingNum).toFixed(1))
    })
    

});