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
            success: false,
            error: error
        });
    }
}

const getAllIntensities = async (req,res) => {
    try {
        const intensities = await intensityM.getAll();
        if(intensities.length === 0){
            return res.status(404).json({
                success: false,
                error: "NOT_FOUND",
                msg : "error finding coffee intensities"
            });
        }
        return res.status(200).json({
            success: true,
            data: intensities
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        });
    }
}
const getIntensityById = async(req,res) => {
    try {
        const {id} = req.params;
        const intensity = await intensityM.getIntensity(id);
        if(intensity.length === 0){
            return res.status(404).json({
                success:false,
                error: "NOT_FOUND",
                msg:"coffee intensity not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: intensity
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        });
    }
}

module.exports = {createIntensity,getAllIntensities,getIntensityById}