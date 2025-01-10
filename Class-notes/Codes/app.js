const express = require("express"); //importing expressn into code
const bcrypt = require("bcrypt"); //importing bcrypt

const app = express(); //assigning express to app

app.use(express.json()); //express is using json

//in-memory db
let users = []; //creating empty db
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }, //creating books db
  { id: 2, title: "1984", author: "George Orwell" },
];
function validateUser(req, res, next) {
  //middleware function
  const { email, password } = req.body; //assigns email and password to req.body
  if (!email || !password) {
    //if email and password are not provided
    return res.status(400).json({
      //return an error
      message: "email and password are required",
    });
  }
  next(); //moves to the next step
}

app.post("/api/signup", validateUser, (req, res) => {
  try {
    const { email, password } = req.body; //assigned email and password to req.body
    const userExists = users.some((user) => user.email === email); //using "some" array method to check if user exists
    if (userExists) {
      res.json({ message: "you already signed up" }); //if user already exists, give response
    }
    const hashedPassword = bcrypt.hashSync(password, 10); //hash the password
    users.push({ email, hashedPassword }); //update the databse with email and password
    res.json("signed up successfully"); //give response
  } catch (error) {
    console.log(error); //catch any error
  }
});

app.get("/api/users", (req, res) => {
  //get all users
  res.json(users); //get all users
});

app.get("/api/books/", (req, res) => {
  res.json(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id)); //find a book based on its id
  if (!book) return res.status(404).json({ message: "Book not found" }); //if not found return error
  res.json(book); //respond with the book item
});

//add a new entry to your dataase
app.post("/api/books/", (req, res) => {
  const book = {
    id: books.length + 1, //id will be length + 1
    title: req.body.title, //title will be based on what is set in req.body
    author: req.body.author, //author will be based on what is set in req.body
  };
  books.push(book); //push new book to books db
  res.status(201).json(books); //give response
});

//update a book
app.put("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id)); //sorting mechanism
  if (!book) return res.status(404).json({ message: "Book not found" }); //error handling

  book.title = req.body.title; //updting title
  book.author = req.body.author; //updating author
  res.json(books); //give response
});

app.delete("/api/books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id)); //find based on index
  if (bookIndex === -1)
    //matches no books found
    return res.status(404).json({ message: "No books inside database" });
  books.splice(bookIndex, 1); //splice to delete a book based on bookindex
  res.json(books); //give response
});

//fetch all the "genres" from the database
app.get("/api/genres", (req, res) => {
  const genres = []; //empty genres array
  books.forEach((book) => {
    //loop through all books, to perform condition
    if (genres.includes(book.genre)) {
      console.log("something");
    } else {
      genres.push(book.genre);
    }
  });
  res.json(genres); //give response
});

//create a new list with all your authors

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
