const express = require('express')
const router = express.Router()
const path = require('path')

router.get ('/', (req, res) => {
    res.send ('Olá Mundo')
})
router.get ('/home', (req, res) => {
    res.send ('Voce está na página principal')
})
router.get ('/teste', (req, res) =>{
    res.send ('teste')
})
router.use(function (req,res, next){
    res.status(404).send ('Rota não encontrada')
})
module.exports = router
