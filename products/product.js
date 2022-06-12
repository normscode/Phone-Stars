let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('activephoto')

for (var i=0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover', function(){
        if (activeImages.length > 0){
            activeImages[0].classList.remove('activephoto')
        }
        this.classList.add('activephoto')
        document.getElementById('featured').src = this.src
    })
}

let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180;
    
})

buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180;

})

let btn = document.querySelector('.mainBtn');
let mbtn = document.querySelector('.minusBtn');
let pbtn = document.querySelector('.plusBtn');



mbtn.addEventListener("click", ()=>{
    if(btn.innerHTML != 1){
        btn.innerHTML = btn.innerHTML - 1;
    }
})
pbtn.addEventListener("click", ()=>{
    btn.innerHTML = +(btn.innerHTML) + +1;
})


var links = document.querySelectorAll(".wrapper-btn-quantity div");

links.forEach(div =>{
    div.addEventListener('click',()=>{
        resetLinks();
        div.classList.add('active-color');
    })
})

function resetLinks(){
    links.forEach(div =>{
        div.classList.remove("active-color");
    })
}

const addtocart = document.getElementsByClassName('addToCart');
var cartquantity = 0;

addtocart[0].addEventListener('click', ()=>{
    cartquantity +=1;
    alert("Added to Cart!");
})

// const backbtn = document.getElementsByClassName('backbutton').querySelectorAll('i');

// backbtn.addEventListener('click', ()=>{
//     history.back();
// })