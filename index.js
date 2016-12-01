// content of index.js
process.title = "nodeJs"
const http = require('http')
var fs = require('fs')

 function send404Response(response) {
   response.writeHead(404,{"Content-Type": "text/plain"})
   response.write("Error 404: Page not Found")
   response.end()
 }

const port = 3000

const requestHandler = (request, response) => {
  console.log("server is now running at " + request.url)
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {"Content-Type": "text/html" })
    fs.createReadStream("index.html").pipe(response)
    // response.end()
  } else {
    send404Response(response)
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
