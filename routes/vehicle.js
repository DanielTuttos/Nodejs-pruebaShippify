const express = require("express")
const router = express.Router()

// login
router.get("/", (req,res)=>{
    res.send("accediendo a la ruta de vehicle")
})

module.exports = router