"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-3xl bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl text-purple-900">Contact Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Have a question, feedback, or need support with your shortened links? Fill out the form below and our team will get back to you as soon as possible.
        </p>
      </div>

      {submitted && (
        <div className="bg-white border border-purple-300 text-purple-800 p-4 rounded-lg shadow-sm font-medium">
          Thank you for reaching out! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="p-4 bg-white rounded-md focus:outline-purple-700"
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="p-4 bg-white rounded-md focus:outline-purple-700"
          value={email}
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="p-4 bg-white rounded-md focus:outline-purple-700 min-h-[120]"
          value={message}
          placeholder="Write your message here..."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="cursor-pointer bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg p-3 py-2 font-bold text-white mt-1"
        >
          Send Message
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-purple-200">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 flex flex-col gap-1">
          <h3 className="font-bold text-purple-700">Email Support</h3>
          <p className="text-sm text-gray-600">support@urlshortener.com</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 flex flex-col gap-1">
          <h3 className="font-bold text-purple-700">Response Time</h3>
          <p className="text-sm text-gray-600">Within 24 hours on business days</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;