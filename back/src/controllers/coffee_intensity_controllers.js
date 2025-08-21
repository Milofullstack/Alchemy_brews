const intensityM = require("../models/coffee_intensity_models");

const createIntensity = async(req,res) =>{
    try {
        const{name,strength,icon} = req.body;
        const newIntensity = await intensityM.create(name,strength,icon);
        if(!newIntensity){
            return res.status(400).json({
                success: false,
                error:"DB_ERROR",
                msg: "error creating coffee intensity"
            });
        }
        return res.status(201).json({
            success: true,
            msg: "coffee intensity created successfully"
        });

        
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

module.exports = {createIntensity}