"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white rounded-2xl p-10 mb-10 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-2">Contact Us</h1>
        <p className="text-blue-200 text-lg">We&apos;d love to hear from you. Send us a message!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            { icon: "📍", title: "Address", info: "Akhtar Abbas Road, Bahawalpur, Punjab" },
            { icon: "📧", title: "Email", info: "sharifali.aulecturer@gmail.com" },
            { icon: "📞", title: "Phone", info: "+92 300 1234567" },
            { icon: "🕒", title: "Office Hours", info: "Mon–Fri: 9:00 AM – 5:00 PM" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-5 shadow-md flex gap-4 items-start">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white rounded-xl p-8 shadow-md">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
              <p className="text-gray-500">Thank you, <strong>{form.name}</strong>! We&apos;ll get back to you soon.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange} required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-400"
                  >
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Product Support</option>
                    <option>Order Issue</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Send Message 🚀
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
