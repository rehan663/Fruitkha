// Function for dropdowns
function navdropdown() {
    document.querySelector("#selector").addEventListener('mouseenter', dropdowns)
    document.querySelector("#selector").addEventListener('mouseout', close)
    document.querySelector("#dropdowns").addEventListener('mouseover', dropdowns)
    document.querySelector("#dropdowns").addEventListener('mouseout', close)

    function dropdowns() {
        document.querySelector("#dropdowns").style.opacity = 1;
        document.querySelector("#dropdowns").style.visibility = 'visible';
    }
    function close() {
        document.querySelector("#dropdowns").style.opacity = 0;
        document.querySelector("#dropdowns").style.visibility = 'hidden';
    }

    document.querySelector("#news").addEventListener('mouseenter', newsdd)
    document.querySelector("#news").addEventListener('mouseout', newsddclose)
    document.querySelector("#news-dd").addEventListener('mouseover', newsdd)
    document.querySelector("#news-dd").addEventListener('mouseout', newsddclose)

    function newsdd() {
        document.querySelector("#news-dd").style.opacity = 1;
        document.querySelector("#news-dd").style.visibility = 'visible';
    }
    function newsddclose() {
        document.querySelector("#news-dd").style.opacity = 0;
        document.querySelector("#news-dd").style.visibility = 'hidden';
    }
    document.querySelector("#shop").addEventListener('mouseenter', shopdd)
    document.querySelector("#shop").addEventListener('mouseout', shopddclose)
    document.querySelector("#shop-dd").addEventListener('mouseover', shopdd)
    document.querySelector("#shop-dd").addEventListener('mouseout', shopddclose)
    function shopdd() {
        document.querySelector("#shop-dd").style.opacity = 1;
        document.querySelector("#shop-dd").style.visibility = 'visible';
    }
    function shopddclose() {
        document.querySelector("#shop-dd").style.opacity = 0;
        document.querySelector("#shop-dd").style.visibility = 'hidden';
    }
}
navdropdown();

// GSAP code for scrolling 
gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.7,
    height: "13vh",
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "body",
        start: ("top -10%"),
        end: ("top -11%"),
        scrub: 1
    }
})

//Code for responsive navbar
var menu = document.querySelector(".ri-menu-line");
var close = document.querySelector("#close");
var nav = document.querySelector("#nav-menu");
menu.addEventListener('click', (e) => {
    var openNav = nav.style.left = "10%";
    menu.style.opacity = 0;
    var closeIcon = close.style.display = "block"
})

close.addEventListener('click', (e) => {
    nav.style.left = "-100%";
    menu.style.opacity = 1;
    close.style.display = "none"
})


//  Code for Shop page clicker

// function for given instruction from client
var straw = document.querySelectorAll(".identity");
function All(el) {
    // console.log(el);

    if (el == 0) {


        straw.forEach(function (card) {
            if (card.innerHTML !== "All") {
                // console.log(card.parentElement.parentElement);
                card.parentElement.parentElement.style.display = "flex";
            }
        })
    } else if (el == 1) {

        straw.forEach(function (card) {
            card.parentElement.parentElement.style.display = "flex";
            if (card.innerHTML !== "Strawberry") {
                // console.log(card.parentElement.parentElement);
                card.parentElement.parentElement.style.display = "none";
            }
        })
    }else if(el == 2){
        straw.forEach(function (card) {
            card.parentElement.parentElement.style.display = "flex";
            if (card.innerHTML !== "Berry") {
                // console.log(card.parentElement.parentElement);
                card.parentElement.parentElement.style.display = "none";
            }
        })
    }else{
        straw.forEach(function (card) {
            card.parentElement.parentElement.style.display = "flex";
            if (card.innerHTML !== "Lemmon") {
                // console.log(card.parentElement.parentElement);
                card.parentElement.parentElement.style.display = "none";
            }
        })
    }
}



