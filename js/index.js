// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.querySelector('#main')
const divFive = document.querySelector('#five')
const inputField = document.querySelector('#input-field')

main.addEventListener('click', (e) =>{
  console.log(e.target.innerText)
})
divFive.addEventListener('click', (e) =>{
  console.log(e.target.innerText)
})
inputField.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      const newText = e.target.value
      divFive.innerHTML += `
      <p>${newText}</p>
      `
    }
})
//simple but I finally figured out the enter key for eventlisteners
