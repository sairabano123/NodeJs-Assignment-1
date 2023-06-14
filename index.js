
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Reading File for Home Page
        fs.readFile('D:/NodeJs Training/SessionOne/HomePage.txt', 'utf8', (err, data) => {
            if (err) {
                res.write('Error while reading the File.');
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === '/about') {
        // Reading File for About Us Page
        fs.readFile('D:/NodeJs Training/SessionOne/AboutUs.txt', 'utf8', (err, data) => {

            if (err) {
                res.write('Error while reading the File.');
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        });

    } else {
        // Reading File for For any other page
        fs.readFile('D:/NodeJs Training/SessionOne/File.txt', 'utf8', (err, data) => {
            if (err) {
                res.write('Error reading the file');
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }

});

server.listen(30001);
