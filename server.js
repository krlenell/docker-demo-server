const express = require('express')

const app = express()

app.use(express.json())


app.get('/api/test', (req, res, next)  => {
  res.status(200).json({ "success": "this says a thing"})
})

app.listen(3000, ()  => {
  console.log('Listening on port 3000')
})
