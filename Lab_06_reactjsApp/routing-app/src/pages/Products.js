function Products() {
  const products = [
    { id: 1, title: "Laptop", description: "High performance laptop for students." },
    { id: 2, title: "Headphones", description: "Noise-cancelling headphones for clear sound." },
    { id: 3, title: "Smart Watch", description: "Track time, fitness, and notifications." },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
