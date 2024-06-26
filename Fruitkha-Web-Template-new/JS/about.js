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