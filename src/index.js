const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
// app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome',
    status: 'ok'
  })
})

app.listen(1337, () => {
  console.log('Sever started on http://localhost:1337')
})