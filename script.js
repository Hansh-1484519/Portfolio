
var fields = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.nameInput = document.getElementById("name");
  fields.email = document.getElementById("email");
  fields.subject = document.getElementById("subject");
  fields.message = document.getElementById("message");
})

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined') return false;
  return (value.length > 0);
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}


function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
    field.style.borderColor = "red";
  } else {
    field.style.borderColor = "lightgrey";
    field.className = '';
  }

  return isFieldValid;
}


function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.nameInput, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.subject, isNotEmpty);
  valid &= fieldValidation(fields.message, isNotEmpty);

  return valid;
}

class User {
  constructor(nameInput, email, subject, message) {
    this.nameInput = nameInput;
    this.email = email;
    this.subject = subject;
    this.message = message;

  }
}


function sendContact() {
  if (isValid()) {
    let usr = new User(fields.nameInput.value, fields.email.value, fields.subject.value, fields.message.value);
    alert(`${usr.nameInput} thanks for messaging`)
  } else {
    alert("Please fill all the spaces correctly");
  }
}