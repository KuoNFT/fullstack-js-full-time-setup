// Write your code here

// On va : créer un eventListener click sur le bouton #fetch-btn.
//A l'intérieur de ce fetch on va fetch auprès de l'API https://backend-omega-seven.vercel.app/api/getjoke
//puis on assigne les valeurs questions et punchline 
//aux balises result-question et result-punchine en modifiant leur textContent
//

const fetchBtn = document.getElementById("fetch-btn");

fetchBtn.addEventListener("click", () => {
  fetch("https://backend-omega-seven.vercel.app/api/getjoke")
  .then((response)=> response.json())
  .then((data)=> {
    const resultQuestion = data.question
    console.log(resultQuestion)
    const resultPunchline = data.punchline
    document.querySelector('#result-question').textContent = resultQuestion
    document.querySelector('#result-punchline').textContent = resultPunchline

  })
});

