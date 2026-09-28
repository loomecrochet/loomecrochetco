function addToCart(name, price, image) {
    const message = document.createElement("div");

    message.className = "cart-message";
    message.innerHTML = `
        <strong>🛍️ Loomé Crochet Co.</strong>
        <p>${name} has been added to your cart!</p>
    `;

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 2500);
}
