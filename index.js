const express = require('express')

const server = express()

server
  .get('/', (r, p) => {
    console.log('deu1')
    p.send('deu1')
  })
  .get('/aa', (r, p) => {
    console.log('deu1')
    p.send('deu1')
  })

  .listen(3333)