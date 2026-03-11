// Retrieve current food orders from localStorage
const currentUserEmail = localStorage.getItem('email');
if (currentUserEmail) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find(user => user.email === currentUserEmail);
    let oldOrders = currentUser ? currentUser.oldOrder : [];

    const oldOrderList = document.getElementById("old-order-list");
    oldOrderList.innerHTML = ""; // Clear previous contents
    if (oldOrders && oldOrders.length > 0) {
        oldOrders.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price}`;
            oldOrderList.appendChild(listItem);
        });
    } else {
        oldOrderList.innerHTML = "<li>No orders found.</li>";
    }
}

function pickup() {
    if (currentUserEmail) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let currentUserIndex = users.findIndex(user => user.email === currentUserEmail);
        if (currentUserIndex !== -1) {
            users[currentUserIndex].oldOrder = [];
            localStorage.setItem("users", JSON.stringify(users));

            // Clear the displayed order list
            const oldOrderList = document.getElementById("old-order-list");
            oldOrderList.innerHTML = "<li>No orders found.</li>";
        }
    }
}

 
document.addEventListener('DOMContentLoaded', () => {
    
    const loggedInUser = localStorage.getItem('email'); // Retrieve the logged-in user's email from localStorage
    const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || []; // Retrieve the stored bookings from localStorage
    const userBookings = storedSeats.filter(booking => booking.userEmail === loggedInUser); // Filter the bookings to display only those associated with the logged-in user
    const bookingsContainer = document.getElementById('user_bookings'); // Get the container element where the bookings will be displayed
    bookingsContainer.innerHTML = '<h2>Your Movie Order:</h2>';
    
    const bookingsByMovie = {};  // Create an object to store bookings grouped by movie name

    // Group the bookings by movie name
    userBookings.forEach(booking => {
        if (!bookingsByMovie[booking.movie_name]) {
            bookingsByMovie[booking.movie_name] = [];
        }
        bookingsByMovie[booking.movie_name].push(booking);
    });

    // Loop through each movie and its associated bookings
    for (const movie in bookingsByMovie) {
        // Loop through each booking for the current movie
        bookingsByMovie[movie].forEach(booking => {
            // Create a new div element to display the booking details to profile
            const bookingElement = document.createElement('div');
            bookingElement.innerHTML = `
                <h3>${booking.movie_name}</h3>
                <p>Seat: ${booking.seat_sr.toUpperCase()} ${booking.seat_no}</p>
                <p>Price: RM ${booking.seat_price}</p>
                <p>Date: ${booking.date}/5/2024</p>
            `;
            bookingsContainer.appendChild(bookingElement);
        });
    }
});


