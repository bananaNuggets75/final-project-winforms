'use client';
import React from "react";
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Task Assignment",
    description: "Assign tasks with deadlines, priorities, and descriptions.",
  },
  {
    title: "Progress Tracking",
    description: "Monitor task completion rates and employee productivity.",
  },
  {
    title: "Performance Reports",
    description: "Generate reports to analyze productivity.",
  },
  {
    title: "Employee Feedback",
    description: "Collect and analyze employee satisfaction surveys.",
  },
];

const Home: React.FC = () => {
  return (
    <div className="container" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#333" }}>TaskFlow</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Employee Task Management and Feedback System
        </p>
      </header>

      {/* Introduction Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#333" }}>Welcome to TaskFlow</h2>
        <p>
          TaskFlow helps managers assign tasks, track employee performance, and gather feedback
          to improve workplace productivity and satisfaction.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#333" }}>Key Features</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {features.map((feature, index) => (
            <div key={index} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#0070f3" }}>{feature.title}</h3>
              <p style={{ fontSize: "1rem", color: "#555" }}>{feature.description}</p>
              {/* Link each feature to a relevant page */}
              <Link href={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: "#0070f3", textDecoration: "underline" }}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h3 style={{ fontSize: "1.5rem", color: "#333" }}>Get Started with TaskFlow</h3>
        <p>Empower your team to achieve more!</p>
        <button
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          onClick={() => alert("Feature coming soon!")}
        >
          Learn More
        </button>
      </section>

      {/* Footer Section */}
      <footer style={{ textAlign: "center", marginTop: "40px", color: "#999" }}>
        <p>&copy; 2024 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
