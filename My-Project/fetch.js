const baseUrl = 'http://localhost:8080/api/user'; // replace with your API endpoint

// register user
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nickname = document.getElementById('nickname-input').value;
  const password = document.getElementById('password-input').value;

  fetch(`${baseUrl}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nickname, password }),
  })
    .then((response) => {
      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Failed to register user');
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// login user
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nickname = document.getElementById('nickname-input').value;
  const password = document.getElementById('password-input').value;

  fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nickname, password }),
  })
    .then((response) => {
      if (response.ok) {
        console.log('User logged in successfully');
      } else {
        console.error('Failed to login user');
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// logout user
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', () => {
  fetch(`${baseUrl}/logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        console.log('User logged out successfully');
      } else {
        console.error('Failed to logout user');
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
