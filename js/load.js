
// Wthathsapp
let wathsapp = document.getElementById("wathsapp");
wathsapp.style.cursor = 'pointer';

wathsapp.onclick = function(){
    window.open("https://api.whatsapp.com/send?phone=+393335765279&text=Giocher...");
}

// Mobile-header | onclick
let mobile = document.getElementById("mobilemenu");
let Contatti = document.getElementById("Contatti");
let storia = document.getElementById("storia");
mobile.style.cursor = "pointer";

mobile.onclick = function(){ $('.mobile').css("display", "block");$('.mobile').css("opacity", "80%");}
Contatti.onclick = function(){ window.location = "./contact.html"}
storia.onclick = function(){ window.location = "./storia.html"}


// Close Mobile Modal
let onClose = document.getElementById("mobilexit");
onClose.style.cursor = "pointer";

onClose.onclick = function(){
    $('.mobile').css("opacity", "0%");
}