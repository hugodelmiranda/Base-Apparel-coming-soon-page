function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addError(idError) {
  if (idError.classList.contains("show")) {
    return;
  } else {
    idError.classList.add("show");
    return;
  }
}

function subscribing(idError1, idError2) {
  idError1.classList.remove("show");
  idError2.classList.remove("show");
  alert("Thanks for subscribing!");
}

function findEmail(event) {
  event.preventDefault(); // Previne o envio do formulário

  const email = document.getElementById("emailInput").value;
  const iconError = document.getElementById("eIcon");
  const emailError = document.getElementById("emailError");

  if (emailIsValid(email)) {
    subscribing(emailError, iconError);
    email.value = "";
  } else {
    addError(iconError);
    addError(emailError);
  }
}

document.getElementById("btgSubmit").addEventListener("click", findEmail);
