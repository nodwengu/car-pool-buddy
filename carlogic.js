 
 module.exports= function regNumbers(pool){
   var database; 
    function addNumber(seatNumber){
      var Regnumber = seatNumber;
      
    database = pool.query('insert into cars(reg_number) values($1)'[Regnumber]);
        
    }
    function regadd(){
        return database;
    }
 return{
    addNumber,
    regadd
 }
}