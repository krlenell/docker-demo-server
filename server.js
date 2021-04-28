const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


app.get('/api/test', (req, res, next)  => {
  res.status(200).json({ "success": "this says a thing"})
})

app.listen(3000, ()  => {
  console.log('Listening on port 3000')
})
