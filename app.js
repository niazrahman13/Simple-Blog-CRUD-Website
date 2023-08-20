const express = require('express')
const app = express()
const router = require('./src/route/api')
const bodyParser = require('body-parser')
const path = require('path')
// Body Parser

app.use(bodyParser.json())

// Security Middleware

const expressMongoSanitize = require('express-mongo-sanitize')
const rateLimit = require('express-rate-limit')
const xssClean = require('xss-clean')
const helmet = require('helmet')
const cors = require('cors')
const hpp = require('hpp')


// Security implementation

app.use(expressMongoSanitize())
app.use(xssClean())
app.use(helmet())
app.use(cors())
app.use(hpp())

// Rate Limiter

const limit = rateLimit({windowMs:15*60*1000,max:3000})

// Database

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/BLOG')
.then(()=>{
    console.log('Database Connected')
})
.catch(()=>{
    console.log('Database Connection Failed')
})
// Managing Front End Routing

// app.use(express.static('client/dist'))
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
// })

// Managing Backend Routing

app.use("/api/v1",router)

module.exports = app