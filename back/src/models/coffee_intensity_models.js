const pool = require("../config/connection");

const create = async(name, strength, icon) =>{
    const query = "INSERT INTO coffee_intensity (name, strength, icon) VALUES (?,?,?)";
    const [result] = await pool.query(query,[name, strength, icon]);
    if(!result.affectedRows){
        return false;
    }
    return result.insertId;
}

const getAll = async () => {
    const query = "SELECT name, strength, icon FROM coffee_intensity ORDER BY strength ASC";
    const [result] = await pool.query(query);
    if(result.length === 0){
        return result;
    }
    return result;
}

const getIntensity = async (id) =>{
    const query = "SELECT name, strength, icon FROM coffee_intensity WHERE id = ?";
    const [result] = await pool.query(query,[id]);
    if(result.length === 0){
        return result;
    }
    return result[0];
}

module.exports = {create, getAll, getIntensity}