function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const btnModalClose = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");

//DOM Elements for form 
const form = document.querySelector("form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector('#birthdate');
const quantityTournament = document.querySelector("#quantity");
const allRadio = document.querySelectorAll('input[name="location"]');
const generalCondition = document.querySelector("#checkbox1");

//DOM Elements for form error
const firstNameError = document.querySelector('.first');
const lastNameError = document.querySelector(".last");
const emailError = document.querySelector(".email");
const birthdateError = document.querySelector('.birthdate');
const quantityTournamentError = document.querySelector(".quantity");
const cities = document.querySelector(".cities");
const generalConditionError = document.querySelector(".checkbox");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
btnModalClose.addEventListener('click', closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// verify firstName
firstName.addEventListener("blur", (e) => {
  checkFirstName(e.target.value)
});  

// verify lastName
lastName.addEventListener("blur", (e) => {
  checkLastName(e.target.value)
});

// verify email
email.addEventListener("blur", (e) => {
 checkEmail(e.target.value)
});

//verify birthdate
birthdate.addEventListener("blur", (e) => {
  console.log(e)
  checkBirthdate(e.target.value)
})

//block operator in input quantityTournament
quantityTournament.addEventListener("keydown", function(e) {
  const invalidChars = [
  "-",
  "+",
  "e",
];

  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

// verify quantity tournament 
quantityTournament.addEventListener("blur", (e) => {
  checkQuantityTournament(e.target.value)
});


// no page reloading
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// Validate form
function validate() {

  if(checkFirstName(firstName.value) && checkLastName(lastName.value) && checkEmail(email.value) && checkBirthdate(birthdate.value) && checkQuantityTournament(quantityTournament.value) && checkRadio() && checkCheckbox() === true ) {
    console.log("Le formulaire est valide");
  }
  else {
    console.log("Le formulaire est invalide");
  }
}