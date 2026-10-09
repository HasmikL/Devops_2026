const http = require("node:http");

const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Restaurant Demo</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f7f5f0; color: #263238; }
    header { background: #263c35; color: white; padding: 48px 20px; text-align: center; }
    main { max-width: 760px; margin: 40px auto; padding: 24px; }
    .menu { background: white; padding: 20px; margin: 16px 0; border-radius: 10px; }
    footer { text-align: center; padding: 24px; color: #52615b; }
  </style>
</head>
<body>
  <header>
    <h1>Restaurant Demo</h1>
    <p>Fresh food. Simple ingredients. Good company.</p>
  </header>
  <main>
    <h2>Our Menu</h2>
    <section class="menu"><h3>Garden Salad</h3><p>Fresh greens, tomatoes and house dressing.</p></section>
    <section class="menu"><h3>Classic Pasta</h3><p>Pasta with a rich tomato and herb sauce.</p></section>
    <section class="menu"><h3>Daily Special</h3><p>A seasonal dish prepared by our kitchen.</p></section>
    <p id="status">Application is running.</p>
  </main>
  <footer>Restaurant DevOps Demo Project</footer>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(page);
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Restaurant demo listening on port 3000");
});
