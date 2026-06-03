let cartCount = 0;

function addToCart(item) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(item + " added to cart 🛒");
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
