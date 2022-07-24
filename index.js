import { createServer } from 'http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end('End');
})

server.listen(process.env.PORT || 3000);