# 📚 Online Book Library

## 🎯 Objective

A full-stack web-based library application where users can browse available books, view details, borrow books, and see the list of books they have borrowed.  
Built using **Angular** for the frontend, **Node.js/Express** for the backend API, and **MySQL** for the database.



## ✨ Features

- **Browse Books:** View a list of all available books in the library 📖  
- **View Book Details:** See more information about a specific book (title, author, availability) 🔍  
- **Borrow Books:** Users can borrow a book if it is currently available by providing their name 🙋‍♂️➡📚  
- **View Borrowed Books:** Users can see a list of books they have currently borrowed 📄  
- **Admin Functionalities:**  
  - Add new books ➕  
  - Update existing books ✏  
  - Delete books 🗑  
  - Mark books as returned 📚➡✅  



## 💻 Technology Stack

- **Frontend:** Angular 16, Angular Material, TypeScript 🅰  
- **Backend:** Node.js, Express.js, JavaScript 🟩  
- **Database:** MySQL 🐬  
- **API Communication:** RESTful API 🌐  



## 📁 Project Structure

```
.
├── Backend/                # Node.js/Express API ⚙
│   ├── node_modules/
│   ├── .env                # Environment variables 🔑
│   ├── db.js               # Database connection setup 🔗
│   ├── index.js            # Main server file 🚦
│   └── package.json
│
└── Frontend/               # Angular Application 🅰
    ├── src/
    │   ├── app/
    │   │   ├── app-routing.module.ts 🗺
    │   │   └── app.module.ts 🧱
    │   ├── components/ # BookList, BookDetails, Borrow UI Components 🧩
    │   ├── services/   # BookService for API calls 📡
    │   ├── assets/ 🖼
    │   ├── environments/ 🌍
    │   ├── index.html 📄
    │   ├── main.ts ▶
    │   └── styles.css 🎨
    ├── angular.json ⚙
    └── package.json 📦
```



## 🚀 Setup and Installation

### ✅ Prerequisites

- Node.js and npm installed  
- MySQL server installed and running  



### 🔧 Backend Setup

```bash
# Navigate to the backend folder
cd Backend

# Install dependencies
npm install

# Open `.env` file in the Backend folder and update:
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=book_library
PORT=3000
```

### 📦 MySQL Database Setup (Schema)

```sql
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
  borrower_name VARCHAR(255) NOT NULL,
  borrowed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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

```



### ▶ Start the Backend Server

```bash
npm start
# API will be available at: http://localhost:3000
```



### 🖥 Frontend Setup

```bash
# Open a new terminal
cd Frontend

# Install frontend dependencies
npm install

# Start Angular development server
ng serve --open
# Opens at: http://localhost:4200
```



## 🔗 API Endpoints

| Method | Endpoint               | Description                                      |
|--------|------------------------|--------------------------------------------------|
| GET    | `/api/books`           | Get all books 📚                                |
| POST   | `/api/books`           | Add a new book ➕                                |
| GET    | `/api/books/:id`       | Get details of a book 🔍                         |
| PUT    | `/api/books/:id`       | Update a book ✏                                  |
| DELETE | `/api/books/:id`       | Delete a book 🗑                                 |
| POST   | `/api/borrow/:id`      | Borrow a book 🙋‍♂️➡📚                            |
| GET    | `/api/borrowed`        | Get list of borrowed books 📄                    |
| DELETE | `/api/borrowed/:id`    | Return a borrowed book ✅                        |



## 🗄 Database Tables

### `books`

| Field       | Type         | Description                   |
|-------------|--------------|-------------------------------|
| id          | INT (PK)     | Auto-incrementing ID          |
| title       | VARCHAR(255) | Book title                    |
| author      | VARCHAR(255) | Book author                   |
| description | TEXT         | Optional book description     |
| available   | INT          | Available book count          |

### `borrowed_books`

| Field         | Type         | Description                             |
|---------------|--------------|-----------------------------------------|
| id            | INT (PK)     | Auto-incrementing ID                    |
| book_id       | INT (FK)     | References `books(id)`                 |
| borrower_name | VARCHAR(255) | Name of the person borrowing the book  |
| borrowed_at   | TIMESTAMP    | Time of borrowing                      |


## 📬 Contact

For any queries or feedback, please feel free to reach out.  
Happy Coding! 💻✨


