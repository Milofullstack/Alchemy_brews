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
    return result;
}

const getIntensity = async (id) =>{
    const query = "SELECT id, name, strength, icon FROM coffee_intensity WHERE id = ? LIMIT 1";
    const [result] = await pool.query(query,[id]);
    return result[0] ? result[0] : null;
}

const intensityUpdate = async (id, name, strength, icon) => {
    const query = "UPDATE coffee_intensity SET name = ?, strength = ?, icon = ? WHERE id = ?"
    const [result] = await pool.query(query, [name, strength, icon, id]);
    if(result.affectedRows === 0){
        return false;
    }
    return result.affectedRows;
}

module.exports = {create, getAll, getIntensity, intensityUpdate}