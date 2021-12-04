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

module.exports = router;