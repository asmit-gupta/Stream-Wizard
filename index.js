import http from 'http'
import express from 'express'
import path from 'path'
import {Server as SocketIo} from 'socket.io'

const app = express();
const server = http.createServer(app);
const io = new SocketIo(server)

app.use(express.static(path.resolve('./public')))

io.on('connection', socket => {
    console.log(`Socket connected`, socket.id);
})

server.listen(3000, ()=> console.log(`HTTP SERVER RUNING ON PORT NO 3000 ✅`))