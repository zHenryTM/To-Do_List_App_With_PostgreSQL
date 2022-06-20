const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

require("./routes/router")(app)

app.listen(3000, () => console.log("Server started on port 3000."))
