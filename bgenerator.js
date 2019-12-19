var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let colors = document.querySelectorAll(".color");
var instagrami=document.getElementById("insta");
var githubi=document.getElementById("git");

console.log(instagrami);

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



colors.forEach(function(elem) {
    elem.addEventListener("click", function() {


        let colorstyle = window.getComputedStyle(elem);
        console.log(colorstyle.backgroundImage);
        body.style.background = colorstyle.backgroundImage ;
        css.textContent = body.style.background + ";";

    });
});


instagrami.addEventListener("click", function(){
  window.open("https://www.instagram.com/masouras_/", "_blank");
});

githubi.addEventListener("click", function(){
  window.open("https://github.com/ThanosMasouras");
  
});
