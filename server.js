const jsonServer = require("json-server")
const path = require("path")
const server = jsonServer.create()
const router = jsonServer.router("./public/db.json")
const middlewares = jsonServer.defaults({
  static: "./build",
})

const PORT = process.env.PORT || 3001

server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
  console.log("Server is running")
})

server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
})
