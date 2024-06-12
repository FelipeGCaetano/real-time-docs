import express from 'express'
import { config } from 'dotenv'
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'

config();

const app = express();
const port = process.env.PORT;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, '../..', 'public');
app.use(express.static(publicDir));

const httpServer = http.createServer(app);

httpServer.listen(port, () => 
    console.log(`Server running on port ${port}`)
);

const io = new Server(httpServer);

io.on("connection", () => {
    console.log('Client connected');
})
