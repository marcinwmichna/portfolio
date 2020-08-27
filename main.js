let cta = document.getElementById("cta");
let email = document.getElementById("email");
let fadein = document.getElementById("fadein");
let fadeout = document.getElementById("fadeout");

const API_URL = "https://email-message.herokuapp.com/messages/";
cta.addEventListener("click", (event) => {
  event.preventDefault();
  if (this.email.value == null || this.email.value == "") {
    error.classList.add("--active");
  } else {
    let addData = {
      method: "POST",
      body: JSON.stringify({
        email: this.email.value,
      }),
      headers: { "Content-Type": "application/json" },
    };
    fetch(API_URL, addData).then((res) => {
      if (res.ok) {
        fadeout.classList.add("fadeout");
        fadein.classList.add("fadein");
      } else {
        console.log("NOT succedded");
      }
    });
  }
});
