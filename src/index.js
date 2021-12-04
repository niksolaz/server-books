const express = require('express')
const app = express()
const cors = require('cors')
const request = require('request')
const dotenv = require('dotenv')
const fs = require('fs');

dotenv.config()

app.use(cors())
app.use(express.json())
// app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  try {
    let path = './tmp/welcome.json'
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

app.get('/nytimes', (req, res) => {
  try {
    const nytimes = `https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=${process.env.NYTIMES_API_KEY}`;
    let options = {
      json: true
    };
    let path = './tmp/nytimes.json'
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
          let json = JSON.stringify(body.response.docs);
          await fs.writeFile('./tmp/nytimes.json', json, 'utf8', (err) => {
            if (err) {
              console.error(err);
              return;
            };
            console.log("File has been created");
          });
          let data = await JSON.parse(body.response.docs)
          await res.send(data)
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

app.listen(1337, () => {
  console.log('Sever started on http://localhost:1337')
})