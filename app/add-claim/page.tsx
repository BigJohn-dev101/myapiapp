"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function AddClaimPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    claimPerson: "",
    address: "",
    contacts: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    try {
      const res = await fetch("/api/claims", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      setSubmitted(true);
      setForm({
        title: "",
        description: "",
        claimPerson: "",
        address: "",
        contacts: "",
      });

      // Automatically hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error submitting claim");

      // Automatically hide error message after 3 seconds
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}`}>
      <Head>
        <title>Add Claim | Claims API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="fixed top-8 left-8 right-8 z-50 px-8 py-4 shadow-lg bg-gradient-to-r from-red-900 via-yellow-700 to-orange-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-orange-700" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#b45309" />
              <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
            <Link href="/" className="text-2xl font-bold hero-text text-yellow-200">Claims API</Link>
          </div>
          <div className="flex space-x-6 items-center">
            {/* Removed Features link as it's specific to home page */}
            <Link href="/claims" className="text-yellow-100 text-lg font-semibold hover:text-orange-800 hover:bg-yellow-100 transition-colors duration-200 px-3 py-2 rounded">Claims</Link>
            <Link href="/add-claim" className="text-yellow-100 text-lg font-semibold hover:text-orange-800 hover:bg-yellow-100 transition-colors duration-200 px-3 py-2 rounded">Add Claim</Link>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`ml-4 px-3 py-2 rounded-full border-2 border-yellow-400 flex items-center justify-center transition-colors duration-200 ${darkMode ? "bg-gray-800 text-yellow-100 hover:bg-yellow-700 hover:text-orange-800" : "bg-yellow-100 text-orange-800 hover:bg-orange-800 hover:text-yellow-100"}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l-.71.71M21 12h-1M4 12H3m16.24 4.24l-.71-.71M6.34 17.66l-.71-.71" /><circle cx="12" cy="12" r="5" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-br from-red-900 via-yellow-700 to-orange-800 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-xl">
          <h1 className="text-3xl font-bold mb-6 text-orange-800">Add New Claim</h1>

          {submitted && <div className="text-green-700 font-semibold mb-4">Claim submitted successfully!</div>}
          {error && <div className="text-red-700 font-semibold mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full px-4 py-2 border rounded" required />
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full px-4 py-2 border rounded" required />
            <input name="claimPerson" value={form.claimPerson} onChange={handleChange} placeholder="Claim Person" className="w-full px-4 py-2 border rounded" required />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full px-4 py-2 border rounded" required />
            <input name="contacts" value={form.contacts} onChange={handleChange} placeholder="Contacts" className="w-full px-4 py-2 border rounded" required />

            <button type="submit" className="w-full bg-orange-800 text-white py-3 rounded font-bold hover:bg-orange-600 transition">
              Submit Claim
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
