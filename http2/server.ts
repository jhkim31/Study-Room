import express from "express";
import http2Express from "http2-express-bridge";
import path from "path";
import * as http2 from "http2";
import fs from "fs";
import https from "https";

const app = http2Express(express);

// const app = express();

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'server.key'), 'utf-8'),
  cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'), 'utf-8'),
  allowHTTP1: true
};


// const server = https.createServer(options, app);
const server = http2.createSecureServer(options, app);

app.get('/test', (req, res) => {
  res.send('Hello, HTTP2!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});