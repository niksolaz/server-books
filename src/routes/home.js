var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send({
        "message": "Welcome on Server Books",
        "routes": {
            "NY Times": {
                "welcome": "/nytimes",
                "books": "/nytimes/books",
                "book": "/nytimes/books/:bID",
            },
            "Google Books": {
                "welcome": "/gbooks",
                "books": "/gbooks/books/{nome-ricerca}",
                "book": "/gbooks/books/{nome-ricerca}/:bID",
                "free e-books": "/gbooks/books/{nome-ricerca}/free-ebook",
                "paid e-books": "/gbooks/books/{nome-ricerca}/paid-ebook",
                "all e-books": "/gbooks/books/{nome-ricerca}/ebook",
            }
        }
    })
})

module.exports = router;