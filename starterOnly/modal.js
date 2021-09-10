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



// Validate form
function validate(e) {
  e.preventdefault();
}