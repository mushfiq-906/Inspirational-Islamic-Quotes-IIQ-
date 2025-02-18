const path = require('path')
const process = require('process')
const express = require('express')
const app = express()

const helmet = require('helmet')
const cookieParser = require('cookie-parser') 

app.use(cookieParser())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded())


// router
const dataRouter = require('./route/dataRouter.js')
const searchRouter = require('./route/searchRouter.js')


app.use('/data',dataRouter)
app.use('/search', searchRouter)


app.listen(process.env.PORT || 4000 , ()=>{
    console.log("App is connected on Port 3000")
})

