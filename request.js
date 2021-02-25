const get = (url) => {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var response = JSON.parse(this.responseText);
          resolve(response);
        }      
      };
      
      request.open("GET", url);
      request.send();
    });
  }