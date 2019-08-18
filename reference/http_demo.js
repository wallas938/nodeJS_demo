const http = require('http');

//CREATE SERVER OBJECT

http.createServer((req, res) => {
    //Write response
    res.write('Hello World!');
    res.end()
}).listen(5000, () => console.log('Server running...'))
