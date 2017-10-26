
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
var port= process.env.port | 8000;
var index = require('./routes/index');
var DK_BoiBan = require('./routes/DK_BoiBan.js');
var DK_ThuNgan = require('./routes/DK_ThuNgan.js');
require('./routes/socket.js')(io);

app.use('/DK_BoiBan', DK_BoiBan);
app.use('/DK_ThuNgan', DK_ThuNgan);

server.listen(port,function(){
  console.log("App running at port",port);
});