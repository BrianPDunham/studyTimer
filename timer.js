const startingMinutes = 20;
//let time = startingMinutes * 60;
let time = 3;

const countdownElement = document.getElementById('countdown');

myInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {

    const minutes = Math.floor(time / 60);

    let seconds = time % 60; 

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = minutes + ":" + seconds;

    if (time == -1) {

        window.alert('Touchdown!');
        
        countdownElement.innerHTML = "0" + ":" + "00";
        clearInterval(myInterval);
    }
    
    time--;
    
}