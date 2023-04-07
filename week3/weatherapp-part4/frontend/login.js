// Insert your code here
let nameValue = document.querySelector('#registerName').value
let emailValue  = document.querySelector('#registerEmail').value
let passwordValue = document.querySelector('#registerPassword').value

document.querySelector('#register').addEventListener('click', function (){
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers : {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            password: passwordValue,

        })
    })
    .then((response) => response.json())
    .then((data)=> {
        if(data.result) {
            window.location.assign('index.html')
        }
    })
})

document.querySelector('#connection').addEventListener('click', function (){
    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers : {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
        })
    })
    .then((response) => response.json())
    .then((data)=> {
        if(data.result) {
            window.location.assign('index.html')
        }
    })
})
