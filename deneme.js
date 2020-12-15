function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    document.getElementById("clock").innerText = hour + " : " + min; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

function getQuote() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var quote = JSON.parse(this.responseText);
      document.getElementById("quote").innerHTML = quote.quoteText;
      }
    };
    xhttp.open("GET", "https://papillo.herokuapp.com/", true);
    xhttp.send();
}
  
  currentTime(); /* calling currentTime() function to initiate the process */
  getQuote();