import Image from "next/image";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", lineHeight: "1.6" }}>
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
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li><strong>Task Assignment:</strong> Assign tasks with deadlines, priorities, and descriptions.</li>
          <li><strong>Progress Tracking:</strong> Monitor task completion rates and employee productivity.</li>
          <li><strong>Performance Reports:</strong> Generate reports to analyze productivity.</li>
          <li><strong>Employee Feedback:</strong> Collect and analyze employee satisfaction surveys.</li>
        </ul>
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
}
