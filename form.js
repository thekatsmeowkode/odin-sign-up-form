const inputs = document.querySelectorAll('input[type="email"]');
const email = document.querySelector('.email');
const password = document.querySelector('#password');
const submitButton = document.querySelector('button');
const confirmpassword = document.querySelector('#confirm_password');
const validate = document.querySelector('.validate')
const form = document.getElementById('#form')

// submitButton.addEventListener("click", (e) => {
//   email.classList.toggle("error", !email.checkValidity());
// });

// submitButton.addEventListener("click", (e) => {
//     password.classList.toggle("error", !password.checkValidity());
//   });

// submitButton.addEventListener("click", (e) => {
//     confirmpassword.classList.toggle("error", !confirmpassword.checkValidity());
//   });

let match=false

function check() {
if (password.value == confirmpassword.value) {
    password.style.border = "2px solid green";
    confirmpassword.style.border = "2px solid green";
    validate.innerText = "";
    match = true;
  } 
  else {
    password.style.border = "2px solid red";
    confirmpassword.style.border = "2px solid red"
    validate.innerText = "* Passwords do not match";
    match = false;
  }}


function submit_form() {
  if (!match) {
    validate.innerText = "Passwords must match to submit form, please try again";
    submitButton.disabled = true
  } else {
    document.form['form'].submit();
    submitButton.disabled= false
  }
}

