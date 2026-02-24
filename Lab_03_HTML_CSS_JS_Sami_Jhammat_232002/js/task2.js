// Lab 03 — Task 2
// Student: sami jhammat | Roll No: 232002

// Requirements:
// - Create a function addToCart(...items) using Rest operator
// - Store products in an array
// - Use Spread operator to clone the cart
// - Use Array Destructuring to extract first product and remaining products
// - Display total items, first item, and updated cart

let cart = []; // array to store products

function addToCart(...items) {
  // Rest operator gathers items into array
  cart = [...cart, ...items]; // spread operator to update cart
  return cart;
}

function formatMoney(n) {
  const num = Number(n);
  if (Number.isNaN(num)) return "0";
  return num.toLocaleString();
}

function render() {
  const output = document.getElementById("cartOutput");
  const table = document.getElementById("cartTable");

  // Spread to clone cart
  const cartClone = [...cart];

  // Array destructuring
  const [firstItem, ...remainingItems] = cartClone;

  const totalItems = cartClone.length;
  const totalPrice = cartClone.reduce((sum, it) => sum + (Number(it.price) || 0), 0);

  output.textContent = `Total items: ${totalItems}
Total price: PKR ${formatMoney(totalPrice)}
First item: ${firstItem ? `${firstItem.name} (PKR ${formatMoney(firstItem.price)})` : "—"}
Remaining items: ${remainingItems.length ? remainingItems.map(i => i.name).join(", ") : "—"}

Cart clone (Spread): ${JSON.stringify(cartClone, null, 2)}`;

  const rows = cartClone.map((it, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td>${it.name}</td>
      <td>PKR ${formatMoney(it.price)}</td>
    </tr>
  `).join("");

  table.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        ${rows || `<tr><td colspan="3">No items in cart.</td></tr>`}
      </tbody>
    </table>
  `;
}

document.getElementById("addOneBtn").addEventListener("click", () => {
  const name = document.getElementById("itemName").value.trim();
  const price = document.getElementById("itemPrice").value;

  if (!name) {
    alert("Please enter an item name.");
    return;
  }

  addToCart({ name, price: Number(price) || 0 });
  render();
});

document.getElementById("addBundleBtn").addEventListener("click", () => {
  // Add multiple items at once (shows Rest operator use)
  addToCart(
    { name: "USB-C Cable", price: 450 },
    { name: "Power Bank", price: 3200 },
    { name: "Wireless Mouse", price: 1800 }
  );
  render();
});

document.getElementById("clearBtn").addEventListener("click", () => {
  cart = [];
  render();
});

render();
