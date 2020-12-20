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
  