import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      {/* Product Image placeholder */}
      <div className="bg-gradient-to-br from-blue-100 to-orange-100 h-48 flex items-center justify-center text-6xl">
        {product.image}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-1">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-gray-500 text-sm flex-grow">{product.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-[#1e3a5f]">${product.price}</span>
          <Link
            href={`/products/${product.id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
