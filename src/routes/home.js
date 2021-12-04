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
            }
        }
    })
})

module.exports = router;