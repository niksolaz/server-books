var express = require('express');
var router = express.Router();
const request = require('request')
const dotenv = require('dotenv')
const fs = require('fs');

dotenv.config()

router.get('/', (req, res) => {
  try {
    let path = './tmp/welcome-google.json'
    if (fs.existsSync(path)) {
      console.log('File exist!')
      fs.readFile(path, 'utf8', function (err, data) {
        if (err) throw err;
        let obj = JSON.parse(data);
        res.send(obj)
        console.log(`Read file at ${path}`)
      });
    } else {
      res.send({
        error: 'file not exist!'
      })
    }
  } catch (err) {
    console.error(err)
    res.send({
      error: err
    })
  }
})


// List specific volumes Google.
router.get('/books/:infosearch', (req, res) => {
  try {
    if (process.env.GOOGLE_API_KEY) {
      console.log(req.params.query)
      const gbooks = `https://www.googleapis.com/books/v1/volumes?q=${req.params.infosearch}&printType=books&key=${process.env.GOOGLE_API_KEY}`;
      let options = {
        json: true
      };
      request(gbooks, options, async (error, response, body) => {
        if (error) {
          console.log(error)
          return
        };

        if (!error && response.statusCode == 200) {
          await res.send(body.items)
        };
      });
    } else {
      console.log('GOOGLE API KEY Not exist!')
    }
  } catch (err) {
    console.error(err)
    res.send({
      error: err
    })
  }
})

// List specific volume with specific bID Google.
router.get('/books/:infosearch/:bID', (req, res) => {
  try {
    if (process.env.GOOGLE_API_KEY) {
      console.log(req.params.query)
      const gbooks = `https://www.googleapis.com/books/v1/volumes?q=${req.params.infosearch}&printType=books&key=${process.env.GOOGLE_API_KEY}`;
      let options = {
        json: true
      };
      request(gbooks, options, async (error, response, body) => {
        if (error) {
          console.log(error)
          return
        };

        if (!error && response.statusCode == 200) {
          if (req.params.bID < body.items.length) {
            await res.send(body.items[req.params.bID])
          } else {
              res.send({
                  error: `Book number ${req.params.bID} not funded`
              })
              console.log(`Book number ${req.params.bID} not funded`)
          }
        };
      });
    } else {
      console.log('GOOGLE API KEY Not exist!')
    }
  } catch (err) {
    console.error(err)
    res.send({
      error: err
    })
  }
})

// List free ebooks Google.
router.get('/books/:infosearch/free-ebook', (req, res) => {
  try {
    if (process.env.GOOGLE_API_KEY) {
      console.log(req.params.query)
      const gbooks = `https://www.googleapis.com/books/v1/volumes?q=${req.params.infosearch}&printType=books&filter=free-ebooks&key=${process.env.GOOGLE_API_KEY}`;
      let options = {
        json: true
      };
      request(gbooks, options, async (error, response, body) => {
        if (error) {
          console.log(error)
          return
        };

        if (!error && response.statusCode == 200) {
          await res.send(body.items)
        };
      });
    } else {
      console.log('GOOGLE API KEY Not exist!')
    }
  } catch (err) {
    console.error(err)
    res.send({
      error: err
    })
  }
})

// List free ebooks Google.
router.get('/books/:infosearch/paid-ebook', (req, res) => {
  try {
    if (process.env.GOOGLE_API_KEY) {
      console.log(req.params.query)
      const gbooks = `https://www.googleapis.com/books/v1/volumes?q=${req.params.infosearch}&printType=books&filter=paid-ebooks&key=${process.env.GOOGLE_API_KEY}`;
      let options = {
        json: true
      };
      request(gbooks, options, async (error, response, body) => {
        if (error) {
          console.log(error)
          return
        };

        if (!error && response.statusCode == 200) {
          await res.send(body.items)
        };
      });
    } else {
      console.log('GOOGLE API KEY Not exist!')
    }
  } catch (err) {
    console.error(err)
    res.send({
      error: err
    })
  }
})

// List all ebooks Google.
router.get('/books/:infosearch/ebook', (req, res) => {
  try {
    if (process.env.GOOGLE_API_KEY) {
      console.log(req.params.query)
      const gbooks = `https://www.googleapis.com/books/v1/volumes?q=${req.params.infosearch}&printType=books&filter=ebooks&key=${process.env.GOOGLE_API_KEY}`;
      let options = {
        json: true
      };
      request(gbooks, options, async (error, response, body) => {
        if (error) {
          console.log(error)
          return
        };

        if (!error && response.statusCode == 200) {
          await res.send(body.items)
        };
      });
    } else {
      console.log('GOOGLE API KEY Not exist!')
    }
  } catch (err) {
    console.error(err)
    res.send({
      error: err
    })
  }
})

module.exports = router;