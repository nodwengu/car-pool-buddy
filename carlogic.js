
module.exports = function regNumbers(pool) {

   async function addNumber(cars) {
      let data = [cars.seats, cars.reg_number, cars.user_id];
      let query = `INSERT INTO cars(seats,reg_number,user_id) VALUES($1, $2, $3)`;
      return await pool.query(query, data);
   }


   return {
      addNumber,

   }
}