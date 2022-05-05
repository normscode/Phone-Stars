const activePage = window.location.pathname;
const navLinks = document.querySelector(".nav-bar").querySelectorAll('a')
.forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})

