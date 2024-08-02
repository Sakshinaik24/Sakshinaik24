const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
{ id: 1, title: 'Book 1', author: 'Author 1' },
{ id: 2, title: 'Book 2', author: 'Author 2' },
{ id: 3, title: 'Book 3', author: 'Author 3' },
];

app.get('/books', (req, res) => {
res.json(books);
});

app.post('/books', (req, res) => {
const { title, author } = req.body;
const id = books.length + 1;
const newBook = { id, title, author };

books.push(newBook);
res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
const { id } = req.params;
const { title, author } = req.body;
const book = books.find((b) => b.id === parseInt(id));
if (!book) {
return res.status(404).send('Book not found');
}
book.title = title;
book.author = author;
res.json(book);
});

app.delete('/books/:id', (req, res) => {
const { id } = req.params;
books = books.filter((b) => b.id !== parseInt(id));
res.sendStatus(204);
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
