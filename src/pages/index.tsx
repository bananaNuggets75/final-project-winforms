'use client';
import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">TaskFlow</h1>
        <p className="text-lg text-gray-600">
          Employee Task Management and Feedback System
        </p>
      </header>

      {/* Navigation Section */}
      <nav className="text-center mb-8">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="text-blue-600 hover:underline text-lg">
              Fine Management and Payment
            </Link>
          </li>
          <li>
            <Link href="/driversProfile" className="text-blue-600 hover:underline text-lg">
              Drivers Profile and Violation History
            </Link>
          </li>
          <li>
            <Link href="/violationReporting" className="text-blue-600 hover:underline text-lg">
              Violation and Reporting
            </Link>
          </li>
        </ul>
      </nav>

      {/* Call to Action Section */}
      <section className="text-center mb-8">
        <h3 className="text-lg font-semibold text-gray-800">Get Started with TaskFlow</h3>
        <p className="text-gray-600">Empower your team to achieve more!</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
          onClick={() => alert("Feature coming soon!")}
        >
          Learn More
        </button>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-500 mt-8">
        <p>&copy; 2024 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
