import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white rounded-2xl p-12 mb-12 text-center shadow-xl">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Welcome to <span className="text-orange-400">NextShop</span>
        </h1>
        <p className="text-lg text-blue-200 max-w-xl mx-auto mb-8">
          Discover the latest tech products, gadgets, and accessories — built with Next.js 14 and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            🛍️ Shop Now
          </Link>
          <Link
            href="/about"
            className="bg-white text-[#1e3a5f] hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* Features Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: "🚚", title: "Free Shipping", desc: "On all orders over $50" },
          { icon: "🔒", title: "Secure Payments", desc: "100% safe & encrypted" },
          { icon: "🔄", title: "Easy Returns", desc: "30-day return policy" },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-gray-800 text-lg">{f.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <Link href="/products" className="text-orange-500 hover:text-orange-600 font-semibold text-sm">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
