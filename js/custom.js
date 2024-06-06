//function myFunction() {
//    var x = document.getElementById("myLinks");          
//    if (x.style.display === "block") {
//        x.style.display = "none";
//    } else {
//        x.style.display = "block";
//    }
//}        
function myFunction1() {
    var element = document.getElementById("myLinks");
    element.classList.toggle("Active");

    var element = document.getElementById("IconMenu");
    element.classList.toggle("Active");
}


function reveal() {
    var reveals = document.querySelectorAll(".AbtSctnHldr, .SctnProjects, .ExpInfo, .PrjctsSctn, .ProdctSctn, .AboutDtls");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("Active");
        } else {
            reveals[i].classList.remove("Active");
        }
    }
}
window.addEventListener("scroll", reveal);

//window.onscroll = function () { onscroll_function() };

//var mybutton = document.getElementById("ScrollBtn");
//var header = document.getElementById("StickyHeader");
//var sticky = header.offsetTop;

//function onscroll_function() {
//    myFunction();
//    scrollFunction();
//    topFunction();

//function myFunction() {
//    if (window.pageYOffset > sticky) {
//        header.classList.add("Sticky");
//    } else {
//        header.classList.remove("Sticky");
//    }
//}

//function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//        mybutton.style.display = "block";
//    } else {
//        mybutton.style.display = "none";
//    }
//}
//function topFunction() {
//    document.body.scrollTop = 0;
//    document.documentElement.scrollTop = 0;
//}


