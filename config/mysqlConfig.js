const { Sequelize } = require("sequelize")

const database = process.env.DATABASE
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOSTNAME

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: 'mysql'
    }
)

const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySql conexion exitosa")
    } catch (error) {
        console.log("error de conexion mysql: ", error)
    }
}

module.exports = { sequelize, dbConnectMySql }
