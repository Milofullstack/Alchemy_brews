const pool = require("../config/connection");

const create = async(name, strength, icon) =>{
    const query = "INSERT INTO coffee_intensity (name, strength, icon) VALUES (?,?,?)";
    const [result] = await pool.query(query,[name, strength, icon]);
    if(!result.affectedRows){
        return false;
    }
    return result.insertId;
}

module.exports = {create}