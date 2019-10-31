 
 module.exports= function regNumbers(pool){
   var database; 
    function addNumber(seatNUmber){
      var Regnumber = seatNUmber;
    database = pool.query('insert into cars(reg_number) values($1)'[Regnumber]);
        
    }
    function regadd(){
        return database
    }
 return{
    addNumber,
    regadd
 }
}