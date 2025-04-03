const nav = document.querySelector('.sticky-nav');
const topOfNav = nav.offsetTop;

function fixedNav() {
 if (window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fix-nav');
 }else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fix-nav');
 }
 console.log(window.scrollY);
}

window.addEventListener('scroll', fixedNav);