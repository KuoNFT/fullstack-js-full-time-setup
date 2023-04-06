document.querySelector('#newGame').addEventListener('click', function(){
    fetch('http://localhost:3000/games/new')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i<6; i++){
            console.log(i)
            document.querySelector('#game-board').innerHTML += `<div class ='letter-box'>B`
            for(let j=0; j < data.wordLength; j++){
                document.querySelectorAll('.letter-row')[i].innerHTML += `<div class='letter-box'>L</div>`
            }
            document.querySelector('#game-board').innerHTML += '</div>'
        }
        document.querySelector('#gameId').textContent= data.gameId;
    })
} )