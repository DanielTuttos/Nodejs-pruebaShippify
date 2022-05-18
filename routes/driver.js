const express = require("express")
const { sequelize } = require("../config/mysqlConfig")
const { getAllDrivers } = require("../controllers/Driver.controller")
const { handleHttpError } = require("../utils/handleError")
const { handleHttpOk } = require("../utils/handleOk")
const router = express.Router()

/**
 * Get Drivers
 */
router.get("/alldrivers/:nameid", getAllDrivers)

module.exports = router