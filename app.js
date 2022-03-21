const http = require('http')
const path = require('path')
const port = 5000

const server = http.createServer( (req,res) => {
    const url = req.url

    if ( url === "/" ) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h2>XXX SAYFASININ ANASAYFASI</h2>')
    } else if ( url === "/about" ) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h2>XXX Sayfasının Hakkımda Sayfası</h2>')
    } else if ( url === "/contact" ) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h2>XXX Sayfasının İletişim Sayfası</h2>')
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write('<h1>404 NOT FOUND</h2>')
    }


    res.end()
})


server.listen(port, () => {
    console.log(`Server Aktif http://127.0.0.1:${port}`)
})