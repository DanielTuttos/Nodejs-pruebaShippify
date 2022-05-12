const { sequelize } = require("../config/mysqlConfig")
const { handleHttpError } = require("../utils/handleError")
const { handleHttpOk } = require("../utils/handleOk")

/**
 * you get a limited number of drivers
 * @param {*} req 
 * @param {*} res 
 */
const getAllDrivers = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query("SELECT * FROM driver LIMIT 20")
        handleHttpOk(res, results)
    } catch (error) {
        handleHttpError(res, "Error getting drivers")
    }
}

module.exports = {getAllDrivers}