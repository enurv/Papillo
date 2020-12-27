
const clockElement = document.querySelector(".clock");
let digitalclock = new DigitalClock(clockElement);
digitalclock.start();
getQuote();

document.getElementById("switch-to-pomodoro").addEventListener("click", function() {
    activatePomodoro()
});


