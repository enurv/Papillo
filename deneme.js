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
    console.log(this.element.querySelector(".time"));
    this.element.querySelector(".time").innerHTML = formattedTime;
  }

  start() {
    setInterval(()=>{
      this.update();
    }, 500);
  }
}
const clockElement = document.querySelector(".clock");
let digitalclock = new DigitalClock(clockElement);
digitalclock.start();

//////////////////////////////////
function getQuote() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var quote = JSON.parse(this.responseText);
      document.getElementById("quote").innerHTML = quote.quoteText;
      }
    };
    xhttp.open("GET", "https://papillo.herokuapp.com/", true);
    xhttp.send();
}
  
getQuote();