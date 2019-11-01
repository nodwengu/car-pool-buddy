module.exports= function SignUp(pool){

    async function setUserData(obj){
        let data = [
            obj.name,
            obj.email,
            obj.usertype,
            obj.phone,
            obj.destination,
            obj.pick_up,
            obj.time_slot,
            obj.price
        ]

    let query = "INSERT INTO users(name,email,usertype,phone, destination, pick_up, time_slot, price) VALUES ($1,$2, $3, $4, $5, $6, $7);";
    let results = await pool.query(query, data);
    return results.rows
    
}


async function getUserData(){
    // name = await pool.query("SELECT * FROM users");

    //     return name.rows;

    return "Working"
     
}
return{
    setUserData,
    getUserData
}
}