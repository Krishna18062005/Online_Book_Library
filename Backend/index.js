const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 🔹 Get all books
app.get("/api/books", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM books");
  res.json(rows);
});

// 🔹 Add a new book
app.post("/api/books", async (req, res) => {
  const { title, author, description, available } = req.body;
  const [result] = await pool.query(
    "INSERT INTO books (title, author, description, available) VALUES (?, ?, ?, ?)",
    [title, author, description, available]
  );
  res
    .status(201)
    .json({ id: result.insertId, title, author, description, available });
});

// 🔹 Get a specific book
app.get("/api/books/:id", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM books WHERE id = ?", [
    req.params.id,
  ]);
  if (rows.length === 0)
    return res.status(404).json({ error: "Book not found" });
  res.json(rows[0]);
});

// 🔹 Edit a book
app.put("/api/books/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, author, description, available } = req.body;
  const [result] = await pool.query(
    "UPDATE books SET title = ?, author = ?, description = ?, available = ? WHERE id = ?",
    [title, author, description, available, id]
  );
  if (result.affectedRows === 0) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json({ id, title, author, description, available });
});

// 🔹 Delete a book
app.delete("/api/books/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const [rows] = await pool.query("SELECT * FROM books WHERE id = ?", [id]);
  if (rows.length === 0) {
    return res.status(404).json({ error: "Book not found" });
  }
  await pool.query("DELETE FROM books WHERE id = ?", [id]);
  res.status(204).send();
});

// 🔹 Borrow a book
app.post("/api/borrow/:id", async (req, res) => {
  const { borrower } = req.body;
  const id = parseInt(req.params.id, 10);

  const [book] = await pool.query("SELECT * FROM books WHERE id = ?", [id]);
  if (!book.length || !book[0].available) {
    return res.status(400).json({ error: "Book not available" });
  }

  await pool.query("UPDATE books SET available = false WHERE id = ?", [id]);
  await pool.query(
    "INSERT INTO borrowed_books (book_id, borrower, borrowed_date) VALUES (?, ?, NOW())",
    [id, borrower]
  );

  res.status(201).json({ message: "Book borrowed successfully" });
});

// 🔹 Return a borrowed book
app.delete("/api/borrowed/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const [rows] = await pool.query("SELECT * FROM borrowed_books WHERE id = ?", [
    id,
  ]);
  if (rows.length === 0)
    return res.status(404).json({ error: "Borrowed book not found" });
  
  await pool.query(
    "UPDATE books SET available = true WHERE id = (SELECT book_id FROM borrowed_books WHERE id = ?)",
    [id]
  );
  await pool.query("DELETE FROM borrowed_books WHERE id = ?", [id]);
  res.status(204).send();
});
// 🔹 Get all borrowed books with title and author
app.get("/api/borrowed", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT bb.*, b.title, b.author,b.description FROM borrowed_books bb JOIN books b ON bb.book_id = b.id"
  );
  res.json(rows);
});


app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
