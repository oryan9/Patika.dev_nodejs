const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {"content-type":"text/html"});
        res.write("<h2>INDEX SAYFASI</h2>");
    }
    else if(url === '/hakkimda'){
        res.writeHead(200, {"content-type":"text/html"});
        res.write("<h2>HAKKIMDA SAYFASI</h2>");
    }
    else if(url === '/iletisim'){
        res.writeHead(200, {"content-type":"text/html"});
        res.write("<h2>ILETISIM SAYFASI</h2>");
    }
    else{
        res.writeHead(404, {"content-type":"text/html"});
        res.write("<h2>SAYFA BULUNAMADI</h2>");
    }
    
});
const port = 5000;
server.listen(port, ()=>{
    console.log(`SUNUCU PORT ${port} de başlatıldı...`);
})