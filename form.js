const inputs = document.querySelectorAll('input[type="email"]');
const email = document.querySelector('.email');
const password = document.querySelector('#password');
const submitButton = document.querySelector('button');
const confirmpassword = document.querySelector('#confirm_password');

submitButton.addEventListener("click", (e) => {
  email.classList.toggle("error", !email.checkValidity());
});

submitButton.addEventListener("click", (e) => {
    password.classList.toggle("error", !password.checkValidity());
  });

// submitButton.addEventListener("click", (e) => {
//     confirmpassword.classList.toggle("error", !confirmpassword.checkValidity());
//   });

function validatePassword() {
    if (password.value !== confirmpassword.value) {
        password.setCustomValidity('Sorry, passwords do not match.  Please try a new combination.');
        password.style.borderColor(#880808);
        confirmpassword.style.borderColor(#880808);
    }
    else (password.value === confirmpassword.value)
    {password.style.borderColor(#00FF00)
    confirmpassword.style.borderColor(#00FF00)}
}

password.onchange = validatePassword()