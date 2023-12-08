import express from "express";
import fs from "fs";
import https from "https";

const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});

const httpsServer = https.createServer(credentials, app);

const PORT = 3000;

httpsServer.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});