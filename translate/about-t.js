let language = sessionStorage.getItem("language")


$("#contact-us").html(language == "serbian" ?  "Kontaktiraj nas" : "Contact us")
$("#contact-info").html(language == "serbian" ?  "Kontakt informacije" : "Contact info")
$("#contact-address").html(language == "serbian" ?  "Adresa" : "Address")
$("#contact-address-val").html(language == "serbian" ?  "Bulevar Kralja Aleksandra 73, Beograd, Srbija" : "Bulevar Kralja Aleksandra 73, Belgrade, Serbia")
$("#contact-phone").html(language == "serbian" ?  "Kontakt telefon" : "Contact number")
$("#contact-follow").html(language == "serbian" ?  "Zaprati nas" : "Follow us")
