const container = document.querySelector('.carl-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

rightArrow.addEventListener('click', () => {
    console.log("working");
    container.scroll({
        left: 100,
        behavior: "smooth"
    });
})