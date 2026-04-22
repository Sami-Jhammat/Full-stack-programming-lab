import { products } from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) notFound();

  const others = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-500">Home</Link>
        {" / "}
        <Link href="/products" className="hover:text-orange-500">Products</Link>
        {" / "}
        <span className="text-gray-800 font-medium">{product.title}</span>
      </nav>

      {/* Product Detail Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center p-16 text-9xl">
            {product.image}
          </div>

          {/* Details */}
          <div className="p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-sm text-gray-500">({product.rating} / 5.0)</span>
            </div>

            {/* Price */}
            <p className="text-4xl font-bold text-[#1e3a5f] mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">{product.details}</p>

            {/* Stock */}
            <p className="text-sm text-gray-500 mb-6">
              🏷️ <strong>{product.stock} units</strong> in stock
            </p>

            {/* Actions */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md">
                🛒 Add to Cart
              </button>
              <Link
                href="/products"
                className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="bg-white rounded-xl p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl">{p.image}</div>
              <div>
                <p className="font-bold text-gray-800 text-sm">{p.title}</p>
                <p className="text-orange-500 font-bold">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
