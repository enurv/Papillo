
const clockElement = document.querySelector(".clock");
const Ptimer = document.querySelector(".pomodoro-timer");
Ptimer.style.display = "none";
let digitalclock = new DigitalClock(clockElement);
digitalclock.start();
getQuote();

function switchBetween(){
    let clock = document.querySelector(".time");
    
    if (clock.style.display === "none") {
        clock.style.display = "block";
        Ptimer.style.display = "none"
    } else {
        clock.style.display = "none";
        Ptimer.style.display = "block"
    }
}

document.getElementById("switch").addEventListener("click", function() {
    switchBetween()
});



const startButton = document.querySelector('#pomodoro-start');
const pauseButton = document.querySelector('#pomodoro-pause');
const stopButton = document.querySelector('#pomodoro-stop');

const timer = new PomodoroTimer(startButton, pauseButton, stopButton);
