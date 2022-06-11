const activePage = window.location.pathname;
const navLinks = document.querySelector(".nav-bar").querySelectorAll('a')
.forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})

// PhoneBrands Active Onclick Function
var elements = document.querySelector(".phonebrands").querySelectorAll('li')

var myFunction = function(e) {
    if (document.querySelector('.active-brand') !== null) {
      document.querySelector('.active-brand').classList.remove('active-brand');
    }
    e.target.className = "active-brand";
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

var images =['img/promo-img/promo1.png', 'img/promo-img/promo2.png'];
var i=0;
function slideShow() {
    document.getElementById("image").src=images[i];

    if(i < images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("slideShow()", 3000);
}
window.onload = slideShow;