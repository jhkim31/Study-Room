import * as http2 from 'http2';
import * as fs from 'fs';
import { join } from 'path';

const certPath = join(__dirname, './rootCA.crt');
const cert = fs.readFileSync(certPath);

const session = http2.connect('https://3.36.156.52:10003', {rejectUnauthorized: false });


const apiPath = '/test';
for (let i = 0; i < 10; i++) {
  const stream = session.request({ ':path': apiPath, ':method': 'GET' });
  stream.on('response', (headers, flags) => {
    console.log('Response headers:', headers);

    stream.on('data', (chunk) => {
      console.log('Received data chunk:', chunk.toString());
    });

    stream.on('end', () => {
      console.log('Request completed.');
      session.close();
    });
  });

  stream.on('error', (err) => {
    console.error('Request error:', err);
    session.close();
  });

  stream.end();

}


