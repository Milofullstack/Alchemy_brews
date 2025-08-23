const router = require("express").Router();
const intensityC = require("../../controllers/coffee_intensity_controllers");


router.post("/",intensityC.createIntensity);
router.get("/",intensityC.getAllIntensities);
router.get("/:id",intensityC.getIntensityById);
router.patch("/:id",intensityC.updateIntensity);

module.exports = router;