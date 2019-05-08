//This is the client application
//hold the data and requests the calls to the server (Clock)

//MUST be done in a websocket

"use strict";

(() => {
  window.ServerController = {
    init: () => {

    }
  }

  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        window.location.assign("https://www.w3schools.com");
      }
    };
    xhttp.open("GET", "demo_get.asp", true);
    xhttp.send();
  }
}
