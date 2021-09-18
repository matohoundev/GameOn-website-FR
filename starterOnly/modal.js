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
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const generalCondition = document.querySelector("#checkbox1");

// console.log(location1);

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
firstName.addEventListener("change", (e) => {
  checkFirstName(e.target.value)
});  

// verify lastName
lastName.addEventListener("change", (e) => {
  checkLastName(e.target.value)
});

// verify email
email.addEventListener("change", (e) => {
 checkEmail(e.target.value)
});

//verify birthdate


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
quantityTournament.addEventListener("change", (e) => {
  checkQuantityTournament(e.target.value)
});


// no page reloading
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// Validate form
function validate() {

  if(checkFirstName(firstName.value) && checkLastName(lastName.value) && checkEmail(email.value) && checkQuantityTournament(quantityTournament.value && checkRadio() && checkCheckbox()) === true ) {
    console.log("Le formulaire est valide");
  }
  else {
    console.log("Le formulaire est invalide");
  }
}