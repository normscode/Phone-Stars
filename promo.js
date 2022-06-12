// var images =['img/promo-img/promo1.png', 'img/promo-img/promo2.png'];
// var i=0;
// function slideShow() {
//     document.getElementById("image").src=images[i];

//     if(i < images.length-1){
//         i++;
//     }else{
//         i=0;
//     }
//     setTimeout("slideShow()", 3000);
// }
// window.onload = slideShow;

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 2){
        counter = 1;
    }
}, 5000);


const loginBtn = document.getElementsByClassName('loginbtn');
const registerBtn = document.getElementsByClassName('registerbtn');
loginBtn[0].addEventListener('click', () =>{
    alert("Login Successfully!");
})

registerBtn[0].addEventListener('click', ()=>{
    alert("Email has been sent!")
})
