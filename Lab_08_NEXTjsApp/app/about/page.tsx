import Link from "next/link";

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white rounded-2xl p-10 mb-10 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-2">About Us</h1>
        <p className="text-blue-200 text-lg">Learn about NextShop and this Lab project</p>
      </div>

      {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">📘 About This Project</h2>
          <p className="text-gray-600 mb-4">
            This is a <strong>Lab 08</strong> project for the <strong>Full Stack Programming</strong> course at BSSE-VI.
            It demonstrates the power of <strong>Next.js 14</strong> with the App Router, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-600">
            The project includes multi-page routing, reusable components (Header, Footer), dynamic routing
            for product detail pages, and a clean responsive design.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">🛠️ Technologies Used</h2>
          <ul className="space-y-2 text-gray-600">
            {[
              { tech: "Next.js 14", desc: "App Router, Server Components" },
              { tech: "React 18", desc: "Component-based UI" },
              { tech: "TypeScript", desc: "Type-safe development" },
              { tech: "Tailwind CSS", desc: "Utility-first styling" },
              { tech: "Node.js", desc: "Runtime environment" },
            ].map((item) => (
              <li key={item.tech} className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>
                  <strong>{item.tech}</strong> – {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lab Info */}
      <div className="bg-white rounded-xl p-8 shadow-md mb-10">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">📋 Lab Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            { label: "Course", value: "Full Stack Programming" },
            { label: "Lab", value: "Lab 08 – Next.js Frontend" },
            { label: "Instructor", value: "Mr. Sharif Hussain" },
            { label: "Class", value: "BSSE-VI-B & A" },
            { label: "Task 1", value: "Multi-Page App" },
            { label: "Task 2", value: "Dynamic Routing" },
          ].map((info) => (
            <div key={info.label} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">{info.label}</p>
              <p className="font-bold text-gray-800 mt-1">{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/products"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors inline-block"
        >
          Browse Our Products →
        </Link>
      </div>
    </div>
  );
}
