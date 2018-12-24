// BOOK CLASS
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI CLASS
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "Book one",
        author: "John Doe",
        isbn: 89456123
      },
      {
        title: "Book two",
        author: "Jane Williams",
        isbn: 123456789
      }
    ];

    const books = storedBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    let list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${
      book.isbn
    }</td><td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}

// EVENT- DISPLAY BOOKS
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// EVENT- ADD BOOK
document.querySelector("#book-form").addEventListener("submit", e => {
  // Prevent defautl form action
  e.preventDefault();

  // Get the values in each field
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  const book = new Book(title, author, isbn);

  // Add to list
  UI.addBookToList(book);

  // Clear fields
  UI.clearFields();
});

// EVENT DELETE BOOK
document.querySelector("#book-list").addEventListener("click", e => {
  // Delete book fromm list
  //   console.log(e.target);
  UI.deleteBook(e.target);
});
