import React from "react";
import BookGrid from "./BookGrid";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div>
      <header style={{ backgroundColor: "#f0f8ff", padding: "5px" }}>
        <h2 style={{ color: "#333",textAlign:"center" }}>Books Tracker</h2>
      </header>
      <main style={{ padding: "20px" }}>
        <BookGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
