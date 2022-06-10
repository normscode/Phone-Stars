const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ()=> {
    if (window.pageYOffset > 100) {
        toTop.classList.add("activescroll");
    }else{
        toTop.classList.remove("activescroll");
    }
})