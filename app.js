require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { dbConnectMySql, sequelize } = require("./config/mysqlConfig")
const app = express()

// require("./config/mysqlConfig")

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000

/**
 * Aqui invocamos a las rutas
 */
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:' + port)
})

dbConnectMySql(); 
// sequelize.query()