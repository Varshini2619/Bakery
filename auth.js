let users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert('User already exists with this email.');
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signup successful! You can now login.');
  document.getElementById('signupForm').reset();
}

function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    alert(`Welcome back, ${user.name}!`);
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  if (signupForm) signupForm.addEventListener('submit', registerUser);
  if (loginForm) loginForm.addEventListener('submit', loginUser);
});

<button id="logoutBtn" style="display: none;">Logout</button>
function logoutUser() {
  localStorage.removeItem('loggedInUser');
  alert('You have been logged out.');
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  if (user && logoutBtn) {
    logoutBtn.style.display = 'inline-block';
    logoutBtn.addEventListener('click', logoutUser);
  }
});
if (user) {
  document.querySelector('.navbar .username')?.textContent = `Hi, ${user.name}`;
}