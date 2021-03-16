
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr.onload = function () {

    if (this.status == 200)
      var users = JSON.parse(this.responseText);


  }


