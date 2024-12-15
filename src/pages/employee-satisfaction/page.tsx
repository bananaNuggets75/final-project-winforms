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
      </main>
    </div>
  );
}
