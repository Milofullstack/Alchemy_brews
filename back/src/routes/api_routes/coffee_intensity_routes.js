const router = require("express").Router();
const intensityC = require("../../controllers/coffee_intensity_controllers");


router.post("/",intensityC.createIntensity);

module.exports = router;