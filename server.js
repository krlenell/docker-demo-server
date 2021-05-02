require('dotenv/config');
const express = require('express')
const cors = require('cors')

const db = require('./database')

const app = express()

app.use(cors())
app.use(express.json())


app.get('/api/test', (req, res, next)  => {
  db.query(`select * from "actors"`)
    .then(result => {
      console.log(result)
      return res.json(result.rows[0])
    })
    .catch(err  => console.log(err))
})

app.listen(process.env.PORT, ()  => {
  console.log('Listening on port', process.env.PORT)
})
