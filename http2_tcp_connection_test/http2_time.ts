import http2 from 'http2';


const session = http2.connect('https://3.36.156.52:10003', {
    rejectUnauthorized: false
});

for (let i = 0; i < 100; i++) {
    const stream = session.request({ ':path': '/test', ':method': 'GET' });
    stream.on('response', (headers, flags) => {
        stream.on('data', (chunk) => {
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


