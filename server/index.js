const express = require("express");
const app = express();
const SERVER_PORT = 4000;
const ctrl = require("./controller/book_controller");
app.use(express.json());

app.get("/api/books", ctrl.getAllBooks);
app.post("/api/books", ctrl.createBook);
app.put('/api/books/:book_id', ctrl.editBook)

app.listen(SERVER_PORT, (req, res) =>
  console.log(`Server running on port ${SERVER_PORT}`)
);
