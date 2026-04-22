
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});


const loginForm = document.getElementById('loginForm');
const errorBox = document.getElementById('errorBox');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from refreshing the page

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = passwordInput.value;


    if (enteredUsername === "username" && enteredPassword === "password") {

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", enteredUsername);
        

        window.location.href = "home.html";
    } else {

        errorBox.style.display = "block";
    }
});