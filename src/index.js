const express = require('express')
const app = express()
const cors = require('cors')
const home = require('./routes/home');
const nyTimes = require('./routes/ny-times');
const gBooks = require('./routes/google-books');

app.use(cors())
app.use(express.json())
// app.use(express.static(__dirname + '/static'));

// http://localhost:1337
app.use('/', home);

// List of all books NY Times
app.use('/nytimes', nyTimes);

// List of all Google books
app.use('/gbooks', gBooks);

app.listen(1337, () => {
  console.log('Server started on http://localhost:1337')
  console.log('Server Welcome NY Times on http://localhost:1337/nytimes')
  console.log('Server List Books NY Times on http://localhost:1337/nytimes/books')
  console.log('Server single Book NY Times on http://localhost:1337/nytimes/books/:id')

  console.log('Server Welcome Google Books on http://localhost:1337/gbooks')
  console.log('Server List specific volumes Google on http://localhost:1337/gbooks/books/{nome-ricerca}')
  console.log('Server List specific volumes and specific bID Google on http://localhost:1337/gbooks/books/{nome-ricerca}/{bID}')
  console.log('Server List specific volumes and specific bID Google on http://localhost:1337/gbooks/books/:infosearch/free-ebook')
  console.log('Server List specific volumes and specific bID Google on http://localhost:1337/gbooks/books/:infosearch/paid-ebook')
  console.log('Server List specific volumes and specific bID Google on http://localhost:1337/gbooks/books/:infosearch/ebook')
})