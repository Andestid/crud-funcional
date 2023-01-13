const http = require('http');
const server = http.createServer((req,res)=>{
res.end('Respondo a tu solicitud V.3-5')
})
const puerto = 3000;
server.listen(puerto,()=>{
    console.log('Escucho tu solicitud')
})