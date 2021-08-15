$(document).ready(function() {
    let users = [
        {
            username: 'aleks',
            email: 'aleksandra.milovic@gmail.com',
            password: 'aleks',
            recipes: [
                {
                    id : 1,
                    name : "Salata sa piletinom",
                    group : "1",
                    difficulty : "2",
                    hours : "0",
                    minutes : "30",
                    img : "img/recipes/salata-sa-piletinom.jpg",
                    videoURL : "https://www.youtube.com/embed/7N4W140M2KU",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "aleks",
                    instructions : "Integralnu testeninu skuvamo sa malo soli i ocedimo. Posebno skuvamo kukuruz šećerac sa malo soli.\nObarimo pileće belo meso sa malo soli i sitno iseckamo. Crvenu papriku iseckamo na sitne kockice.\nU činiju stavimo oceđenu testeninu, kukuruz šećerac, pileće belo meso, iseckanu crvenu papriku, origano, so i biber. Sve dobro promešamo.\nZatim dodamo kiselu pavlaku i majonez, sve dobro promešamo.\nSalatu stavimo u činijice za serviranje i dobro ohladimo u frižideru."
                },
                {
                    id : 2,
                    name : "Riblji paprikaš",
                    group : "2",
                    difficulty : "4",
                    hours : "1",
                    minutes : "0",
                    img : "img/recipes/riblji-paprikas.jpg",
                    videoURL : "https://www.youtube.com/embed/6T3twF0R5Ik",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "aleks",
                    instructions : "Ribu isecite na krupnije komade kako se tokom kuvanja ne bi raspala, isecite 3 glavice crnog luka i sve zajedno stavite u kotlić, nalijte vodom i kuvajte na jakoj vatri. Kada paprikaš proključa odklonite nastalu penu sa površine, a potom začinite sa tri kašike aleve paprike, odmah zatim dodajte i 1,5dl soka od paradajza.\nPred kraj kuvanja dodajte malo mleča ili ikru. Paprikaš servirajte zajedno sa testeninom. Prijatno."
                },
                {
                    id : 3,
                    name : "Strawberry banana smoothie",
                    group : "3",
                    difficulty : "1",
                    hours : "0",
                    minutes : "5",
                    img : "img/recipes/strawberry-banana-smoothie.jpg",
                    videoURL : "https://www.youtube.com/embed/TJPhWB67_lA",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "aleks",
                    instructions : "Add all ingredients to a blender.\nPulse until smooth. (If your smoothie seems too thick, add in a bit of extra milk or water. If it seems too thin, add in more strawberries or banana.)\nThen pour the smoothie into a serving glass or two…and enjoy!"
                },
                {
                    id : 4,
                    name : "Čokoladni keksići",
                    group : "4",
                    difficulty : "1",
                    hours : "0",
                    minutes : "15",
                    img : "img/recipes/americki-kolacici.jpg",
                    videoURL : "https://www.youtube.com/embed/_LqQUUjvDws",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "aleks",
                    instructions : "Pripremiti 2 pleha obložena papirom za pečenje. Uključiti pećnicu da se zagreje na 180 stepeni. Maslac i šećer kremasto izraditi, kad se šećer skoro istopio dodati jedno po jedno jaje muteći sve vreme. Isključiti mikser i dodati sve ostale sastojke.\nKašikom dobro mešati da se sve lepo sjedini. Pomoću kašike koju držite u vodi vaditi po malo testa na pleh. Možete isto raditi vlažnim rukama. Mali razmak mora biti između svakog keksa. Peći 15 minuta, ne duže i pustiti ih na plehu da se ohlade."
                }
            ],
            comments : [],
            ratings : []
        },
        {
            username: 'dusan',
            email: 'dusan.gradojevic@gmail.com',
            password: 'dusan',
            recipes: [
                {                    
                    id : 5,                    
                    name : "Pita sa spanaćem",                    
                    group : "1",                    
                    difficulty : "2",                    
                    hours : "1",                    
                    minutes : "0",                    
                    img : "img/recipes/pita-sa-spanacem.jpg",                    
                    videoURL : "https://www.youtube.com/embed/_K5SwE3BEQo",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "dusan",                  
                    instructions: "U šerpu stavimo ulje da se zagreje. U zagrejano ulje dodajemo iseckan praziluk koji posolimo i ostavimo da se dinsta par minuta. Zatim dodajemo sitno iseckan beli luk i nastavimo sa dinstanjem.\nKada smo luk prodinsatli dodajemo opran spanać, nalijemo sa vodom i disnatamo spanać dok se spanać lepo ne ukrčka 10-15 minuta. Sklonimo sa ringle i ostavimo da se smesa prohladi.\nU činiju za mućenje pripremimo smesu za fil. Dodamo jaja, so, biber i umutimo mutilicom. Zatim dodajemo sitan sir i prohlađen spanać. Sve lepo sjedinimo.\nU fil na kraju dodajemo pavlaku za kuvanje i sve lepo promešamo da se napravi kompaktan fil.\nU posebnu činiju pripremimo smesu za premazivanje kora. Pomešamo ulje i kiselu vodu.\nPleh obložimo papirom za pečenje. Uzimamo prvu koru i stavljamo je na dno pleha, a krajeve prabacujemo preko ivica pleha. Premazujemo je smesom ulja i kisele vode. Tako ređamo polovinu kora. U zavisnosti od debljine to je 5-6 kora.\nZatim dodajemo fil od spanaća i prebacujemo jedan po jedan kraj kora koje su bile prako ivica pleha za pečenje. Svaku koru premazujemo smesom ulja i kisele vode.\nPreko dodajemo preostale kore koje isto premazujemo smesom ulja i kisele vode. Poslednjom korom lepo obavijemo pitu koju isto premažemo smesom za premazivanje kora.\nPečemo u već zagrejanoj rerni 35-45 minuta dok nam pita ne bude lepo pečena."                
                },
                {                    
                    id : 6,                    
                    name : "Špagete sa tikvicama i slaninom",                    
                    group : "2",                    
                    difficulty : "2",                    
                    hours : "0",                    
                    minutes : "45",                    
                    img : "img/recipes/spagete-sa-tikvicama-i-slaninom.jpg",                    
                    videoURL : "https://www.youtube.com/embed/ugV5w7gNP9Y",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "dusan",             
                    instructions: "U šerpu stavimo vodu i kašičicu soli. Kada voda prokuva dodajemo špagete. Kuvamo prema uputstvu sa pakovanja.\nDok se špageti kuvaju pripremamo sos sa tikvicama i slaninom.\nU tiganj stavimo malo putera i pustimo da se otopi. Dodajemo slaninicu iseckanu na trakice i pržimo. Kada je slaninica ispržena izvadimo je u činiju. Višak masnoće ocedimo.\nU istom tiganju stavimo sitno iseckan beli luk da se proprži par minuta. Zatim dodajemo iseckane tikvice i dostamo ih 10-15 minuta.\nTikvicama dadajemo već proprženu slaninicu i dodajemo malo bibera i origana. Sve promešamo i dodajemo pavlaku za kuvanje. Ostavimo da se sve prokrčka 5-10 minuta.\nKada je sos spreman dodajemo skuvane špagete i sve promešamo.\nServiramo sa origanom i parmezanom."                
                },
                {                    
                    id : 7,                    
                    name : "Watermelon Ice Pops",                    
                    group : "4",                    
                    difficulty : "1",                    
                    hours : "2",                    
                    minutes : "10",                    
                    img : "img/recipes/watermelon-ice-pops.jpg",                    
                    videoURL : "https://www.youtube.com/embed/hL2fNXE5pTM",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "dusan",                   
                    instructions: "Blend watermelon, water, honey, lemon juice, and sugar together in a blender until smooth. Pour mixture into ice pop molds and freeze until solid, about 2 hours.\nRun hot water over ice pop molds for a few seconds to unmold."                
                },
                {
                    id : 8,
                    name : "Plazma kocke sa kikiriki puterom",
                    group : "4",
                    difficulty : "2",
                    hours : "0",
                    minutes : "45",
                    img : "img/recipes/plazma-kocke-sa-kikiriki-puterom.jpg",
                    videoURL : "https://www.youtube.com/embed/yv0EQtjTmwM",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "dusan",
                    instructions: "U činiju sipamo mlevenu plazmu i prah šećer. Promešamo špatulom smesu.\nDodamo kikiriki puter i rukom smesu lepo sjedinom. Na kraju dodajemo otopljeni maslac i nastavimo sa mešanjem.\nKada se smesa lepo sjedinila prebacimo je pleh obložen pek papirom. Rukom lepo smesu utapkamo i poravnamo špatulom.\nPleh ostavimo 15tak minuta da se ohladi u zamrzivaču.\nU međuvremenu pripremimo glazuru. U otopljenu čokololadu dodamo kikiriki puter i lagano špatulom mešamo dok se smesa lepo ne sjedini.\nGlazuru prelijemo preko ohlađenog kolača i pospemo seckanim kikirikijem. Ostavimo da se kolač dobro ohladi. Sečemo kocke željene veličine i uživamo u divnom ukusu. Prijatno."
                }
            ],
            comments : [],
            ratings : []
        },
        {
            username: 'admin',
            email: 'admin@gmail.com',
            password: 'admin',
            recipes: [
                {
                    id : 9,
                    name : "Slani mafini sa šunkom i sirom",
                    group : "1",
                    difficulty : "2",
                    hours : "0",
                    minutes : "40",
                    img : "img/recipes/mafin-sa-sunkom-i-sirom.jpg",
                    videoURL : "https://www.youtube.com/embed/L-leXiHmL2I",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "admin",
                    instructions: "U činiju za mućenje stavimo jaja i umutimo ih mutilicom. Zatim dodajemo kiselu pavlaku i so, mutimo dok se smesa ne sjedini.\nDodajemo otopljeni maslac i nastavljamo sa mućenjem.\nPostepeno dodajemo kukuruzno i pšenično brašno zajedno sa praškom za pecivo.\nU smesu dodajemo šunku iseckanu na kockice, iseckane masline i krupno naredani kačkavalj.\nSmesu sipamo u podmazane kalupe za mafine. Punimo do 2/3 trećine kalupa.\nPo vrhu stavimo iseckanu šunku i masline.\nPečemo na 200C oko 20-25 minuta."
                },
                {
                    id : 10,
                    name : "Lovačke šnicle",
                    group : "2",
                    difficulty : "4",
                    hours : "1",
                    minutes : "0",
                    img : "img/recipes/lovacke-snicle.jpg",
                    videoURL : "https://www.youtube.com/embed/L2BXXejBqEw",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "admin",
                    instructions: "Šnicle svinjskog laks karea izlupamo i posolimo, zatim uvaljamo u brašno sa jedne strane.\nNa zagrejanom tiganju otopimo maslac. Stavimo šnicle laks karea i dinstamo po 5 minuta sa obe strane.\nŠnicle izvadimo, i na istom puteru dinstamo sitno naseckani crni luk, lovorov list i pančetu.\nPosle par minuta dodamo šampinjone naseckane na črtvrtine i dinstamo par minuta sve zajedno.\nDodamo suvi biljni začin, mleveni biber i vodu, promešamo namirnice i ostavimo da se sve krčka par minuta.\nZatim dodamo senf i sitno naseckan beli luk, promešamo da se sjedini i na kraju dodamo belo vino. Ostavimo da krčka par minuta.\nŠnicle vratimo u tiganj, poklopimo i nastavljamo sa dinstanjem dok voda ne ispati, otprilike 30tak minuta."
                },
                {
                    id : 11,
                    name : "Oatmeal Peanut Butter Chocolate Chip Bars",
                    group : "4",
                    difficulty : "1",
                    hours : "0",
                    minutes : "30",
                    img : "img/recipes/oatmeal-pb-cc-bars.jpg",
                    videoURL : "https://www.youtube.com/embed/U7b0G-fPV0E",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "admin",
                    instructions: "Preheat oven to 350.\nCream together softened butter with white sugar and brown sugar until light and fluffy.\nAdd in the peanut butter, egg and vanilla. Mix until combined.\nIn a separate bowl sift together the flour, baking soda and salt - to this add the oats\nPour in the dry ingredients to the wet and mix until almost combined but not totally.Add in the chocolate chips and peanut butter chips, mix gently.\nLine a square pan with parchment paper.Scoop the batter into the baking pan and press into all the corners so its even.Bake for 15-20 minutes, bake a minute or two less than what 'done' would be for a chewier cookie bar texture.\nRemove from the oven, let it cool for 30 minutes then transfer to a baking rack by lifting up on the parchment paper.Serve by cutting in to squares!"                
            
                },
                {
                    id : 12,
                    name : "Lava kolač",
                    group : "4",
                    difficulty : "2",
                    hours : "0",
                    minutes : "30",
                    img : "img/recipes/lava-kolac.jpg",
                    videoURL : "https://www.youtube.com/embed/2wkXFEOm9kA",
                    ratingSum : 0,
                    ratingNum : 0,
                    comments : [],
                    author : "admin",
                    instructions: "U odgovarajuću posudu dodati maslac, crnu čokoladu, žuti šećer i slatku pavlaku.\nŠerpu u koju smo prethodno nalili vodu stavimo da se zagreje do tačke ključanja. Kada voda prključa preko stavimo posudu sa sastojcima. Lagano mešamo dok se masa ne otopi i ujednači.\nKada masa postane kompaktna sklonimo sa strane. Prvo dodajemo brašno uz neprestano mešanje dok se ne sjedini.\nNakon toga dodajemo jaja i nastavimo sa mešanjem.\nGotovu masu sipamo u prethodno premazane posude (otopljenim maslacem i keksom).\nPečemo u prethodno zagrejanoj pećnici na 220C od 8-10 minuta."
                }
            ],
            comments : [],
            ratings : []
        }
    ]

    if(localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", "")

        let recipes = []
        for (let i = 0; i < users.length; ++i) {
            for (let ii = 0; ii < users[i].recipes.length; ++ii) {
                recipes.push(users[i].recipes[ii])
            }
        }
        localStorage.setItem("recipes", JSON.stringify(recipes))

        let currCom = {
            id : 1
        }
        localStorage.setItem("currCommentId", JSON.stringify(currCom))
    }
    else {
        users = JSON.parse(localStorage.getItem("users"))
    }

    

    if (sessionStorage.getItem("loggedUser") != "" && sessionStorage.getItem("loggedUser") != null) {
        $(".register-login").hide()
        $(".navbar-nav").html("<a href='index.html' class='nav-item nav-link active'>Početna</a>"+"<a href='menu.html' class='nav-item nav-link'>Recepti</a>"+"<a href='add-recipe.html' class='nav-item nav-link'>Dodaj recept</a>"+"<a href='user-profile.html' class='nav-item nav-link'>Moj nalog</a>"+"<div class='nav-item dropdown'><a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>Jezik</a><div class='dropdown-menu'><a href='blog.html' class='dropdown-item'>Srpski</a><a href='single.html' class='dropdown-item'>Engleski</a></div></div>"+"<a href='about.html' class='nav-item nav-link'>O nama</a>"+"<button class='btn btn-outline-danger log-out-btn'>Odjavi se</button>")
    } 
    else {
        $(".register-login").show()
        $(".navbar-nav").html("<a href='index.html' class='nav-item nav-link active'>Početna</a>"+"<a href='menu.html' class='nav-item nav-link'>Recepti</a>"+"<div class='nav-item dropdown'><a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>Jezik</a><div class='dropdown-menu'><a href='blog.html' class='dropdown-item'>Srpski</a><a href='single.html' class='dropdown-item'>Engleski</a></div></div>"+"<a href='about.html' class='nav-item nav-link'>O nama</a>")
    }


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

    $("#add-recipe").click(function() {
        let name = $("#add-recipe-name").val()
        let group = $("#add-recipe-group").val()
        let difficulty = $("#add-recipe-difficulty").val()
        let hours = $("#add-recipe-hours").val()
        let minutes = $("#add-recipe-minutes").val()
        let img = $("#choose-file").val()
        let videoUrl = $("#add-recipe-url").val()
        let instructions = $("#add-recipe-instructions").val()

        let currUser = sessionStorage.getItem("loggedUser")
})