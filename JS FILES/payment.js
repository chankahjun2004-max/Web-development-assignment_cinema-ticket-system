// Function to update the movie section with selected seats and movie name
function updateMovieSection(selectedSeats) {
    const movieList = document.getElementById("movie-tickets");
    movieList.innerHTML = ""; // Clear previous list

    selectedSeats.forEach(seat => {
        const li = document.createElement("li");
        li.textContent = `Seat ${seat.seat_no} - ${seat.seat_sr} ($${seat.seat_price})`;
        movieList.appendChild(li);
    });

    // Extract movie name from URL segment
    const url_segment = window.location.href.split('?');
    const selectedMovie = url_segment[1];

    // Create a list item for the movie name and append it to the movie tickets section
    const movieListItem = document.createElement('li');
    movieListItem.textContent = selectedMovie;
    movieList.appendChild(movieListItem);
}

// Function to calculate subtotal and total amounts
function calculateTotal(selectedSeats, foodItems) {
    const movieTotal = selectedSeats.reduce((acc, seat) => acc + parseFloat(seat.seat_price), 0);
    const foodTotal = foodItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    const subtotal = movieTotal + foodTotal;
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return {
        subtotal: subtotal.toFixed(2),
        total: total.toFixed(2)
    };
}

// Function to toggle the visibility of the confirm payment button
function toggleConfirmButton() {
    const selectElement = document.getElementById("pmethods");
    const confirmButton = document.getElementById("confirmPaymentButton");

    if (selectElement.value !== "") {
        confirmButton.disabled = false;
        confirmButton.style.display = "block";
    } else {
        confirmButton.disabled = true;
        confirmButton.style.display = "none";
    }
}

// Update the movie section with selected seats and movie name
const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
updateMovieSection(storedSeats);

// Retrieve selected food items from local storage
const storedFoodItems = JSON.parse(localStorage.getItem('profileOrder')) || [];

// Function to update the Food & Beverage section with selected food items
function updateFoodBeverageSection(foodItems) {
    const foodList = document.getElementById("food-items");
    foodList.innerHTML = ""; // Clear previous list

    foodItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        foodList.appendChild(li);
    });
}

// Update the Food & Beverage section with selected food items
updateFoodBeverageSection(storedFoodItems);

// Call the function to calculate subtotal and total amounts
const { subtotal, total } = calculateTotal(storedSeats, storedFoodItems);

// Update the subtotal and total amounts in the receipt
document.getElementById("food-subtotal").textContent = `Subtotal: $${subtotal}`;
document.getElementById("total").textContent = `Total: $${total}`;

// Toggle the visibility of the confirm payment button initially
toggleConfirmButton();

// Add event listener to the payment method select dropdown
document.getElementById("pmethods").addEventListener("change", toggleConfirmButton);

// Add event listener to the confirm payment button
document.getElementById("confirmPaymentButton").addEventListener("click", () => {
    const selectedPaymentMethod = document.getElementById("pmethods").value;

    if (selectedPaymentMethod === "TNGO EWALLET") {
        window.location.href = "tngo.html";
    } else if (selectedPaymentMethod === "Online Banking") {
        window.location.href = "onlinebank.html";
    } else if (selectedPaymentMethod === "Debit/Credit Card") {
        window.location.href = "card payment.html";
    }
});
