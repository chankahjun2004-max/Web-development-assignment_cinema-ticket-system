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
    console.log("URL Segment:", url_segment); // Debugging: Check the URL segment array
    const selectedMovie = url_segment[1];
    console.log("Selected Movie:", selectedMovie); // Debugging: Check the selected movie name

    // Create a list item for the movie name and append it to the movie tickets section
    const movieListItem = document.createElement('li');
    movieListItem.textContent = selectedMovie;
    movieList.appendChild(movieListItem);
}

function updateFoodSection(foodItems) {
    const foodList = document.getElementById("food-items");
    foodList.innerHTML = ""; // Clear previous list

    foodItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        foodList.appendChild(li);
    });
}

// Function to calculate subtotal and total amounts
function calculateTotal(selectedSeats, foodItems) {
    let movieTotal = 0;
    let foodTotal = 0;

    // Calculate total for movie tickets
    selectedSeats.forEach(seat => {
        movieTotal += parseFloat(seat.seat_price);
    });

    // Calculate total for food & beverage items
    foodItems.forEach(item => {
        foodTotal += parseFloat(item.price);
    });

    // Calculate subtotal (movie tickets + food & beverage)
    const subtotal = movieTotal + foodTotal;

    // Calculate tax (8%)
    const tax = subtotal * 0.08;

    // Calculate total (subtotal + tax)
    const total = subtotal + tax;

    return {
        subtotal: subtotal.toFixed(2),
        total: total.toFixed(2)
    };
}

// Function to clear the cart
function clearCart() {
    var cartItems = document.getElementById('cartItems');
    if (cartItems) {
        cartItems.innerHTML = "";
    }

    localStorage.removeItem('cart');
    localStorage.removeItem('subtotal');
    localStorage.removeItem('tax');
    localStorage.removeItem('total');
    ResetCartCount();

    var subtotalDisplay = document.getElementById('subtotalDisplay');
    if (subtotalDisplay) {
        subtotalDisplay.innerText = "Subtotal: $0.00";
    }

    var taxDisplay = document.getElementById('taxDisplay');
    if (taxDisplay) {
        taxDisplay.innerText = "Tax: $0.00";
    }

    var totalDisplay = document.getElementById('totalDisplay');
    if (totalDisplay) {
        totalDisplay.innerText = "Total: $0.00";
    }
}

// Dummy function to avoid errors
function ResetCartCount() {
    console.log('Cart count reset.');
}

// Add event listener for button click
document.getElementById("back-to-home").addEventListener("click", function() {
    // Redirect to Homepage.html
    window.location.href = "Homepage1.html";
    // Call the clearCart() function
    clearCart();
});

// Update the movie section with selected seats and movie name
const storedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
updateMovieSection(storedSeats);

// Update the food section with selected food items
const storedFoodItems = JSON.parse(localStorage.getItem('cart')) || [];
updateFoodSection(storedFoodItems);

// Call the function to calculate subtotal and total amounts
const { subtotal, total } = calculateTotal(storedSeats, storedFoodItems);

// Update the subtotal and total amounts in the receipt
document.getElementById("food-subtotal").textContent = `Subtotal: $${subtotal}`;
document.getElementById("total").textContent = `Total: $${total}`;