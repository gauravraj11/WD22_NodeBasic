const http  = require('http');

const Port = 9000;

const server = http.createServer((req, res)=>{

    res.write("Mern WD5 Students are genius......");
    res.end();
    

})

server.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`);
    
});