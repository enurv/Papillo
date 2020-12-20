class DigitalClock {
    constructor(element){
      this.element = element;
    }
  
    getTime(){
      const time = new Date();
      return {
        hour: time.getHours(),
        minute: time.getMinutes()
      };
    }
  
    update() {
      let time = this.getTime();
      let hour = time.hour.toString().padStart(2, '0');
      let minute = time.minute.toString().padStart(2, '0');
  
      let formattedTime = `${hour}:${minute}`;

      this.element.querySelector(".time").innerHTML = formattedTime;
    }
  
    start() {
      setInterval(()=>{
        this.update();
      }, 500);
    }
  }