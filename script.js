
const express = require('express')
const app = express()
//1
app.set("view engine","ejs");
//3
app.use(express.static('./public'))
app.get('/',function(req,res){
     //2
    
    res.render('index')
})
app.listen(3000)