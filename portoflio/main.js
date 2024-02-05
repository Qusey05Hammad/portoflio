const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const nav = document.getElementById('nav');

btnOpen.addEventListener('click' , ()=>{
    nav.style.display = "block"
    btnOpen.style.display = "none"
    btnClose.style.display = "block"
})

btnClose.addEventListener('click' , ()=>{
    nav.style.display = "none"
    btnOpen.style.display = "block"
    btnClose.style.display = "none"
})