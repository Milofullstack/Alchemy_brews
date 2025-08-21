const router = require("express").Router();

router.use("/coffee-intensity",require("./api_routes/coffee_intensity_routes"));

module.exports = router