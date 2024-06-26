
// Code for sliders
var flag = 2;
function controller(x){
    flag = flag + x;
    slideShow(flag);
}
function slideShow(num){
    var slide = document.getElementsByClassName('slide');
    for(let y of slide){
        y.style.display = "none";
    }
    if(num == slide.length){
        flag = 0;
        num  = 0;
    }
    if(num < 0){
        flag = slide.length - 1;
        num  = slide.length - 1;
    }
    slide[num].style.display = "block";
}
slideShow(flag);


var slidecount = 0;
function sliderTop(){
    var slider = document.querySelectorAll('#page-1 .slide');
    for(let i = 0; i < slider.length; i++){
        slider[i].style.display = "none";
    }
    slidecount++;
    if(slidecount > slider.length){
        slidecount = 1
    }

    slider[slidecount - 1].style.display = "block";
    setTimeout(sliderTop , 4000);
}
sliderTop();



// Gsap code for three product
// gsap.from("#three-product .shipping", {
//     scale : 0,
//     opacity : 0,
//     scrollTrigger : {
//         trigger : "#three-product",
//         scroller : "#main",
//         // markers:true,
//         start : ("top 60%"),
//         end : ("top 40%"),
//         scrub : 1
//     }
// })

//Gsap code for our-product text appearing
// var tl = gsap.timeline();
// tl.from("#our-product h1 , #our-product p", {
//     scale : 0,
//     opacity : 0,
//     stagger: 1,
//     scrollTrigger : {
//         trigger : "#three-product",
//         scroller : "#main",
//         // markers: true,
//         start : ("top 20%"),
//         end : ("top 5%"),
//         scrub : 1
//     }
// });


// Gsap code for deal of month
// var tl1 = gsap.timeline();
// tl1.from("#deal #deal-img , #deal #deal-text h1 , #deal #deal-text h5 , #deal #deal-text p , #deal #deal-text #deal-box , #deal #deal-text button", {
//     scale : 0,
//     opacity : 0,
//     stagger: 1,
//     scrollTrigger : {
//         trigger : "#page-3 #deal",
//         scroller : "#main",
//         // markers: true,
//         start : ("top 40%"),
//         end : ("top 10%"),
//         scrub : 1
//     }
// });

// Gsap code for fruitkha block
// var tl2 = gsap.timeline();
// tl2.from("#page-4 #video1 #vid , #page-4 #fruitkha #p1 , #page-4 #video1 #fruitkha h1 , #page-4 #video1 #fruitkha #big", {
//     scale : 0,
//     opacity : 0,
//     stagger: 1,
//     scrollTrigger : {
//         trigger : "#page-4 #video1",
//         scroller : "#main",
//         // markers: true,
//         start : ("top 50%"),
//         end : ("top 20%"),
//         scrub : 1
//     }
// });


// Gsap code for des sale
// var tl3 = gsap.timeline();
// tl3.from("#page-4 #decsale h1 , #page-4 #decsale p , #page-4 #decsale btn5", {
//     scale : 0,
//     opacity : 0,
//     stagger: 1,
//     scrollTrigger : {
//         trigger : "#page-4 #decsale",
//         scroller : "#main",
//         // markers: true,
//         start : ("top 60%"),
//         end : ("top 30%"),
//         scrub : 1
//     }
// });


//Gsap code for news card appearing 
// gsap.from("#page-5 #card .news-card" , {
//     scale: 0,
//     opacity : 0,
//     scrollTrigger: {
//         trigger: "#card",
//         scroller: "#main",
//         start:("top 50%"),
//         end:("top 30%"),
//         // markers: true,
//         scrub:2,
//     }
// })


//Gsap code for logo appearing 
// gsap.from("#page-5 #logo img" , {
//     scale: 0,
//     opacity : 0,
//     scrollTrigger: {
//         trigger: "#logo",
//         scroller: "#main",
//         start:("top 50%"),
//         end:("top 30%"),
//         // markers: true,
//         scrub:1,
//     }
// })



//Code for Information block exchanger 
var counter = 0;
function exchanger(){
    var info = document.querySelectorAll('#page-4 .employee .info');
    for(let i = 0 ; i < info.length ; i++){
        info[i].style.display = "none";
    }
    counter++;
    
    if(counter > info.length){
        counter = 1;
    }
    info[counter - 1].style.display = "block";
    gsap.from("#page-4 .employee .info" , {
        x : "300px",
        duration : 0.5
    })

    setTimeout(exchanger , 4000);
}
exchanger();

//Code for Information block exchanger 
var counter1 = 0;
function exchanger1(){
    var info1 = document.querySelectorAll('#page-4 .info1');
    for(let i = 0 ; i < info1.length ; i++){
        info1[i].style.display = "none";
    }
    counter1++;
    
    if(counter1 > info1.length){
        counter1 = 1;
    }
    info1[counter1 - 1].style.display = "block";

    setTimeout(exchanger1 , 4000);
}
exchanger1();