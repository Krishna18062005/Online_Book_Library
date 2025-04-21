CREATE DATABASE book_library;
USE book_library;

CREATE TABLE books (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  description TEXT,
  available INT 
);

CREATE TABLE borrowed_books (
  id INT PRIMARY KEY AUTO_INCREMENT,
  book_id INT,
  borrower VARCHAR(255) NOT NULL,
  borrowed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);
INSERT INTO books (title, author, description, available) VALUES 
('The Great Gatsby', 'F. Scott Fitzgerald', 'A novel set in the Jazz Age, portraying the American dream.', 5),
('To Kill a Mockingbird', 'Harper Lee', 'A story of racial injustice and childhood innocence.', 3),
('1984', 'George Orwell', 'A dystopian novel about totalitarianism and surveillance.', 4),
('Pride and Prejudice', 'Jane Austen', 'A classic romantic novel of manners.', 2),
('The Hobbit', 'J.R.R. Tolkien', 'A fantasy adventure before the events of The Lord of the Rings.', 6),
('The Catcher in the Rye', 'J.D. Salinger', 'A story about adolescent alienation and rebellion.', 2),
('The Alchemist', 'Paulo Coelho', 'A philosophical novel about following your dreams.', 7),
('Moby Dick', 'Herman Melville', 'A sea adventure of obsession and revenge.', 1),
('The Book Thief', 'Markus Zusak', 'A powerful story set in Nazi Germany, narrated by Death.', 4);
