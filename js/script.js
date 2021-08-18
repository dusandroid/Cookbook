$(document).ready(function() {
    let users
    if(localStorage.getItem("users") == null) {
        users = [
            {
                username: 'aleks',
                email: 'aleksandra.milovic@gmail.com',
                password: 'aleks',
                recipes: [
                    {
                        id : 1,
                        name : "Salata sa piletinom",
                        group : "appetizer",
                        difficulty : 2,
                        hours : 0,
                        minutes : 30,
                        img1 : "img/recipes/salata-sa-piletinom-1.jpg",
                        img2 : "img/recipes/salata-sa-piletinom-2.jpg",
                        img3 : "img/recipes/salata-sa-piletinom-3.jpg",
                        author : "aleks",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/7N4W140M2KU",
                        instructions: "Integralnu testeninu skuvamo sa malo soli i ocedimo. Posebno skuvanmo kukuruz šećerca sa malo soli.\nObarimo pileće belo meso sa malo soli i sitno iseckamo. Crvenu papriku iseckamo na sitne kockice.\nU činiju stavimo oceđenu testeninu, kukuruz šećerac, pileće belo meso, iseckanu crvenu papriku, origano, so i biber. Sve dobro promešamo.\nZatim dodamo kiselu pavlaku i majonez, sve dobro promešamo.\nSalatu stavimo u činijice za serviranje i dobro ohladimo u frižideru."
                    
                    },
                    {
                        id : 2,
                        name : "Riblji paprikaš",
                        group : "main-course",
                        difficulty : 4,
                        hours : 1,
                        minutes : 0,
                        img1 : "img/recipes/riblji-paprikas-1.jpg",
                        img2 : "img/recipes/riblji-paprikas-2.jpg",
                        img3 : "img/recipes/riblji-paprikas-3.jpg",
                        author : "aleks",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/6T3twF0R5Ik",
                        instructions: "Ribu isecite na krupnije komade kako se tokom kuvanja nebi raspala, isecite 3 glavice crnog luka i sve zajedno stavite u kotlić, nalijte vodom i kuvajte na jakoj vatri. Kada paprikaš proključa odklonite nastalu penu sa površine, a potom začinite sa tri kašike aleve paprike, odmah zatim dodajte i 1,5dl soka od paradajza.\nPred kraj kuvanja dodajte malo mleča ili ikru. Paprikaš servirajte zajedno sa testeninom. Prijatno."
                    },
                    {
                        id : 3,
                        name : "Strawberry banana smoothie",
                        group : "dessert",
                        difficulty : 1,
                        hours : 0,
                        minutes : 5,
                        img1 : "img/recipes/strawberry-banana-smoothie-1.jpg",
                        img2 : "img/recipes/strawberry-banana-smoothie-2.jpg",
                        img3 : "img/recipes/strawberry-banana-smoothie-3.jpg",
                        author : "aleks",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/TJPhWB67_lA",
                        instructions: "Add all ingredients to a blender.\nPulse until smooth. (If your smoothie seems too thick, add in a bit of extra milk or water. If it seems too thin, add in more strawberries or banana.)\nThen pour the smoothie into a serving glass or two…and enjoy!"
                    },
                    {
                        id : 4,
                        name : "Čokoladni keksići",
                        group : "snack",
                        difficulty : 1,
                        hours : 0,
                        minutes : 15,
                        img1 : "img/recipes/americki-kolacici-1.jpg",
                        img2 : "img/recipes/americki-kolacici-2.jpg",
                        img3 : "img/recipes/americki-kolacici-3.jpg",
                        author : "aleks",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/_LqQUUjvDws",
                        instructions: "Pripremiti 2 pleha obložena papirom za pečenje. Uključiti pećnicu da se zagreje na 180 stepeni. Maslac i šećer kremasto izraditi, kad se šećer skoro istopio dodati jedno po jedno jaje muteći sve vreme. Isključiti mikser i dodati sve ostale sastojke.\nKašikom dobro mešati da se sve lepo sjedini. Pomoću kašike koju držite u vodi vaditi po malo testa na pleh. Možete isto raditi vlažnim rukama. Mali razmak mora biti između svakog keksa. Peći 15 minuta, ne duže i pustiti ih na plehu da se ohlade."
                    }
                ],
                comments: [],
                ratings: []
            },
            {
                username: 'dusan',
                email: 'dusan.gradojevic@gmail.com',
                password: 'dusan',
                recipes: [
                    {                    
                        id : 5,                    
                        name : "Pita sa spanaćem",                    
                        group : "appetizer",                    
                        difficulty : 2,                    
                        hours : 1,                    
                        minutes : 0,                     
                        img1 : "img/recipes/pita-sa-spanacem-1.jpg",
                        img2 : "img/recipes/pita-sa-spanacem-2.jpg",
                        img3 : "img/recipes/pita-sa-spanacem-3.jpg",       
                        author : "dusan",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,           
                        videoURL : "https://www.youtube.com/embed/_K5SwE3BEQo",                    
                        instructions: "U šerpu stavimo ulje da se zagreje. U zagrejano ulje dodajemo iseckan praziluk koji posolimo i ostavimo da se dinsta par minuta. Zatim dodajemo sitno iseckan beli luk i nastavimo sa dinstanjem.\nKada smo luk prodinsatli dodajemo opran spanać, nalijemo sa vodom i disnatamo spanać dok se spanać lepo ne ukrčka 10-15 minuta. Sklonimo sa ringle i ostavimo da se smesa prohladi.\nU činiju za mućenje pripremimo smesu za fil. Dodamo jaja, so, biber i umutimo mutilicom. Zatim dodajemo sitan sir i prohlađen spanać. Sve lepo sjedinimo.\nU fil na kraju dodajemo pavlaku za kuvanje i sve lepo promešamo da se napravi kompaktan fil.\nU posebnu činiju pripremimo smesu za premazivanje kora. Pomešamo ulje i kiselu vodu.\nPleh obložimo papirom za pečenje. Uzimamo prvu koru i stavljamo je na dno pleha, a krajeve prabacujemo preko ivica pleha. Premazujemo je smesom ulja i kisele vode. Tako ređamo polovinu kora. U zavisnosti od debljine to je 5-6 kora.\nZatim dodajemo fil od spanaća i prebacujemo jedan po jedan kraj kora koje su bile prako ivica pleha za pečenje. Svaku koru premazujemo smesom ulja i kisele vode.\nPreko dodajemo preostale kore koje isto premazujemo smesom ulja i kisele vode. Poslednjom korom lepo obavijemo pitu koju isto premažemo smesom za premazivanje kora.\nPečemo u već zagrejanoj rerni 35-45 minuta dok nam pita ne bude lepo pečena."                
                    },
                    {                    
                        id : 6,                    
                        name : "Špagete sa tikvicama i slaninom",                    
                        group : "main-course",                    
                        difficulty : 2,                    
                        hours : 0,                    
                        minutes : 45,                    
                        img1 : "img/recipes/spagete-sa-tikvicama-i-slaninom-1.jpg",
                        img2 : "img/recipes/spagete-sa-tikvicama-i-slaninom-2.jpg",
                        img3 : "img/recipes/spagete-sa-tikvicama-i-slaninom-3.jpg", 
                        author : "dusan",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,                  
                        videoURL : "https://www.youtube.com/embed/ugV5w7gNP9Y",                    
                        instructions: "U šerpu stavimo vodu i kašičicu soli. Kada voda prokuva dodajemo špagete. Kuvamo prema uputstvu sa pakovanja.\nDok se špageti kuvaju pripremamo sos sa tikvicama i slaninom.\nU tiganj stavimo malo putera i pustimo da se otopi. Dodajemo slaninicu iseckanu na trakice i pržimo. Kada je slaninica ispržena izvadimo je u činiju. Višak masnoće ocedimo.\nU istom tiganju stavimo sitno iseckan beli luk da se proprži par minuta. Zatim dodajemo iseckane tikvice i dostamo ih 10-15 minuta.\nTikvicama dadajemo već proprženu slaninicu i dodajemo malo bibera i origana. Sve promešamo i dodajemo pavlaku za kuvanje. Ostavimo da se sve prokrčka 5-10 minuta.\nKada je sos spreman dodajemo skuvane špagete i sve promešamo.\nServiramo sa origanom i parmezanom."                
                    },
                    {                    
                        id : 7,                    
                        name : "Watermelon Ice Pops",                    
                        group : "dessert",                    
                        difficulty : 1,                    
                        hours : 2,                    
                        minutes : 10,                       
                        img1 : "img/recipes/watermelon-ice-pops-1.jpg",
                        img2 : "img/recipes/watermelon-ice-pops-2.jpg",
                        img3 : "img/recipes/watermelon-ice-pops-3.jpg", 
                        author : "dusan",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,               
                        videoURL : "https://www.youtube.com/embed/hL2fNXE5pTM",                    
                        instructions: "Blend watermelon, water, honey, lemon juice, and sugar together in a blender until smooth. Pour mixture into ice pop molds and freeze until solid, about 2 hours.\nRun hot water over ice pop molds for a few seconds to unmold."                
                    },
                    {
                        id : 8,
                        name : "Plazma kocke sa kikiriki puterom",
                        group : "snack",
                        difficulty : 2,
                        hours : 0,
                        minutes : 45,
                        img1 : "img/recipes/plazma-kocke-sa-kikiriki-puterom-1.jpg",
                        img2 : "img/recipes/plazma-kocke-sa-kikiriki-puterom-2.jpg",
                        img3 : "img/recipes/plazma-kocke-sa-kikiriki-puterom-3.jpg",
                        author : "dusan",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/yv0EQtjTmwM",
                        instructions: "U činiju sipamo mlevenu plazmu i prah šećer. Promešamo špatulom smesu.\nDodamo kikiriki puter i rukom smesu lepo sjedinom. Na kraju dodajemo otopljeni maslac i nastavimo sa mešanjem.\nKada se smesa lepo sjedinila prebacimo je pleh obložen pek papirom. Rukom lepo smesu utapkamo i poravnamo špatulom.\nPleh ostavimo 15tak minuta da se ohladi u zamrzivaču.\nU međuvremenu pripremimo glazuru. U otopljenu čokololadu dodamo kikiriki puter i lagano špatulom mešamo dok se smesa lepo ne sjedini.\nGlazuru prelijemo preko ohlađenog kolača i pospemo seckanim kikirikijem. Ostavimo da se kolač dobro ohladi. Sečemo kocke željene veličine i uživamo u divnom ukusu. Prijatno."
                    }
                ],
                comments: [],
                ratings: []
            },
            {
                username: 'admin',
                email: 'admin@gmail.com',
                password: 'admin',
                recipes: [
                    {
                        id : 9,
                        name : "Slani mafini sa šunkom i sirom",
                        group : "appetizer",
                        difficulty : 2,
                        hours : 0,
                        minutes : 40,
                        img1 : "img/recipes/mafin-sa-sunkom-i-sirom-1.jpg",
                        img2 : "img/recipes/mafin-sa-sunkom-i-sirom-2.jpg",
                        img3 : "img/recipes/mafin-sa-sunkom-i-sirom-3.jpg",
                        author : "admin",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/L-leXiHmL2I",
                        instructions: "U činiju za mućenje stavimo jaja i umutimo ih mutilicom. Zatim dodajemo kiselu pavlaku i so, mutimo dok se smesa ne sjedini.\nDodajemo otopljeni maslac i nastavljamo sa mućenjem.\nPostepeno dodajemo kukuruzno i pšenično brašno zajedno sa praškom za pecivo.\nU smesu dodajemo šunku iseckanu na kockice, iseckane masline i krupno naredani kačkavalj.\nSmesu sipamo u podmazane kalupe za mafine. Punimo do 2/3 trećine kalupa.\nPo vrhu stavimo iseckanu šunku i masline.\nPečemo na 200C oko 20-25 minuta."
                    },
                    {
                        id : 10,
                        name : "Lovačke šnicle",
                        group : "main-course",
                        difficulty : 4,
                        hours : 1,
                        minutes : 0,
                        img1 : "img/recipes/lovacke-snicle-1.jpg",
                        img2 : "img/recipes/lovacke-snicle-2.jpg",
                        img3 : "img/recipes/lovacke-snicle-3.jpg",
                        author : "admin",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/L2BXXejBqEw",
                        instructions: "Šnicle svinjskog laks karea izlupamo i posolimo, zatim uvaljamo u brašno sa jedne strane.\nNa zagrejanom tiganju otopimo maslac. Stavimo šnicle laks karea i dinstamo po 5 minuta sa obe strane.\nŠnicle izvadimo, i na istom puteru dinstamo sitno naseckani crni luk, lovorov list i pančetu.\nPosle par minuta dodamo šampinjone naseckane na črtvrtine i dinstamo par minuta sve zajedno.\nDodamo suvi biljni začin, mleveni biber i vodu, promešamo namirnice i ostavimo da se sve krčka par minuta.\nZatim dodamo senf i sitno naseckan beli luk, promešamo da se sjedini i na kraju dodamo belo vino. Ostavimo da krčka par minuta.\nŠnicle vratimo u tiganj, poklopimo i nastavljamo sa dinstanjem dok voda ne ispati, otprilike 30tak minuta."
                    },
                    {
                        id : 11,
                        name : "Oatmeal Peanut Butter Chocolate Chip Bars",
                        group : "dessert",
                        difficulty : 1,
                        hours : 0,
                        minutes : 30,
                        img1 : "img/recipes/oatmeal-pb-cc-bars-1.jpg",
                        img2 : "img/recipes/oatmeal-pb-cc-bars-2.jpg",
                        img3 : "img/recipes/oatmeal-pb-cc-bars-3.jpg",
                        author : "admin",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/U7b0G-fPV0E",
                        instructions: "Preheat oven to 350.\nCream together softened butter with white sugar and brown sugar until light and fluffy.\nAdd in the peanut butter, egg and vanilla. Mix until combined.\nIn a separate bowl sift together the flour, baking soda and salt - to this add the oats\nPour in the dry ingredients to the wet and mix until almost combined but not totally.Add in the chocolate chips and peanut butter chips, mix gently.\nLine a square pan with parchment paper.Scoop the batter into the baking pan and press into all the corners so its even.Bake for 15-20 minutes, bake a minute or two less than what 'done' would be for a chewier cookie bar texture.\nRemove from the oven, let it cool for 30 minutes then transfer to a baking rack by lifting up on the parchment paper.Serve by cutting in to squares!"                
                
                    },
                    {
                        id : 12,
                        name : "Lava kolač",
                        group : "snack",
                        difficulty : 1,
                        hours : 0,
                        minutes : 30,
                        img1 : "img/recipes/lava-kolac-1.jpg",
                        img2 : "img/recipes/lava-kolac-2.jpg",
                        img3 : "img/recipes/lava-kolac-3.jpg",
                        author : "admin",
                        comments: [],
                        ratingSum : 0,
                        ratingNum : 0,
                        videoURL : "https://www.youtube.com/embed/2wkXFEOm9kA",
                        instructions: "U odgovarajuću posudu dodati maslac, crnu čokoladu, žuti šećer i slatku pavlaku.\nŠerpu u koju smo prethodno nalili vodu stavimo da se zagreje do tačke ključanja. Kada voda prključa preko stavimo posudu sa sastojcima. Lagano mešamo dok se masa ne otopi i ujednači.\nKada masa postane kompaktna sklonimo sa strane. Prvo dodajemo brašno uz neprestano mešanje dok se ne sjedini.\nNakon toga dodajemo jaja i nastavimo sa mešanjem.\nGotovu masu sipamo u prethodno premazane posude (otopljenim maslacem i keksom).\nPečemo u prethodno zagrejanoj pećnici na 220C od 8-10 minuta."
                    }
                ],
                comments: [],
                ratings: []
            }
        ]
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("loggedUser", null)

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
        $(".navbar-nav").html("<a href='index.html' class='nav-item nav-link'>Početna</a>" + 
                                "<a href='menu.html' class='nav-item nav-link'>Recepti</a>" + 
                                "<a href='add-recipe.html' class='nav-item nav-link'>Dodaj recept</a>" + 
                                "<a href='user-profile.html' class='nav-item nav-link'>Moj nalog</a>" + 
                                "<div class='nav-item dropdown'>" +
                                    "<a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>Jezik</a>" +
                                    "<div class='dropdown-menu'>" +
                                        "<a href='blog.html' class='dropdown-item'>Srpski</a>" + 
                                        "<a href='single.html' class='dropdown-item'>Engleski</a>" + 
                                    "</div>" +
                                "</div>" + 
                                "<a href='about.html' class='nav-item nav-link'>O nama</a>" + 
                                "<button class='btn btn-outline-danger log-out-btn'>Odjavi se</button>")
    } 
    else {
        $(".register-login").show()
        $(".navbar-nav").html("<a href='index.html' class='nav-item nav-link'>Početna</a>" + 
                                "<a href='menu.html' class='nav-item nav-link'>Recepti</a>" + 
                                "<div class='nav-item dropdown'>" + 
                                    "<a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown'>Jezik</a>" + 
                                    "<div class='dropdown-menu'>" + 
                                        "<a href='blog.html' class='dropdown-item'>Srpski</a>" + 
                                        "<a href='single.html' class='dropdown-item'>Engleski</a>" +
                                    "</div>" +
                                "</div>" + 
                                "<a href='about.html' class='nav-item nav-link'>O nama</a>")
    }

    let currPage = document.location.href.match(/[^\/]+$/)[0]
    $('a[href="' + currPage + '"]').addClass("active")

    

    $(".log-out-btn").click(function() {
        sessionStorage.setItem("loggedUser", null)
        window.location.href = "index.html"
    })

})