const router = require("express").Router();
const intensityC = require("../../controllers/coffee_intensity_controllers");
const {validateCreateIntensity, validateParamId} = require("../../middleware/validation/coffee_intensity_validators");


router.post("/",validateCreateIntensity,intensityC.createIntensity);
router.get("/",intensityC.getAllIntensities);
router.get("/:id",validateParamId,intensityC.getIntensityById);
router.put("/:id",validateParamId,validateCreateIntensity,intensityC.updateIntensity);

module.exports = router;