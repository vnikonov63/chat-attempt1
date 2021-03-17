import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(data);
      }
    });
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server has started on port ${PORT}`);
});
