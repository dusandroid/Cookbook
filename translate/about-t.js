$(document).ready(function() {
    let language = sessionStorage.getItem("language")
    if (language == null) {
        language = "serbian"
        sessionStorage.setItem("language", language)
    }

    $("#h2-about").html(language == "serbian" ?  "O nama" : "About Us")
    $("#breadcrumbs-home").html(language == "serbian" ?  "Početna" : "Home")
    $("#breadcrumbs-about").html(language == "serbian" ?  "O nama" : "About")

    $("#about-p").html(language == "serbian" ?  "O nama" : "About Us")
    $("#about-h2").html(language == "serbian" ?  "Mi smo Receptijana" : "We are Receptijana")
    $("#about-p1").html(language == "serbian" ?  "Receptijana je platforma za deljenje i preuzimanje recepata nastala 2021. kao domaći zadatak iz predmeta Veb dizajn na Elektrotehničkom fakultetu Univerziteta u Beogradu." : "Receptijana is a platform for sharing and downloading recipes, created in 2021 as a homework assignment in the subject of Web Design at the Faculty of Electrical Engineering, University of Belgrade.")
    $("#about-p2").html(language == "serbian" ?  "Ishrana je jako bitan aspekt našeg zdravlja i treba joj posvetiti posebnu pažnju, zato ohrabrujemo posetioce da se registruju i postanu članovi Receptijane i podele sa svetom svoje zanimljive ideje za spremanje hrane." : "Nutrition is a very important aspect of our health and special attention should be paid to it, so we encourage visitors to register and become members of the Reception and share with the world their interesting ideas for preparing food.")
    $("#about-p3").html(language == "serbian" ?  "Svojim jednostavnim ali unikatnim dizajnom naš veb sajt pruža korisnicima mogućnost da na lak način koriste sve funkcionalnosti (logovanje, registracija, pretraga...)" : "With its simple but unique design, our website gives users the opportunity to easily use all the functionalities (login, registration, search ...)")

    $("#awards-h2").html(language == "serbian" ?  "Osvojene nagrade" : "Awards won")
    $("#awards-p1").html(language == "serbian" ?  "Prestižna nagrada za najbolji sajt godine na temu 'Kuvanje i recepti' pripala je našem veb sajtu" : "The prestigious award for the best site of the year on the topic 'Cooking and recipes' went to our website")
    $("#awards-p2").html(language == "serbian" ?  "Nakon završenog glasanja sudija i publike, osvojili smo sertifikat za najbolji UI/UX dizajn meseca" : "After the voting of the judges and the audience, we won the certificate for the best UI / UX design of the month")
    $("#awards-p3").html(language == "serbian" ?  "Naša druga za redom nagrada za veb sajt godine 2021. u kategoriji 'Hrana i piće'" : "Our second consecutive award for the website of the year 2021 in the category 'Food and drink'")
    $(".awards-a").html(language == "serbian" ?  "Zvaničan sajt" : "Official site")



    $("#contact-us").html(language == "serbian" ?  "Kontaktiraj nas" : "Contact us")
    $("#contact-info").html(language == "serbian" ?  "Kontakt informacije" : "Contact info")
    $("#contact-address").html(language == "serbian" ?  "Adresa" : "Address")
    $("#contact-address-val").html(language == "serbian" ?  "Bulevar Kralja Aleksandra 73, Beograd, Srbija" : "Bulevar Kralja Aleksandra 73, Belgrade, Serbia")
    $("#contact-phone").html(language == "serbian" ?  "Kontakt telefon" : "Contact number")
    $("#contact-follow").html(language == "serbian" ?  "Zaprati nas" : "Follow us")
})