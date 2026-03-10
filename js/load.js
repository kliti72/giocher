
    $("body").load( "ajax/test.html", function() {
        $(".bg-load").css("display","none");

});



let test = document.getElementById("test");
test.style.cursor = 'pointer';

test.onclick = function(){
    window.open("https://api.whatsapp.com/send?phone=+393335765279&text=Giocher...");
}



let mobile = document.getElementById("mobilemenu");


mobile.style.cursor = "pointer";


mobile.onclick = function(){
    $('.mobile').css("display", "block");
    $('.mobile').css("opacity", "80%");
    console.log("Cliccato");
}


let exit = document.getElementById("mobilexit");

exit.style.cursor = "pointer";

exit.onclick = function(){
    $('.mobile').css("opacity", "0%");

}