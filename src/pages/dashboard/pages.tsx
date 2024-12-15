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
        <div className="max-w-xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Welcome to the Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Track overall company and employee performance in one place.
          </p>
        </div>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:shadow-lg transition"
        >
          Go Back Home
        </Link>
      </main>
    </div>
  );
}
