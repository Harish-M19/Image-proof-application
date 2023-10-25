const loginContainer = document.getElementById('loginContainer');
const registerContainer = document.getElementById('registerContainer');
const appContainer = document.getElementById('appContainer');
document.getElementById('uploadForm').addEventListener('submit', login);
document.getElementById('registerForm').addEventListener('submit', register);
async function login(event) {
  event.preventDefault(); // Prevent form submission

  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');

  if (!username || !password) {
    alert('Username and password are required.');
    return;
  }
  if (username === 'example' && password === 'password') {
    showAppContainer();
  } else {
    alert('Invalid username or password.');
  }
}
async function register(event) {
  event.preventDefault(); // Prevent form submission

  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (!username || !password) {
    alert('Username and password are required.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }
  alert('Registration successful. You can now log in.');
}
function showAppContainer() {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'none';
  appContainer.style.display = 'block';
}





