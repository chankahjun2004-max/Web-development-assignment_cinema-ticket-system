document.getElementById('loginForm').addEventListener('input', function() {
    var phone = document.querySelector('.tngphone').value;
    var password = document.querySelector('.tngpw').value;
    var loginBtn = document.querySelector('input[type="submit"]');

    // Check if both phone number and password fields are not empty and phone number is valid
    if (phone.trim() !== '' && isValidPhoneNumber(phone) && password.trim() !== '') {
        loginBtn.removeAttribute('disabled'); // Enable the button
    } else {
        loginBtn.setAttribute('disabled', 'disabled'); // Disable the button
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    var phone = document.querySelector('.tngphone').value;
    var password = document.querySelector('.tngpw').value;

    // Debugging statements
    console.log('Phone:', phone);
    console.log('Password:', password);
   
    // Redirect to receipt.html
    window.location.href = "receipt.html";
});

// Function to validate phone number using regular expression
function isValidPhoneNumber(phone) {
    // Regular expression for a typical 10 or 11-digit phone number format
    var phoneRegex = /^\d{10,11}$/; // Limiting to 10 or 11 digits
    return phoneRegex.test(phone);
}

// Additional event listener to restrict input to numeric characters only
document.querySelector('.tngphone').addEventListener('input', function() {
    this.value = this.value.replace(/[^\d]/g, ''); // Replace non-numeric characters with empty string
});

