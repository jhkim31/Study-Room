import http2 from 'http2';
import fs from 'fs';
import { join } from 'path';

const certPath = join(__dirname, './rootCA.crt');
const cert = fs.readFileSync(certPath);

const session = http2.connect('https://localhost:3000', {    
    ca: cert
});

for (let i = 0; i < 100; i++) {
    const stream = session.request({ ':path': '/', ':method': 'GET' });
    stream.on('response', (headers, flags) => {        
        stream.on('data', (chunk) => {
            console.log(chunk.toString());
        });

        stream.on('end', () => {
            session.close();
        });
    });

    stream.on('error', (err) => {
        console.error('Request error:', err);
        session.close();
    });

    stream.end();
}


