'use client';
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 pb-20 sm:p-20 font-sans bg-gray-100">
      {/* Header */}
      <header className="w-full text-center py-6 bg-blue-600 text-white">
        <h1 className="text-2xl sm:text-4xl font-bold">Dashboard</h1>
        <p className="text-sm sm:text-base">
          View performance trends and employee highlights.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center gap-12 flex-grow text-center">
        {/* Welcome Section */}
        <div className="max-w-xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Welcome to the Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Track overall company and employee performance in one place.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/performance-reports"
            className="block w-full px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:shadow-lg hover:bg-blue-600 transition text-lg"
          >
            Performance Reports
          </Link>
          <Link
            href="/progress-tracking"
            className="block w-full px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:shadow-lg hover:bg-green-600 transition text-lg"
          >
            Progress Tracking
          </Link>
          <Link
            href="/employee-feedback"
            className="block w-full px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:shadow-lg hover:bg-purple-600 transition text-lg"
          >
            Employee Feedback
          </Link>
          <Link
            href="/task-assignment"
            className="block w-full px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:shadow-lg hover:bg-yellow-600 transition text-lg"
          >
            Task Assignment
          </Link>
        </nav>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-10">
        <p>&copy; 2024 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
}
