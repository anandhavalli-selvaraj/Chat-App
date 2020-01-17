// console.log(__dirname+'/../public')
const path=require('path');
const express=require('express');
const publicpath=path.join(__dirname,'/../public');

const port=process.env.PORT || 3000;
console.log(path.join(__dirname,'/../public'));
var app=express();
app.use(express.static(publicpath));
app.listen(port,()=>{
    console.log('server started on ${port} port '+port);
});