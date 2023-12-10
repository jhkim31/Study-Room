import axios from "axios";
import https from "https";
import fs from "fs";

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,    
});

for (let i = 0; i < 100; i++) {
    axios.get('https://3.36.156.52:10003/test', { httpsAgent })
}