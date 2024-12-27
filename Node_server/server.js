const http  = require('http');

const server = http.createServer((req, res)=>{
   
try{
    console.log(req.url);
    console.log(req.ip);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Gaurav run first server ever........")
    res.end();
}catch{
    res.statusCode = 400;
}
    

})

server.listen(8000, ()=>{
    console.log("Server is running......");
    
});
