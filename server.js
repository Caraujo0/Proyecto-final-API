const express=require('express')
const js=express()
var bodyParser = require('body-parser')        
js.use(bodyParser.urlencoded({ extended: true }))
js.use(bodyParser.json())
const router=require('./routes');
js.use ('/api',router)
console.log('Escuchando puerto 3002');
js.listen(3002)