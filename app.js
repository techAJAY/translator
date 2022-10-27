const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/user')
const translate = require('translate');

app.use(express.json())


app.use(router)

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})