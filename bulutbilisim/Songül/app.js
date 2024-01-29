const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Renkli ve stile edilmiş HTML sayfası
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Songül Pulat</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f0f0;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #3498db;
        }
        p {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Songül Pulat</h1>
      <p>Merhaba, benim adım Songül Pulat. Hoş geldiniz!</p>
    </body>
    </html>
  `;

  res.end(html);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
