var Password = document.getElementById("password");
var Strength = document.getElementById("strength");
var Message = document.getElementById("message");

Password.addEventListener("input", () => {
  if (Password.value.length > 0) {
    Message.style.display = "block";
  } else {
    Message.style.display = "none";
  }
  if (Password.value.length < 4) {
    Strength.innerHTML = "weak";
    Password.style.borderColor = "#ff5925";
    Message.style.color = "#ff5925";
  } else if (Password.value.length >= 4 && Password.value.length < 8) {
    Strength.innerHTML = "medium";
    Password.style.borderColor = "yellow";
    Message.style.color = "yellow";
  } else if (Password.value.length >= 8) {
    Strength.innerHTML = "strong";
    Password.style.borderColor = "#26d730";
    Message.style.color = "#26d730";
  }
});
