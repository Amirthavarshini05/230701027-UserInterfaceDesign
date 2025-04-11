document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const successMsg = document.getElementById("successMsg");
  
    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    successMsg.textContent = "";
  
    let isValid = true;
  
    if (name.length < 3 || !/^[A-Za-z ]+$/.test(name)) {
      nameError.textContent = "Enter a valid name (only letters, min 3 characters).";
      isValid = false;
    }
  
    if (!validator.isEmail(email)) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
    }
  
    if (!validator.isMobilePhone(phone, 'any')) {
      phoneError.textContent = "Enter a valid phone number.";
      isValid = false;
    }
  
    if (!validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0
    })) {
      passwordError.textContent = "Password must be at least 6 characters with uppercase, lowercase, and number.";
      isValid = false;
    }
  
    if (isValid) {
      successMsg.textContent = "Validation successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "success.html";
      }, 1500);
    }
  });
  