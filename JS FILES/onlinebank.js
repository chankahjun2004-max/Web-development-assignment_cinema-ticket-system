function enableInputFields() {
    var bankSelect = document.getElementById("banks");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var loginButton = document.getElementById("loginButton");

    // Enable input fields and login button when a bank is selected
    if (bankSelect.value !== "") {
        usernameInput.removeAttribute("disabled");
        passwordInput.removeAttribute("disabled");
        loginButton.removeAttribute("disabled");
    } else {
        // Disable input fields and login button if no bank is selected
        usernameInput.setAttribute("disabled", "disabled");
        passwordInput.setAttribute("disabled", "disabled");
        loginButton.setAttribute("disabled", "disabled");
    }
}

// Function to validate input and redirect to receipt.html
function loginUser(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    console.log("Login button clicked");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log("Username: " + username);
    console.log("Password: " + password);

    // Check if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
        console.log("Username or password is empty");
        alert("Please enter your username and password.");
    } else {
        console.log("Redirecting to receipt.html");
        // Redirect to receipt.html
        window.location.href = "receipt.html";
    }
}

// Event listener for login button click
document.getElementById("bankLoginForm").addEventListener("submit", loginUser);