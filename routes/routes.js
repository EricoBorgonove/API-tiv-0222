const express = require('express')
const { engine } = require('express-handlebars')
const router = express()
//const router1 = express()
const path = require('path')
//router.use (express.static('./public/'))

router.engine('handlebars', engine())
router.set ('view engine', 'handlebars')

router.get ('/h1', (req, res) =>{
    res.render('index')
})
router.get ('/pagina1', (req, res) =>{
    res.render('pagina1')
})
router.get ('/pagina1', (req, res) => {
    res.sendFile(path.resolve('.public/pagina1.html'))
})
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
