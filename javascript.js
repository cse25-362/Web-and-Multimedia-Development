
// ============================

// HOUSE OF NKILE - SHOP SYSTEM

// ============================

 

// Load cart from browser storage

let cart = JSON.parse(localStorage.getItem("cart")) || [];

 

// Add item to cart

function addToCart(name, price) {

    cart.push({ name: name, price: Number(price) });

 

    // Save to localStorage

    localStorage.setItem("cart", JSON.stringify(cart));

 

    updateCartTotal();

 

    alert(name + " added to cart!");

}

 

// Calculate total price

function updateCartTotal() {

    let total = cart.reduce((sum, item) => sum + item.price, 0);

 

    localStorage.setItem("total", total);

 

    // Show total on page if element exists

    let totalDisplay = document.getElementById("totalPrice");

    if (totalDisplay) {

        totalDisplay.innerText = total;

    }

}

 

// Remove last item (optional feature)

function removeLastItem() {

    cart.pop();

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartTotal();

}

 

// Clear entire cart

function clearCart() {

    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartTotal();

}

 

// Load total when page opens

window.onload = function () {

    updateCartTotal();

};


