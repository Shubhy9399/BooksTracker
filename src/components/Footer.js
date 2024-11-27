import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f0f8ff",
        padding: "10px",
        position: "absolute",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        position:"sticky"
      }}
    >
      <p style={{ color: "#333" }}>Copyright © BookTracker.com</p>
    </footer>
  );
}

export default Footer;
