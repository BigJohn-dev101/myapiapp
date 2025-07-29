"use client";
import React, { useState } from "react";
import Head from "next/head";

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
      {/* Removed View Details and Update Status buttons for consistency with landing page */}
    </div>
  );
}

export default function ClaimsPage() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Claims | Claims API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"} min-h-screen font-sans`}>
        {/* Navigation - same as landing page */}
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
              <a href="/" className="text-yellow-100 text-lg font-semibold hover:text-orange-800 hover:bg-yellow-100 transition-colors duration-200 px-3 py-2 rounded">Back to Home</a>
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
        <div className="max-w-4xl mx-auto px-6 pt-40">
          <h1 className={`text-5xl font-bold mb-12 hero-text text-center ${darkMode ? "text-white" : "text-gray-900"}`}>All Claims</h1>
          <div className="w-full flex flex-col items-center">
            {claimsData.slice(0, 2).map((claim) => (
              <ClaimCard claim={claim} key={claim.claimID} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <a href="/" className="text-yellow-100 text-lg font-semibold hover:text-orange-800 hover:bg-yellow-100 transition-colors duration-200 px-3 py-2 rounded">Back to Home</a>
          </div>
        </div>
        {/* Footer - matches landing page colors, no links */}
        <footer className="bg-gradient-to-br from-red-900 via-yellow-700 to-orange-800 py-12 border-t border-orange-900 rounded-2xl mx-8 mt-12">
          <div className="max-w-7xl mx-auto px-6">
            <div>
              <h3 className="text-2xl font-bold hero-text mb-4 text-yellow-200">Claims API</h3>
              <p className={`text-orange-100 px-3 py-1 rounded-lg ${darkMode ? 'bg-blue-200' : ''}`}>The future of claims management.</p>
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
