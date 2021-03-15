
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
      `<div class="card"  id="" style= >
         <div class="card-body" id="date">
         <h6 class="card-userid">
          0${users[i].userId} &emsp; &emsp;  &emsp;   &emsp;  &emsp;  &emsp;<span id="ids"> ID-${i}</span>
          </h6>
          <div class="card-title">
         <span id="titleid"> TITLE<br></span>
          ${users[i].title}
          </div>
          <div class="card-text">
          <span id="bodyid">Body<br></span>
          ${users[i].body}<br>
          <br>
          <span id="dateid">Monday,15 March</span>
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
// `<span class="card-group" id="" style="" >
// <h2 class="card-header" id="heading${i}">
//     <div id ="usersid ">
//       0${users[i].userId}
//     </div>
//     <br>
//     <div id="tit">
//       <strong id="big">TITLE-</strong>${users[i].title}
//     </div>   
//     <div class="card-body" id="date">
//        <strong> BODY-</strong>${users[i].body}
//     </div>
//   </h2>     
// </span>
// <br>
// `