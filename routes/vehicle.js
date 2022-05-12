const express = require("express")
const router = express.Router()
const { getVehicleByDriver, postVehicleCreation, updateVehicle, deleteVehicle } = require("../controllers/Vehicle.controller")

/**
 * Get Vehicle by Driver
 */
router.get("/driver/:driverId", getVehicleByDriver)

/**
 * vehicle creation
 */
router.post("/", postVehicleCreation)

/**
 * vehicle update
 */
router.put("/:idVehicle", updateVehicle)

/**
 * delete vehicle
 */
router.delete("/:idVehicle", deleteVehicle)

module.exports = router