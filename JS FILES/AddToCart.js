let cart = [];

function addToCart(name, price) {
    const cartItems = document.getElementById('cartItems');
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.dataset.price = price;
    item.innerText = `${name}: $${price.toFixed(2)}`;
    cartItems.appendChild(item);

    cart.push({ name: name, price: price.toFixed(2) });
    localStorage.setItem('cart', JSON.stringify(cart));

    calculateTotal();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cartItems.length;
    const cartCountElement = document.getElementById('cart');
    cartCountElement.textContent = `Cart (${cartItemCount} items)`;
}

function resetCartCount() {
    const cartCountElement = document.getElementById('cart');
    cartCountElement.textContent = "Cart (0 items)";
}

function loadCart() {
    const currentUserEmail = localStorage.getItem('email');
    if (currentUserEmail) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.find(user => user.email === currentUserEmail);
        const profileOrder = JSON.parse(localStorage.getItem('profileOrder')) || [];

        if (currentUser && currentUser.foodOrder) {
            cart = currentUser.foodOrder;
        }

        profileOrder.forEach(item => {
            if (!cart.some(cartItem => cartItem.name === item.name && cartItem.price === item.price)) {
                cart.push(item);
            }
        });

        cart.forEach(item => displayCartItem(item.name, parseFloat(item.price)));

        localStorage.removeItem('profileOrder');
    }
}

function displayCartItem(name, price) {
    const cartItems = document.getElementById('cartItems');
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.dataset.price = price;
    item.innerText = `${name}: $${price.toFixed(2)}`;
    cartItems.appendChild(item);
}

window.onload = function() {
    clearCart()
    loadCart();
    calculateTotal();
    updateCartDisplay();
    if (!sessionStorage.getItem('reloaded')) {
        sessionStorage.setItem('reloaded', 'true');
        location.reload();
    } else {
        sessionStorage.removeItem('reloaded');
    }
}

function toggleCartDisplay() {
    const cartDetails = document.getElementById('cartDetails');
    cartDetails.style.display = cartDetails.style.display === 'none' ? 'block' : 'none';
}

function updateCartCount() {
    const cartCount = document.getElementById('cartItems').childElementCount;
    const cart = document.getElementById('cart');
    cart.textContent = `Cart (${cartCount} items)`;
}

function showCartItems() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
    });
}

function calculateTotal() {
    const items = document.querySelectorAll('.cart-item');
    const subtotal = Array.from(items).reduce((acc, item) => acc + parseFloat(item.dataset.price), 0);
    const taxRate = 8;
    const tax = subtotal * (taxRate / 100);
    const total = subtotal + tax;

    localStorage.setItem('subtotal', subtotal.toFixed(2));
    localStorage.setItem('tax', tax.toFixed(2));
    localStorage.setItem('total', total.toFixed(2));

    document.getElementById('subtotalDisplay').innerText = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('taxDisplay').innerText = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('totalDisplay').innerText = `Total: $${total.toFixed(2)}`;

    updateUserCart(); 
}

function clearCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = "";

    localStorage.removeItem('cart');
    localStorage.removeItem('subtotal');
    localStorage.removeItem('tax');
    localStorage.removeItem('total');

    document.getElementById('subtotalDisplay').innerText = "Subtotal: $0.00";
    document.getElementById('taxDisplay').innerText = "Tax: $0.00";
    document.getElementById('totalDisplay').innerText = "Total: $0.00";

    cart = [];
    updateUserCart();
    updateCartDisplay();
}

function checkout() {
    let userName= localStorage.getItem('name');
    if (!userName  || userName ==='guest') {
        window.location.href = "login.html";
    } else {
        profileOrder();
        updateUserCart(true);  
        window.location.href = "payment.html";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkoutButton');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
});

function updateUserCart(isCheckout = false) {
    const currentUserEmail = localStorage.getItem('email');
    if (currentUserEmail) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let index = users.findIndex(user => user.email === currentUserEmail);
        
        if (index !== -1) {
            if (isCheckout) {
                users[index].oldOrder = users[index].oldOrder || [];
                users[index].oldOrder.push(...(users[index].foodOrder || []));
                users[index].foodOrder = [];
            }
            users[index].foodOrder = cart;  
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
}

function profileOrder() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let profileOrder = JSON.parse(localStorage.getItem('profileOrder')) || [];

    profileOrder.push(...cartItems);
    localStorage.setItem('profileOrder', JSON.stringify(profileOrder));

    cart = [];
    updateCartDisplay();
}
