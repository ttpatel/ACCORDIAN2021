function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  
    xhr.onload = function () {
  
      if (this.status == 200)
        var users = JSON.parse(this.responseText);
  
      var output = '';
      colSize = 3
      totalRows = Math.ceil(users.length / colSize);
      console.log(users.length, totalRows)
      for (i = 0; i < (totalRows); i++) {
        console.log(i);
        output += '<div class="squares>';
        for (j = i * 3; j < Math.min((i * 3) + colSize, users.length); j++) {
          console.log(" " + j);
      
  
        output += `<div class="row multi-columns-row">
                   <div class="col-sm-6 col-md-4 col-lg-4">
                   <div class="features-item">
                   <h3 class="features-title">
                     TITLE
                     
                   </h3>
                   <p class="features-body">
                        BODY
                   </p>
                   </div>
                   </div>
				           </div>  `
      }
  
    output += '</div><br>';
  }

  
      document.getElementById('Example').innerHTML = output;
    }
    xhr.send();
  }
  loadUsers();