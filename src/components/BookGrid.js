import React, { useState, useEffect } from "react";
import bookcover from "../asset/img/bookcover.jpg";

function BookGrid() {
  const [books, setBooks] = useState([]);
  const [qr, setQR] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/generate-qr");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        console.log(data);
        setBooks(data.books);
        setQR(data.qr);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {books.map((book) => (
        <div
          key={book.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f4f4f4",
            backgroundImage: `url(${bookcover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={qr} alt="QR Code" />
          <p style={{ color: "#000", fontWeight:700, marginTop:"-5px"}}>{book.title}</p>
        </div>
      ))}
    </div>
  );
}

export default BookGrid;
