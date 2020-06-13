const http = require("http")
const server = http.createServer((req,res)=>{
    console.log("new connection")
    res.end("hello Awesome-continuous deployment-secondtime ")

})
const PORT = process.env.PORT || 8080
server.listen(PORT, () =>console.log("listening"))
