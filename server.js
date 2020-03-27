const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3002;
require('dotenv').config()

const server = http.createServer(app);
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "shop-frontend", "build", "index.html"))
})

server.listen(port, () => console.log("Application running on port " + port));
