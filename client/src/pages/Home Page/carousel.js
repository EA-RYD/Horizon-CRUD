/* brains of carousel */

/*
nextButton.addEventListener('click', () => {
    track.style.transform = `translateX(-${carouselWidth}px)`;
});

*/
//potential issue is on ends of carousel it goes backwards and animation is not smooth
//doing it with i is so we can change width and these functions should be fine
let i = 0; //current set of slides
const nextTransform = () => {
    const track = document.querySelector('.track');
    const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    switch(i) {
        case 0:
            i++;
            track.style.transform = `translateX(-${carouselWidth}px)`;
            break;
        case 1:
            i++;
            track.style.transform = `translateX(-${carouselWidth*2}px)`;
            break;
        case 2:
            i=0;
            track.style.transform = `translateX(-${0}px)`; 
            break;
        default:
            break;
    }
}

const prevTransform = () => {
    const track = document.querySelector('.track');
    const carouselWidth = document.querySelector('.carousel-container').offsetWidth; 
    switch(i) {
        case 0:
            i=2;
            track.style.transform = `translateX(-${carouselWidth*2}px)`;
            break;
        case 1:
            i--;
            track.style.transform = `translateX(-${0}px)`;
            break;
        case 2:
            i--;
            track.style.transform = `translateX(-${carouselWidth}px)`; 
            break;
        default:
            break;
    }
}


export  {nextTransform,prevTransform};