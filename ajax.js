
function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GEt', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr.onload = function () {

    if (this.status == 200)
      var users = JSON.parse(this.responseText);

    var output = '';

    colSize = 3
    totalRows = Math.ceil(users.length / colSize);
    console.log(users.length, totalRows)
    for (i = 0; i < (totalRows); i++) {
      console.log(i);
      output += '<div class="card-group">';
      for (j = i * 3; j < Math.min((i * 3) + colSize, users.length); j++) {
        console.log(" " + j);

        output +=
      `<div class="card "  id="" style= >
         <div class="card-body" id="date">
         <h6 class="card-userid">
          0${users[j].id}
          </h6>
          <div class="card-title">
         <a href="blogdetails.html?id=${users[j].id}" id="titleid"> ${users[j].title}
         </a>
        
          </div>
         
       </div>
       </div>
      `;
      }
      output += '</div><br>';
    }


    // console.log(output);
    document.getElementById('cardExample').innerHTML = output;
  }
  xhr.send();
}
loadUsers();
