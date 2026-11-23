"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="mx-auto max-w-3xl bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl text-purple-900">About Our URL Shortener</h1>
        <p className="text-gray-700 leading-relaxed">
          We are a fast, reliable, and privacy-focused URL shortening service built to make sharing links effortless. Whether you are sharing links on social media, managing marketing campaigns, or simply cleaning up long, messy web addresses, our tool gives you full control over how your links look and perform.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg text-purple-900">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 flex flex-col gap-1">
            <h3 className="font-bold text-purple-700">Custom Short Links</h3>
            <p className="text-sm text-gray-600">
              Create memorable, custom aliases instead of random strings of characters.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 flex flex-col gap-1">
            <h3 className="font-bold text-purple-700">Instant Redirection</h3>
            <p className="text-sm text-gray-600">
              Lightning-fast redirects ensuring your audience reaches their destination without delay.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 flex flex-col gap-1">
            <h3 className="font-bold text-purple-700">No Account Required</h3>
            <p className="text-sm text-gray-600">
              Start shortening your URLs immediately without tedious sign-ups or paywalls.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200 flex flex-col gap-1">
            <h3 className="font-bold text-purple-700">Clean & Simple</h3>
            <p className="text-sm text-gray-600">
              A distraction-free interface designed to get your link ready in seconds.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-purple-200">
        <p className="text-sm text-gray-700 font-medium">
          Ready to simplify your links?
        </p>
        <Link href="/shorten">
          <button className="cursor-pointer bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-5 py-2 font-bold text-white">
            Try It Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;