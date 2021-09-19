function isEmpty(input) {
  if (input === "") {
    return false
  }
}

function minTwoChar(input) {
  if (input.length < 2) {
    return false
    }
}

function checkFirstName(input) {
    if (minTwoChar(input) === false) {
      firstNameError.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour ce champ');
      firstNameError.setAttribute('data-error-visible', 'true');
      } else {
        firstNameError.setAttribute('data-error-visible', 'false');
        return true;
      }
}

function checkLastName(input) {
  if (minTwoChar(input) === false) {
    lastNameError.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour ce champ');
    lastNameError.setAttribute('data-error-visible', 'true');
    } else {
      lastNameError.setAttribute('data-error-visible', 'false');
      return true;
    }
}

function checkEmail(input) {
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
      emailError.setAttribute('data-error', 'l\'email n\'est pas valide');
      emailError.setAttribute('data-error-visible', 'true');
      }
      else {
        emailError.setAttribute('data-error-visible', 'false');
        return true;
      }
}

function checkBirthdate(input) {
  if(isEmpty(input) === false) {
    birthdateError.setAttribute('data-error', 'Vous devez entrer une date de naissance valide.');
    birthdateError.setAttribute('data-error-visible', 'true');
  } else {
    birthdateError.setAttribute('data-error-visible', 'false');
    return true;
  }
}

function checkQuantityTournament(input) {
    if (isEmpty(input) === false) {
      quantityTournamentError.setAttribute('data-error', 'Hey ! N\'oublie pas d\'inscrire ton nombre de participation');
      quantityTournamentError.setAttribute('data-error-visible', 'true');
      } else {
        quantityTournamentError.setAttribute('data-error-visible', 'false');
        return true;
      }
}

function checkRadio() {

      for (let i = 0; i < allRadio.length; i++) {
        if(!allRadio[i].checked) {
          cities.setAttribute('data-error', 'Vous devez choisir une ville.');
          cities.setAttribute('data-error-visible', 'true');
        } else {
        cities.setAttribute('data-error-visible', 'false');
        return true;
      }
    }
}

function checkCheckbox() {
    if(!generalCondition.checked) {
      generalConditionError.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
      generalConditionError.setAttribute('data-error-visible', 'true');
      } else {
        generalConditionError.setAttribute('data-error-visible', 'false');
        return true;
      }
}