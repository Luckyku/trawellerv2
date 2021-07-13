window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})

//navtogle
const menutoogle = document.querySelector('.menutoogle input');
const nav = document.querySelector('.navbar .nav-link');
menutoogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
var docWidth = document.documentElement.offsetWidth;

console.log('list:');
[].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
        if (el.offsetWidth > docWidth) {
        console.log(el);
        }
    }
);