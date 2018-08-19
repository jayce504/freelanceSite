const express = require('express')
const app = express()

app.get('/', (req, res) => res.render('landing'))
app.get('/about', (req, res) => res.render('about'))
app.get('/faq', (req, res) => res.render('faq'))
app.get('/pricing', (req, res) => res.render('pricing'))
app.get('/process', (req, res) => res.render('process'))
app.get('/portfolio', (req, res) => res.render('portfolio'))

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => console.log('Site launched on port 3000!'))

module.exports = app;
