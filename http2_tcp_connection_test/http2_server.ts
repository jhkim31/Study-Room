import express from "express";
import http2Express from "http2-express-bridge";
import path from "path";
import http2 from "http2";
import fs from "fs";

const app = http2Express(express);

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'server.key'), 'utf-8'),
    cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'), 'utf-8'),
    allowHTTP1: true
};

const server = http2.createSecureServer(options, app);

app.get('/', (req, res) => {
    res.send('test');
});

server.listen(3000);