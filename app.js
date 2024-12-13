let startTime;

document.getElementById('startButton').onclick = function () {
    startGame();
}

const colors = ["blue", "red", "green", "yellow", "purple", "orange", "pink"];

let startGame = function () {
    document.getElementById('startButton').classList.add('hidden')
    setTimeout(makeShapeVisible, 2000);
}

let makeShapeVisible = function(){
    let shape = document.getElementById('shape')
    let top = Math.random() * 400;
    let left = Math.random() * 700;
    let width = Math.random() * 200 + 50;

    shape.style.top = top + 'px';
    shape.style.left = left + 'px';
    shape.style.width = width + 'px';
    shape.style.height = width + 'px';

    shape.classList.remove('hidden');
    shape.classList.add('visible');

    let color = colors[Math.floor(Math.random() * colors.length)];
    shape.style.backgroundColor = color; 


    startTime = new Date().getTime()
}

document.getElementById('shape').onclick = function(){
    let finishTime = new Date().getTime();

    document.getElementById('shape').classList.remove('visible')
    document.getElementById('shape').classList.add('hidden')

    let reactionTime = (finishTime - startTime) / 1000
    document.getElementById('reactionTime').innerHTML = reactionTime + " seconds"
    setTimeout(makeShapeVisible, Math.random() * 2000)
}
