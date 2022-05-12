const handleHttpOk = (res, data) => {
    res.status(200)
    res.send({ status: "OK", data })
}

module.exports = { handleHttpOk }