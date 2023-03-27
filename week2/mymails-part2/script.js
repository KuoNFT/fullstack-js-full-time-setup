// Insert your code here
document.querySelector('#msg-container').innerHTML += `
        <div class="row">
          <img class="avatar" src="images/avatar-1.jpg" />
          <div class="text-container">
            <h6>Valentin Lemaitre</h6>
            <p>
             Bonjour j'apprends à programmer
            </p>
          </div>
          <span class="delete">✖</span>
        </div> `  

        
const messagesCount = document.querySelectorAll('p').length
document.querySelector('#count').textContent = messagesCount



let day = new Date().getDate();

//if(day < 10) {
    //day += "0"
    //return day
//} else {
   // return day
 //}

let month = new Date().getMonth();
let year = new Date().getFullYear()

let date= `${year} ${month} ${day}`


document.querySelector("#date").textContent = date;

