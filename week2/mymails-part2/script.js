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


let date= new Date().toLocalDateString(fr);
console.log(date)

document.querySelector("#date").textContent = date;

