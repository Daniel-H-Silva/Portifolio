document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 75,
                behavior: 'smooth'
            });
        }
    });
});
function checkVisibility() {
    const elements = document.querySelectorAll('section, .project');
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        if (elementTop < windowHeight - 100 && elementBottom > 100) {
            el.classList.add('visible');
        } 
        else {
            el.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', checkVisibility);
checkVisibility();