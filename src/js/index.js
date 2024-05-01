const userForm = document.querySelector("#form");
const userInput = document.querySelector("#system");
const userOther_input = document.querySelector("#lock_bar");

const userValue = document.querySelector("#imp1");
const userAnotherValue = document.querySelector("#imp2");



userForm.addEventListener('click',(event)=>{
  event.preventDefault()

    const  userInputValue = userValue.value
    const userChecked = userAnotherValue.value

    if(userInputValue == " "){
      alert('Vivia')
    }
    else if (userChecked ==" "){
      alert('Vivia')
    }
    else{
      alert('blabla')
    }
})



