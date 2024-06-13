const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
    document.body.style.background = `linear-gradient(to left, ${generateRandomColor()}, ${generateRandomColor()})`;
});


function generateRandomColor(){
    const red = (Math.floor(Math.random() * 156) + 100);
    const green = (Math.floor(Math.random() * 156) + 100);
    const blue = (Math.floor(Math.random() * 156) + 100);
    return `rgba(${red},${green},${blue})`;
}