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
  console.log(firstName.value)
  input = firstName.value;
  if (input === "") {
    console.log("vide");
  }
  else if(input.length < 2) {
    console.log("minimums 2 caractère");
  }
  else {
    console.log("c'est parfait");
  }
});

// verify lastName
lastName.addEventListener("change", (e) => {
  console.log(lastName.value)
  input = lastName.value;
  if (input === "") {
    console.log("vide");
  }
  else if(input.length < 2) {
    console.log("minimums 2 caractère");
  }
  else {
    console.log("c'est parfait");
  }
});

// verify email
email.addEventListener("change", (e) => {
  console.log(email.value)
  input = email.value;
  if (input === "") {
    console.log("vide");
  }
  else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    console.log("l'email n'est pas valide");
  }
  else {
    console.log("c'est parfait");
  }
});

// prohibited operators !! problème quand on copie les operator ils peuvent apparaitre
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
  console.log(quantityTournament.value)
  input = quantityTournament.value;

  if (input === "") {
    console.log("vide");
  }
  else {
    console.log("c'est parfait");
  }
});


// no page reloading
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// Validate form
function validate() {
  // verify radio is checked
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
    console.log("Il faut choisir une ville")
  } else {
    console.log("c'est parfait");
  }
    // verify checkbox is checked
  if(!generalCondition.checked) {
    console.log("Les conditions générales doivent être acceptées");
  } else {
    console.log("c'est parfait");
  }
}