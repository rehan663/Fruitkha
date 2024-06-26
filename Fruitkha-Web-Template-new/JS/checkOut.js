//Code for form dropdown
var leftFormHead = document.querySelector(".leftFormHead")
var leftForm = document.querySelector(".leftForm");
var none = 1;
leftFormHead.addEventListener('click' , () =>{
    if(none == 1){
        leftForm.style.display = "block"
        // console.log("count");
        none = 0;
        // console.log(none);
    }else {
        leftForm.style.display = "none"
        none = 1;
    }
})

//Code for shippingAddress dropdown
var shippingAddress = document.querySelector("#shippingAddress")
var shippingAddressPara = document.querySelector("#shippingAddressPara");
var none = 1;
shippingAddress.addEventListener('click' , () =>{
    if(none == 1){
        shippingAddressPara.style.display = "block"
        // console.log("count");
        none = 0;
        // console.log(none);
    }else {
        shippingAddressPara.style.display = "none"
        none = 1;
    }
})

//Code for cartDetails dropdown
var cartDetail = document.querySelector("#cartDetail")
var cartDetailsPara = document.querySelector("#cartDetailsPara");
var none = 1;
cartDetail.addEventListener('click' , () =>{
    if(none == 1){
        cartDetailsPara.style.display = "block"
        // console.log("count");
        none = 0;
        // console.log(none);
    }else {
        cartDetailsPara.style.display = "none"
        none = 1;
    }
})


