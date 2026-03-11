
function gohomepage(){
    let guest="guest";
    let x="-"
    window.location.href="../HTML FILES/Homepage1.html";
    localStorage.setItem("name", guest);
    localStorage.setItem("email", x);
    localStorage.setItem("password", x);
}

function loginpage(){
    let email;
    let password;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    let user_record = JSON.parse(localStorage.getItem("users")) || [];
    let loggedInUser = user_record.find(user => user.email === email && user.password === password);

    if (loggedInUser) {
        
        localStorage.setItem("name", loggedInUser.name);
        localStorage.setItem("email", loggedInUser.email);
        localStorage.setItem("password", loggedInUser.password);
        
        
        window.location.href="Homepage1.html";
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }
}

function savedata(){
    let name;
    let email;
    let password;

    name=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    // Check if any field is empty
if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
alert("Please fill out all fields");
return; // Stop further execution
}

// Check if email is from gmail domain
if (!email.endsWith('@gmail.com')) {
    alert("Please sign up with a Gmail account");
    return; // Stop further execution
}

let user_record = JSON.parse(localStorage.getItem("users")) || []; // Using shorthand for setting default value
if (user_record.some((record) => record.email === email)) {
alert("Email already exists");
} else if (user_record.some((record) => record.name === name)) {
alert("Name already exists");
} else if (user_record.some((record) => record.password === password)) {
alert("Password already exists");
} else {
user_record.push({
    "name": name,
    "email": email,
    "password": password
    
});
localStorage.setItem("users", JSON.stringify(user_record));
alert("Registration Successful!");
window.location.href = "login.html";
}
}

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href= "http://127.0.0.1:5501/HTML%20FILES/login.html";
    
}

