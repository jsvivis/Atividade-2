import express from 'express';

const app = express();

app.use(express.json());

let book = [];
book = [{"id": 1, "nome": "Livro 1", "autor": "Autor 1"},{"id": 2, "nome": "Livro 2", "autor": "Autor 2"},{"id": 3, "nome": "Livro 3", "autor": "Autor 3"}]

app.get('/book', (req, res) => {
    res.json(book)
});

app.get('/book/:id', (req, res) => {
    let bookId = req.params.id - 1;
    if(bookId != null && bookId >= 0 && bookId < book.length){
        res.status(200).json(book[bookId])
    }
    else {
        res.status(404).json({"message": "Livro não encontrado."})
    }
})
app.post('/book', (req,res) => {
const newBook = req.body;

if(newBook !=null) {
    book.push(newBook);
    res.status(201).json({"message": "Livro Cadastrado com sucesso."})
  }
  else
  {
    res.status(400).json({"message": "Erro ao cadastrar o livro."})
  }
})

app.delete('/book/:id', (req, res) => {
  let bookId = req.params.id - 1;

  if(bookId != null && bookId >= 0 && bookId < book.length) {
    delete book[bookId];
    res.status(200).json({"message": "Livro deletado com sucesso"})
  }
  else {
    res.status(404).json({"message": "Livro não encontrado."})
  }
})

app.listen("3000", () => {
    console.log('Server running.');
  })