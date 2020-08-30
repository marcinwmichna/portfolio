let cta = document.getElementById("cta");
let email = document.getElementById("email");
let fadein = document.getElementById("fadein");
let fadeout = document.getElementById("fadeout");

let herokuInit = document.getElementById("email");
let copyEmailAddress = document.getElementById("copyEmail");
let copyGithubAddress = document.getElementById("copyGithub");
let copyLinkedIn = document.getElementById("copyLinkedIn");
// let copyEmailAddress = document.getElementById("Capa_1");

// const API_URL = "http://localhost:5555/messages/";
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
    // console.log(addData);
    fetch(API_URL, addData).then((res) => {
      if (res.ok) {
        fadeout.classList.add("fadeout");
        fadein.classList.add("fadein");
      } else {
        console.log("NOT succedded", res);
      }
    });
  }
});

herokuInit.addEventListener("click", (event) => {
  event.preventDefault();
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data);
});

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

copyEmailAddress.addEventListener("click", (event) => {
  event.preventDefault();
  var temp = document.createElement("input");
  temp.setAttribute("value", document.getElementById("emailId").innerHTML);
  document.body.appendChild(temp);
  temp.select();
  temp.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(temp);
  // alert("Copied: " + temp.value);
  var t = document.getElementById("copied-email");
  t.style.display = "flex";
  setTimeout(() => {
    t.style.display = "none";
  }, 2000);
});

copyGithubAddress.addEventListener("click", (event) => {
  event.preventDefault();
  var temp = document.createElement("input");
  temp.setAttribute("value", document.getElementById("githubId").innerHTML);
  document.body.appendChild(temp);
  temp.select();
  temp.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(temp);
  // alert("Copied: " + temp.value);
  var t = document.getElementById("copied-github");
  t.style.display = "flex";
  setTimeout(() => {
    t.style.display = "none";
  }, 2000);
});
copyLinkedIn.addEventListener("click", (event) => {
  event.preventDefault();
  var temp = document.createElement("input");
  temp.setAttribute("value", document.getElementById("linkedinId").innerHTML);
  document.body.appendChild(temp);
  temp.select();
  temp.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(temp);
  // alert("Copied: " + temp.value);
  var t = document.getElementById("copied-linkedin");
  t.style.display = "flex";
  setTimeout(() => {
    t.style.display = "none";
  }, 2000);
});
