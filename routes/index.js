const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");

router.use("/users", userRoutes)

router.get("/", (req, res) => {
    res.status(200).json({ status: "success", message: "Welcome to Recipe API" })
});

router.all('*', (req, res) => {
    res.status(404).json({ status: "error", message: "Endpoint functionality is not available" })
});

module.exports = router;