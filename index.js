const http = require('http')
const url = require('url')
function onRequest(req,res){
  let link = url.parse(req.url,true)

  if(link.pathname === '/'){
    res.end('<h1>This is the index page</h1>')
  }
  else if(link.pathname === '/add'){
    res.end('<h1>This is the Add page.</h1>')
  }
}


let server = http.createServer(onRequest)
server.listen(4000,()=>console.log('server is running'))
