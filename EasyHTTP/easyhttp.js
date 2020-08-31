function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url) {
  this.http.open('get', url, true);

  this.http.onload = function(){}

  this.http.send();
}

// Make an HTTP POST Request


// Make an HTTP PUT Request


// Make an HTTP DELETE Request 