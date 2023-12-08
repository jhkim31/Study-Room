import axios from "axios";
import fs from "fs";
import https from "https";

const caCertPath = 'rootCA.crt';
const caCert = fs.readFileSync(caCertPath, 'utf8');
const httpsAgent = new https.Agent({
    ca: caCert,
    keepAlive: true
});

const agent = axios.create({
    httpsAgent: httpsAgent
})
const serverUrl = 'https://localhost:3000';

agent.get(serverUrl, { httpsAgent })
    .then(response => {
        console.log('서버 응답:', response.data);
    })
    .catch(error => {
        console.error('에러 발생:', error.message);
    });



