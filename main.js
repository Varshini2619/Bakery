document.addEventListener('DOMContentLoaded', () => {
  // Highlight current nav link
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // Load products on products page
  if (document.getElementById('productList')) {
    renderProducts();
  }
});

function renderProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  if (products.length === 0) {
    productList.innerHTML = '<p>No products available. Admin can add them.</p>';
    return;
  }

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

