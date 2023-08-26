const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');
const profileDetails = document.getElementById('profile-details');
const profileUsername = document.getElementById('profile-username');
const logoutButton = document.getElementById('logout-button');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Generate a random access token (for simplicity, you can use a library for better randomness)
  const accessToken = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

  // Save user state in localStorage
  const userState = {
    username,
    accessToken
  };
  localStorage.setItem('userState', JSON.stringify(userState));

  signupMessage.textContent = 'Signup successful!';
  signupMessage.style.color = 'green';
  setTimeout(() => {
    signupMessage.textContent = '';
    window.location.href = '/profile';
  }, 1500);
});

logoutButton.addEventListener('click', () => {
  // Clear user state from localStorage
  localStorage.removeItem('userState');
  window.location.href = '/';
});

// Check user state on page load
document.addEventListener('DOMContentLoaded', () => {
  const userState = JSON.parse(localStorage.getItem('userState'));

  if (userState) {
    profileUsername.textContent = `Username: ${userState.username}`;
    profileDetails.style.display = 'block';
  } else {
    profileDetails.style.display = 'none';
  }
});
