
function color() {
    let hex = '#';
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomHexColor = hex + hexColor; 
    console.log(randomHexColor)
    return randomHexColor;
}


let intervals;
let StartChangeColor = document.querySelector("#Start");
StartChangeColor.addEventListener('click', (e) => {
    
    if(!intervals){
        let StartChanging = () => {
            document.body.style.backgroundColor = color();
        }
        intervals = setInterval(StartChanging, 1000)
    }
}) 

let StopChangeColor = document.querySelector("#Stop");
StopChangeColor.addEventListener('click', (e) => {
    let StopChanging = () => {
       document.body.style.backgroundColor = color();
    }
    clearInterval(intervals)
    intervals = null;
}) 
