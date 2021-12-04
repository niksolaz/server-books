var express = require('express');
var router = express.Router();
const request = require('request')
const dotenv = require('dotenv')
const fs = require('fs');

dotenv.config()

router.get('/', (req, res) => {
    try {
      let path = './tmp/welcome-nytimes.json'
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

// List all books NY Times.
router.get('/books', (req, res) => {
    try {
        const nytimes = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.NYTIMES_API_KEY}`;
        let options = {
            json: true
        };
        let path = './tmp/books-nytimes.json'
        if (fs.existsSync(path)) {
            console.log('File exist!')
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) throw err;
                let obj = JSON.parse(data);
                res.send(obj)
                console.log(`Read file at ${path}`)
            });
        } else {
            request(nytimes, options, async (error, response, body) => {
                if (error) {
                    console.log(error)
                    return
                };

                if (!error && res.statusCode == 200) {
                    let json = JSON.stringify(body.results);
                    await fs.writeFile(path, json, 'utf8', async (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        };
                        console.log("File has been created");
                        let data = await JSON.parse(body.results)
                        await res.send(data)
                    });
                };
            });
        }
    } catch (err) {
        console.error(err)
        res.send({
            error: err
        })
    }
})

// Single book NY Times.
router.get('/books/:bID', function (req, res) {
    try {
        let path = './tmp/books-nytimes.json'
        if (fs.existsSync(path)) {
            console.log('File exist!')
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) throw err;
                let obj = JSON.parse(data);
                if (req.params.bID < obj.length) {
                    res.send(obj[req.params.bID])
                    console.log(`Read file at ${path} number ${req.params.bID}`)
                } else {
                    res.send({
                        error: `Book number ${req.params.bID} not funded`
                    })
                    console.log(`Book number ${req.params.bID} not funded`)
                }
            });
        }
    } catch (err) {
        console.error(err)
        res.send({
            error: err
        })
    }
})

module.exports = router;