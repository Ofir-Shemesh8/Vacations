const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use("/users", require("./users"))
app.use("/admin", require("./admin"))

app.listen(3001,console.log('runnig on 1000'))