const { Socket } = require("dgram");
const express = require("express");
const app = express();
const port = 3000;
const http = require("http");// Import the core HTTP module
const server = http.createServer(app);// Create an HTTP server and pass in 'app'
const path = require("path");

//after installing package --> npm install socket.io
const{ Server } = require("socket.io");
const io = new Server(server);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

server.listen(port,()=>{
    console.log("listening to Port: 3000!");
});

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

io.on("connection", (socket)=>{
    console.log("✅ A user connected:", socket.id);
    io.emit("message", `✅ User is online:`);
    socket.on("user-message",(message)=>{
        io.emit("message",message);
    });
    //frontend se msg aya toh lelo!!

    socket.on("disconnect", () => {
        console.log("❌ User disconnected:", socket.id);
        io.emit("message",`❌ A user is Offline: `);
  });
    
});
