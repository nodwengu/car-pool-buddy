
module.exports = function regNumbers(pool) {

   async function addNumber(car) {
      
      let data = [car.seats, car.reg_number, car.user_id];
      let query = `INSERT INTO cars(seats,reg_number,user_id) VALUES($1, $2, $3)`;
      return await pool.query(query, data);
   }

   function regadd() {
      return "database"
   }

   return {
      addNumber,
      regadd
   }
}