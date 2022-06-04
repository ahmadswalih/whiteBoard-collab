const app = require("express")();
const http = require("http").createServer(app)
const io = require("socket.io")(http)

io.on("connection",(socket)=>{
    console.log("User is online");

    socket.on('canvas-data',(data)=>{
        socket.broadcast.emit("canvas-data",data)
    })
})

const Port = 5000
http.listen(Port,()=>{
    console.log(`Server is up and Running ${Port}`);
})