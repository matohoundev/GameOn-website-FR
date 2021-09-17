function checkFirstName(input) {
    if (input === "") {
        console.log("vide");
      }
      else if(input.length < 2) {
        console.log("minimums 2 caractère");
      }
      else {
        console.log("c'est parfait");
      }
}

function checkLastName(input) {
    
  if (input === "") {
    console.log("vide");
  }
  else if(input.length < 2) {
    console.log("minimums 2 caractère");
  }
  else {
    console.log("c'est parfait");
  }
}

function checkEmail(input) {
    if (input === "") {
        console.log("vide");
      }
      else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
        console.log("l'email n'est pas valide");
      }
      else {
        console.log("c'est parfait");
      }
}

function checkQuantityTournament(input) {
    if (input === "") {
        console.log("vide");
      }
      else {
        console.log("c'est parfait");
      }
}

function checkRadio() {
    if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
        console.log("Il faut choisir une ville")
      } else {
        console.log("c'est parfait");
      }
}

function checkCheckbox() {
    if(!generalCondition.checked) {
        console.log("Les conditions générales doivent être acceptées");
      } else {
        console.log("c'est parfait");
      }
}