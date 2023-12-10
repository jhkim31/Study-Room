import axios from "axios";
import https from "https";
import fs from "fs";

const httpsAgent = new https.Agent({    
    ca: fs.readFileSync("./rootCA.crt"),        
});


for (let i = 0; i < 10; i++) {
    axios.get('https://localhost:3000', {httpsAgent})
}


