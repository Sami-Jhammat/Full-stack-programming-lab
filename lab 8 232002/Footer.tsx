import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">🛒 NextShop</h3>
            <p className="text-gray-400 text-sm">
              A full-stack Next.js application built for Lab 08 — Full Stack Programming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-orange-300 mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-orange-300 mb-3">Lab Info</h4>
            <p className="text-gray-400 text-sm">Lab 08 – Next.js Frontend</p>
            <p className="text-gray-400 text-sm">BSSE-VI-B & A</p>
            <p className="text-gray-400 text-sm">Instructor: Mr. Sharif Hussain</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
          <p>© 2026 NextShop – My Next.js App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
