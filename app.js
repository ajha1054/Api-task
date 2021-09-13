const express = require('express')
const app = express()
const port = 5001
var users = require('./example.json')

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:userId',(req,res)=>{
    if(req.params.userId<=5)

   { res.send(users[req.params.userId-1])}
   else
   res.send('Enter value less than 5!!!!')
   
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})