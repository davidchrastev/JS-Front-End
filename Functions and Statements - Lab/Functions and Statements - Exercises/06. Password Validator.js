function validatePassword(password) {
  let valid = true;

  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    valid = false;
  }

  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    console.log("Password must consist only of letters and digits");
    valid = false;
  }

  if ((password.match(/[0-9]/g) || []).length < 2) {
    console.log("Password must have at least 2 digits");
    valid = false;
  }
  if (valid) {
    console.log("Password is valid");
  }
}
