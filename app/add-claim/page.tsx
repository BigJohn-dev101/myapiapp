"use client";
import React, { useState } from "react";

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
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error submitting claim");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-900 via-yellow-700 to-orange-800 py-20">
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
  );
}
