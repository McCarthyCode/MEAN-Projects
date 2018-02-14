var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);
    if (request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats/new") {
        fs.readFile('new_cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/css/style.css") {
        fs.readFile('./css/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/img/monorail-cat.jpg") {
        fs.readFile('./img/monorail-cat.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/img/hover-cat.jpg") {
        fs.readFile('./img/hover-cat.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/img/ferrari.jpg") {
        fs.readFile('./img/ferrari.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/img/lamborghini.jpg") {
        fs.readFile('./img/lamborghini.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/img/zr1.jpg") {
        fs.readFile('./img/zr1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("Running in localhost at port 6789");
