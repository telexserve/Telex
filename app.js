var express = require('express')
var app = express()

app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render(__dirname + '/src/web.ejs')
})

app.listen(500)