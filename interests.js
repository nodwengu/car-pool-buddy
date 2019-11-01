module.exports = function Interested(pool) {

    async function thumbsUp() {
        let interests = await pool.query('SELECT COUNT(*) from users');
        return interests.rows[0].count;

        // return "interests10"
    }
    async function carsAvailable() {
        let interests = await pool.query('SELECT COUNT(*) from cars');
        return interests.rows[0].count;

        // return "interests10"
    }

    

    return{
        thumbsUp,
     carsAvailable

    }

}