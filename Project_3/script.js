const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;
const totalImages = imgBtns.length;
let intervalId;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        clearInterval(intervalId); 
        imgId = imgItem.dataset.id;
        slideImage();
        startSlideshow(); 
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    const imgShowcase = document.querySelector('.img-showcase');
    if (imgId > totalImages) {
        imgId = 1;
        imgShowcase.style.transition = 'none';
        imgShowcase.style.transform = `translateX(0)`;
    }
    if (imgId < 1) {
        imgId = totalImages;
        imgShowcase.style.transition = 'none';
        imgShowcase.style.transform = `translateX(${- (totalImages - 1) * displayWidth}px)`;
    }

    // Slide the image
    imgShowcase.style.transition = 'transform 0.5s ease';
    imgShowcase.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

function startSlideshow() {
    intervalId = setInterval(() => {
        imgId++;
        slideImage();
    }, 3000); 
}

startSlideshow();

window.addEventListener('resize', slideImage);
