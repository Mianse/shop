const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT || 4000
const app = express()

app.listen(port,()=>{
    console.log(`server connected on ${port}`)
})