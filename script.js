const parrallax = document.getElementById('parallax');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.Hidden');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    console.log(offset)
    parrallax.style.backgroundPositionY = offset*0.7+'px'
})

