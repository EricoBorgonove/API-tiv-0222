const express = require('express')
const routes = require ('./routes/routes')
const app = express ()
require ('dotenv').config()

app.use ('/', routes)

app.listen (process.env.PORT, () =>{
    console.log (`App rodando na porta ${process.env.PORT}`)
})