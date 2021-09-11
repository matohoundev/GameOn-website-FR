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
const formData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const quantityTournament = document.querySelector("#quantity");

// console.log(firstName);

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

quantityTournament.addEventListener("input", (e) => {
  e = e.replace(/[e\+\-]/gi, "");
});


// Validate form
function validate(e) {
  e.preventdefault();
}