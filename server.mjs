// server.js
import { createServer } from 'https';
import { parse } from 'url';
import { readFileSync } from 'fs';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Load SSL certificate and key
const httpsOptions = {
  key: readFileSync('./ssl/key.pem'),
  cert: readFileSync('./ssl/cert.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, err => {
    if (err) throw err;
    console.log('🚀 HTTPS Server running at https://localhost:3000');
  });
});