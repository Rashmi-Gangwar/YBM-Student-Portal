import React from "react";
import "./Library.css";

const Library = () => {
  const categories = [
    "Science & Technology",
    "Literature",
    "Commerce",
    "Mathematics",
    "History",
    "Biographies",
    "Competitive Exams",
  ];

  const recentBooks = [
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Science",
    },
    {
      title: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
      category: "Biography",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Literature",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Commerce",
    },
    {
      title: "India After Gandhi",
      author: "Ramachandra Guha",
      category: "History",
    },
  ];

  return (
    <div className="library-container">
      <h1 className="library-heading">University Library</h1>

      <div className="search-bar">
        <input type="text" placeholder="Search for books, authors, categories..." />
        <button>Search</button>
      </div>

      <div className="category-section">
        <h2>Book Categories</h2>
        <div className="category-list">
          {categories.map((cat, i) => (
            <span key={i} className="category-chip">{cat}</span>
          ))}
        </div>
      </div>

      <div className="recent-books">
        <h2>Recently Added Books</h2>
        <div className="book-grid">
          {recentBooks.map((book, index) => (
            <div className="book-card" key={index}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="reading-area">
        <h2>Reading Area & Resources</h2>
        <p>
          Our library offers a peaceful and well-equipped reading space for students and faculty. 
          Access digital journals, e-books, reference materials, and competitive exam guides all in one place.
        </p>
      </div>
    </div>
  );
};

export default Library;
