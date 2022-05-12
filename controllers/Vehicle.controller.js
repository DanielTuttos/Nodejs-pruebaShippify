const { sequelize } = require("../config/mysqlConfig")
const { handleHttpError } = require("../utils/handleError")
const { handleHttpOk } = require("../utils/handleOk")


/**
 * Get vehicle by driver
 * @param {*} req 
 * @param {*} res 
 */
const getVehicleByDriver = async (req, res) => {
    try {
        const { driverId } = req.params
        const [results, metadata] = await sequelize.query("SELECT * FROM vehicle WHERE vehicle.driver_id = :DRIVERID", {
            replacements: { DRIVERID: driverId }
        })
        handleHttpOk(res, results)
    } catch (error) {
        console.log(error)
        handleHttpError(res, "Error getting vehicle by driver")
    }
}

/**
 * vehicle creation
 * send body type json with the data
 * (driver_id, plate, model, type, capacity)
 */
const postVehicleCreation = async (req, res) => {
    try {
        const { driver_id, plate, model, type, capacity } = req.body
        const [results, metadata] = await sequelize.query("INSERT INTO vehicle (driver_id, plate, model, type, capacity)" +
            "values (:DRIVERID , :PLATE , :MODEL , :TYPE, :CAPACITY)", {
            replacements: {
                DRIVERID: driver_id,
                PLATE: plate,
                MODEL: model,
                TYPE: type,
                CAPACITY: capacity
            }
        })
        handleHttpOk(res, results)
    } catch (error) {
        console.log(error)
        handleHttpError(res, "Error posting vehicle")
    }
}

/**
 * Function update vehicle
 * @param {*} req 
 * @param {*} res 
 */
const updateVehicle = async (req, res) => {
    try {
        const { driver_id, plate, model, type, capacity } = req.body
        const { idVehicle } = req.params
        // driver_id, plate, model, type, capacity
        const [results, metadata] = await sequelize.query("UPDATE vehicle " +
            "set driver_id = :DRIVERID, " +
            "plate = :PLATE, " +
            "model = :MODEL, " +
            "type = :TYPE, " +
            "capacity = :CAPACITY " +
            "where id = :ID ", {
            replacements: {
                DRIVERID: driver_id,
                PLATE: plate,
                MODEL: model,
                TYPE: type,
                CAPACITY: capacity,
                ID: Number(idVehicle)
            }
        })
        handleHttpOk(res, results)
    } catch (error) {
        console.log(error)
        handleHttpError(res, "Vehicle update error")
    }
}

/**
 * Delete vehicle by id
 * @param {*} req 
 * @param {*} res 
 */
const deleteVehicle = async (req, res) => {
    try {
        const { idVehicle } = req.params
        const [results, metadata] = await sequelize.query("DELETE FROM vehicle " +
            "WHERE id = :ID ", {
            replacements: {
                ID: Number(idVehicle)
            }
        })
        handleHttpOk(res, results)
    } catch (error) {
        console.log(error)
        handleHttpError(res, "Vehicle delete error")
    }
}

module.exports = { getVehicleByDriver, postVehicleCreation, updateVehicle, deleteVehicle }