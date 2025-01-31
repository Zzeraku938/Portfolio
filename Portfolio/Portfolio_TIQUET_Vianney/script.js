// Effet sur la vidéo
document.addEventListener('scroll', function () {
    const video = document.getElementById('presentationVideo');
    const bounding = video.getBoundingClientRect();

    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
        // L'élément est visible
        video.classList.remove('video-scrolled');
    } else {
        // L'élément est en dehors de la vue
        video.classList.add('video-scrolled');
    }
});

// Effet sur les textes tapés
document.addEventListener('DOMContentLoaded', function() {
    const typedElements = document.querySelectorAll('.typed');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    });

    typedElements.forEach(element => {
        observer.observe(element);
    });
});