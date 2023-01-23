var http=require('http')
function handler(req,res){
    switch(req.url){
        case '/':
            res.write('home')
            // res.end()
            case '/books':
                res.write('authors')
                // res.end();
    }
}
const port=3000
  const server=http.createServer(handler)
server.listen(port,()=>{
    console.log('server is runningon'+port)
})