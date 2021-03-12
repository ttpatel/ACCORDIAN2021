
// for(var i=0;i<=100;i++)
// { 
//  document.getElementById('button').addEventListener('click', loadUsers);
 
// }
 function loadUsers() {
     var xhr = new XMLHttpRequest();
     xhr.open('GEt', 'https://jsonplaceholder.typicode.com/posts', true);

     xhr.onload = function () {

         if (this.status == 200)
             var users = JSON.parse(this.responseText);

         var output = '';
         for (var i in users) {

             output +=`
             <div class="accordion-item">
             <h2 class="accordion-header" id="heading${i}">
               
               <button class="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
               <div> 
               ${users[i].userId} &nbsp; ${i}
                <br>

                ${users[i].title}
                <span style="float:right">bc</span>  </div           
               </button>
             </h2>
             <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 ${users[i].body}
               </div>
             </div>
           </div>
           <br>
            `
         }



         document.getElementById('accordionExample').innerHTML = output;
     }
     xhr.send();
 }
 loadUsers();
