// console.log(__dirname+'/../public')
const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');


const publicpath=path.join(__dirname,'/../public');
const port=process.env.PORT || 3000;
console.log(path.join(__dirname,'/../public'));
let app=express();
let server=http.createServer(app);
app.use(express.static(publicpath));
let io=socketIO(server);

io.on('connection',(socket)=>{
    console.log('A new user just connected');
    socket.on('disconnect',()=>{
        console.log('A new user got disconnected ')
    });
});


server.listen(port,()=>{
    console.log('server started on ${port} port '+port);
});