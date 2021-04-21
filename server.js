const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')

const cors = require('cors')

const port = process.env.PORT || 4000

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log('Database connected')
)

app.use(express.json())
app.use(cors())
// route urls will be appended to baseadress

app.use('/app', routesUrls)

app.listen(port, () => console.log('Server running yeeay'))
