"use client";
import React, { useState } from "react";

const claimsData = [
  {
    claimID: "CLM-2025-001",
    title: "Vehicle Collision Claim",
    description:
      "Front-end collision damage on Highway 101. Comprehensive assessment required for repair estimates and liability determination.",
    claimPerson: "Sarah Johnson",
    address: "1247 Oak Street, San Francisco, CA 94102",
    contacts: "sarah.johnson@email.com | (555) 123-4567",
  },
  {
    claimID: "CLM-2025-002",
    title: "Property Damage Assessment",
    description:
      "Water damage from burst pipe in commercial building. Structural assessment needed for insurance coverage evaluation.",
    claimPerson: "Michael Chen",
    address: "890 Business Blvd, Suite 200, Los Angeles, CA 90210",
    contacts: "m.chen@company.com | (555) 234-5678",
  },
  {
    claimID: "CLM-2025-003",
    title: "Personal Injury Claim",
    description:
      "Workplace injury requiring medical evaluation and compensation assessment. Full documentation and medical records review needed.",
    claimPerson: "Emma Rodriguez",
    address: "456 Medical Center Dr, Houston, TX 77030",
    contacts: "emma.r@healthcorp.com | (555) 345-6789",
  },
  {
    claimID: "CLM-2025-004",
    title: "Equipment Malfunction Claim",
    description:
      "Industrial equipment failure causing production delays. Technical inspection and financial impact assessment required.",
    claimPerson: "David Kim",
    address: "2100 Industrial Way, Detroit, MI 48201",
    contacts: "d.kim@manufacturing.com | (555) 456-7890",
  },
  {
    claimID: "CLM-2025-005",
    title: "Liability Coverage Review",
    description:
      "General liability claim involving third-party property damage. Legal review and settlement negotiation in progress.",
    claimPerson: "Jennifer Walsh",
    address: "3300 Legal Plaza, Chicago, IL 60601",
    contacts: "j.walsh@legalfirm.com | (555) 567-8901",
  },
  {
    claimID: "CLM-2025-006",
    title: "Natural Disaster Claim",
    description:
      "Storm damage to residential property including roof, windows, and structural elements. Emergency repairs authorized.",
    claimPerson: "Robert Thompson",
    address: "789 Coastal Road, Miami, FL 33101",
    contacts: "r.thompson@gmail.com | (555) 678-9012",
  },
];

function ClaimCard({ claim }: { claim: typeof claimsData[0] }) {
  return (
    <div className="glass-effect backdrop-blur-md bg-orange-800 p-8 rounded-2xl claim-card mb-8 border-2 border-blue-500 shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {claim.claimID}
        </div>
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-400 text-sm font-medium">Active</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{claim.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{claim.description}</p>
      <hr className="border-t border-yellow-100 mb-6" />
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="text-white font-medium">{claim.claimPerson}</span>
        </div>
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-300">{claim.address}</span>
        </div>
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="text-gray-300">{claim.contacts}</span>
        </div>
      </div>
      {/* Removed View Details and Update Status buttons */}
    </div>
  );
}

import Head from "next/head";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Home | Claims API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"} min-h-screen font-sans`}>
      {/* Hero Section */}
      <div className="gradient-bg min-h-screen relative overflow-hidden pb-20">
        {/* Navigation */}
        <nav className="fixed top-8 left-8 right-8 z-50 px-8 py-4 shadow-lg bg-gradient-to-r from-red-900 via-yellow-700 to-orange-800">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-orange-700" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#b45309" />
                <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-2xl font-bold hero-text text-yellow-200">Claims API</span>
            </div>
            <div className="flex space-x-6 items-center">
              <a href="#features" className="text-yellow-100 text-lg font-semibold hover:text-orange-800 hover:bg-yellow-100 transition-colors duration-200 px-3 py-2 rounded">Features</a>
              <a href="/claims" className="text-yellow-100 text-lg font-semibold hover:text-orange-800 hover:bg-yellow-100 transition-colors duration-200 px-3 py-2 rounded">Claims</a>
              <a href="/add-claim" className="text-yellow-100 text-lg font-semibold hover:text-orange-800 hover:bg-yellow-100 transition-colors duration-200 px-3 py-2 rounded">Add Claim</a>
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
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mt-32">
            <h1 className="bg-amber-50 rounded-3xl py-6 text-6xl md:text-8xl font-bold mb-6 hero-text text-gray-900">Claims Management</h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800">Reimagined for the Digital Age</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the most advanced claims processing API. Streamline your workflow with real-time data, intelligent automation, and seamless integration capabilities.
            </p>
          </div>
        </div>
      </div>
      {/* Claims Preview Section (after hero) */}
      <section id="claims-preview" className="py-20 bg-gradient-to-br from-red-900 via-yellow-700 to-orange-800 rounded-2xl mx-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-yellow-100 text-5xl font-extrabold text-center mb-4 hero-text">Latest Claims</h2>
          <p className="text-yellow-100 text-center mb-8 text-lg">Preview of recent claims</p>
          <div className="grid gap-6">
            {claimsData.slice(0, 4).map((claim, idx) => (
              <ClaimCard claim={claim} key={claim.claimID} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a href="/claims">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 text-lg font-semibold">
                View All Claims
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-orange-800 via-yellow-700 to-red-900 rounded-2xl mx-8 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-yellow-100 text-4xl font-bold text-center mb-16 hero-text">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl claim-card border-2 border-red-900 bg-yellow-800">
              <div className="w-16 h-16 bg-gradient-to-r from-red-900 via-yellow-700 to-orange-800 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-200">Real-time Processing</h3>
              <p className="text-orange-100">Process claims instantly with our high-performance API infrastructure.</p>
            </div>
            <div className="p-8 rounded-2xl claim-card border-2 border-yellow-400 bg-yellow-800">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-700 via-orange-800 to-red-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 15v2a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h1V4a2 2 0 114 0v2h5a1 1 0 011 1v1.586l2.707-2.707A1 1 0 0118 6v8a1 1 0 01-1.707.707L14 12.414V15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-200">Secure & Compliant</h3>
              <p className="text-yellow-100">Enterprise-grade security with full compliance standards.</p>
            </div>
            <div className="p-8 rounded-2xl claim-card border-2 border-orange-500 bg-yellow-800">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-800 via-red-900 to-yellow-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-300">Easy Integration</h3>
              <p className="text-yellow-100">RESTful API with comprehensive documentation and SDKs.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-red-900 via-yellow-700 to-orange-800 py-12 border-t border-orange-900 rounded-2xl mx-8 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold hero-text mb-4 text-yellow-200">Claims API</h3>
              <p className="text-orange-100">The future of claims management.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-yellow-100">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-orange-100">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-red-100">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-yellow-100">&copy; 2025 Claims API. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
