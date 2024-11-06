// script.js
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});



const images = document.querySelectorAll('.gallery img');
let index = 0;

function updateGallery() {
    images.forEach((img, i) => {
        const position = (i - index + images.length) % images.length;

        
        img.style.left = `${position * 100}px`; 

        img.classList.remove('center', 'side', 'first', 'last');

        if (position === 3) {
            img.classList.add('center');  
        } else if (position === 0 || position === 6) {
            img.classList.add('first', 'last'); 
        } else if (position === 2 || position === 4) {
            img.classList.add('side'); 
        }
    });
}

function startSlider() {
    setInterval(() => {
        index = (index + 1) % images.length;
        updateGallery(); 
    }, 3000);  
}


startSlider();
updateGallery();  
