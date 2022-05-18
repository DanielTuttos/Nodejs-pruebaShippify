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
        // console.log(req.params);
        const { params } = req;
        if (req.params.nameid != 0) {
            const [results, metadata] = await sequelize.query("SELECT * FROM driver WHERE id = :ID OR first_name LIKE :NAME", {
                replacements: { ID: params.nameid, NAME: `%${params.nameid}%` }
            })
            handleHttpOk(res, results)
        } else {
            const [results, metadata] = await sequelize.query("SELECT * FROM driver LIMIT 20")
            handleHttpOk(res, results)
        }
    } catch (error) {
        console.log(error)
        handleHttpError(res, "Error getting drivers")
    }
}

module.exports = { getAllDrivers }