const express = require('express')
const app = express()
const port = 3000

var BarcodeScanner = require('barcode-scanner')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/', (req, res) => {
	res.render('cart').then(()) => {

	})

})

app.listen(port, () => {
	console.log("Server")
})