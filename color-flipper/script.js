const button = document.getElementById('btn');
const code = document.querySelector('code');

button.addEventListener('click', () => {
    const style = `linear-gradient(to left, ${generateRandomColor()}, ${generateRandomColor()})`
    document.body.style.background = style;
    code.innerHTML = style;
});


function generateRandomColor(){
    const red = (Math.floor(Math.random() * 156) + 100);
    const green = (Math.floor(Math.random() * 156) + 100);
    const blue = (Math.floor(Math.random() * 156) + 100);
    return `rgba(${red},${green},${blue})`;
}