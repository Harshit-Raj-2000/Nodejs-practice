const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',(req,res) =>{
  res.sendFile(__dirname + '/index.html')
})



app.post('/read',(req,res)=>{
  res.send('This is read!')
})

app.put('/update',(req,res)=>{
  res.send('This is update!')
})

app.delete('/delete',(req,res)=>{
  res.send('This is Delete!!')
})

app.listen(4000,() => console.log('Server is running'))
