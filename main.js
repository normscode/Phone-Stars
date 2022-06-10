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