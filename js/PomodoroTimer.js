class PomodoroTimer {
    constructor(startButton, pauseButton, stopButton){
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.stopButton = stopButton;

        this.startButton.addEventListener('click', () => {
            this.toggleClock();
        })     
    
        this.pauseButton.addEventListener('click', () => {
            this.toggleClock();
        })        
    
        this.stopButton.addEventListener('click', () => {
            this.toggleClock(true);
        })

        this.isClockRunning = false;
        this.workSessionDuration = 1500; //25 min 60*25
        this.currentTimeLeftInSession = 1500; //25 min 60*25
        this.breakSessionDuration = 300; //5 min 60*5
    }


    toggleClock(reset) {
        if (reset){
            //stop the timer if reset is true
            if(this.timer){
                clearInterval(this.timer);
                this.currentTimeLeftInSession = 1500;
                this.isClockRunning = false;
            }
        } else { 
            if (this.isClockRunning === true) {
                //pause the timer
                this.isClockRunning = false;
                if(this.timer){
                    clearInterval(this.timer);
                }
            } else {
                //start timer
                this.isClockRunning = true;
                this.timerWorks();
            }
        }
    }
    
    timerWorks() {
        this.timer = setInterval(() => {
            this.currentTimeLeftInSession--;
            this.displayCurrentTimeLeftInSession();
        }, 1000);
    }

    displayCurrentTimeLeftInSession() {
        const pomodoroTimer = document.querySelector('.timer');
        const secondsLeft = this.currentTimeLeftInSession;
        let result = '';
        const seconds = secondsLeft % 60;
        const minutes = parseInt(secondsLeft / 60) % 60;
        let hours = parseInt(secondsLeft / 3600);
        // add leading zeroes if it's less than 10
        function addLeadingZeroes(time) {
            return time < 10 ? `0${time}` : time
        }
        if (hours > 0) result += `${hours}:`
        result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
        pomodoroTimer.innerHTML = result.toString();
    }

}



