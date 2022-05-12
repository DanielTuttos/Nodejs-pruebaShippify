const { sequelize } = require("../config/mysqlConfig")
const { handleHttpError } = require("../utils/handleError")
const { handleHttpOk } = require("../utils/handleOk")

const getAllDrivers = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query("SELECT * FROM driver LIMIT 20")
        handleHttpOk(res, results)
    } catch (error) {
        // console.log(error)
        handleHttpError(res, "Error getting drivers")
    }
}

module.exports = {getAllDrivers}