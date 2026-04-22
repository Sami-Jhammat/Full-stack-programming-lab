import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white rounded-2xl p-10 mb-10 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-2">Our Products</h1>
        <p className="text-blue-200 text-lg">
          Browse our collection of {products.length} premium products
        </p>
      </div>

      {/* Category Badges */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <span
            key={cat}
            className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
